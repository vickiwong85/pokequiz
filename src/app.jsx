import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Login from './components/Login/Login.jsx';
import Quiz from './components/Quiz.jsx';
import PokeShop from './components/PokeShop.jsx';
import MyPokemon from './components/MyPokemon.jsx';
import FindQuiz from './components/FindQuiz.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Grid from '@mui/material/Grid';


const App = () => {
  const [username, setUsername] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [answersChosen, setAnswersChosen] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [PokeDollars, setPokeDollars] = useState(50);
  const [incorrectQuestions, setIncorrect] = useState('');
  const [ball, setBall] = useState('Poké Ball');
  const [price, setPrice] = useState(10);
  const [pokemonlist, setPokemonList] = useState([]);
  const [changeUser, setChange] = useState();
  const [pokemon, setPokemon] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const [count, setCount] = useState(0);

  if(!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} handleLogin={handleLogin} handleCreate={handleCreate} setUsername={setUsername} setPassword={setPassword}/>
  }

  function handleLogin(event) {
    event.preventDefault();
    var params = {};
    params.username = username;
    params.password = password;
    axios.get('/login', { params })
      .then((data) => {
        if (data.data.length === 0) {
          alert('Wrong username or password!')
          setLoggedIn(false);
        }
        console.log(data);
        setPokeDollars(data.data[0].pokedollars);
        setCount(data.data[0].pokemoncount);
        setId(data.data[0].id)
        setLoggedIn(true);
        var params = {};
        params.userid = data.data[0].id;
        var list = [];
        axios.get('/list', { params })
          .then((results) => {
            var ids = results.data.pokeids;
            var obj = {};
            var currentPoke = ''
            ids.forEach((id) => {
              axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((result) => {
                  var pokemonInfo = {};
                  pokemonInfo.name = result.data.forms[0].name.charAt(0).toUpperCase() + result.data.forms[0].name.slice(1);;
                  pokemonInfo.photo = result.data.sprites.front_default;
                  pokemonInfo.weight = result.data.weight;
                  pokemonInfo.height = result.data.height;
                  pokemonInfo.baseExp = result.data.base_experience;
                  list.push(pokemonInfo);
                  setPokemonList(list);
                })
                .catch((err) => {
                  console.log(err);
                })
            })
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
          })
      })
    .catch((err) => {
      console.log(err);
    })

  }



  function handleLogout (event) {
    event.preventDefault();
    setLoggedIn(false);
  }
  function handleCreate (event) {
    event.preventDefault();
    setLoggedIn(true);
    var params = {};
    params.username = username;
    params.password = password;
    axios.post('/login', { params } )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function changeCategory (event) {
    setCategory(event.currentTarget.value);
  }

  function changeDifficulty (event) {
    setDifficulty(event.currentTarget.value);
  }

  function handleFind (event) {
    event.preventDefault();
    axios.get(`https://opentdb.com/api.php?amount=3&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((data) => {
        console.log(data.data.results);
        setQuestions(data.data.results);
        let answers = {};
        for (let i = 0; i < data.data.results.length; i++) {
          answers[i] = data.data.results[i].correct_answer;
        }
        setCorrectAnswers(answers);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function gradeQuiz (event) {
    event.preventDefault();
    var numberCorrect = 0;
    var questionsIncorrect = [];
    for (var index in answersChosen) {
      if (correctAnswers[index] === answersChosen[index]) {
        numberCorrect++;
      } else {
        questionsIncorrect.push(index);
      }
    }
    var string = '';
    if (questionsIncorrect.length === 0) {
      alert(`You got ${numberCorrect}/${questions.length} correct! ${numberCorrect} PokeDollars have been added to your wallet.`)
    } else if (questionsIncorrect.length === 1) {
      var actual = Number(questionsIncorrect[0]) + 1;
      string += actual.toString();
      alert(`You got ${numberCorrect}/${questions.length} correct! ${numberCorrect} PokeDollars have been added to your wallet. Your answer to question ${string} was incorrect.`);
    } else if (questionsIncorrect.length === 2) {
      for (var question of questionsIncorrect) {
        var actual = Number(question) + 1;
        if (actual === questionsIncorrect.length + 1) {
          string += ` and ${actual.toString()}`
        } else {
          string += actual.toString();
        }
      }
      alert(`You got ${numberCorrect}/${questions.length} correct! ${numberCorrect} PokeDollars have been added to your wallet. Your answer to questions ${string} were incorrect.`)
    } else if (questionsIncorrect.length > 2){
      for (var question of questionsIncorrect) {
        var actual = Number(question) + 1;
        console.log(actual);
        if (actual === questionsIncorrect.length ) {
          string += ` and ${actual.toString()}`
        } else {
          string += actual.toString() + ',';
        }
      }
      alert(`You got ${numberCorrect}/${questions.length} correct! ${numberCorrect} PokeDollar(s) have been added to your wallet. Your answer to questions ${string} were incorrect.`)
    }
    var currentPokeDollars = PokeDollars;
    currentPokeDollars+=numberCorrect;
    setPokeDollars(currentPokeDollars);
    var params = {};
    params.pokedollars = currentPokeDollars;
    params.username = username;
    axios.patch('/pokedollars', { params } )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    setQuestions([]);
  }

  function chooseAnswer (event) {
    var currentAnswers = answersChosen;
    currentAnswers[event.target.id] = event.target.value;
    setAnswersChosen(currentAnswers);
    console.log(answersChosen);
  }

  function purchase (event) {
    var money = PokeDollars;
    if (money < 10 && ball === 'Poké Ball') {
      alert('You do not have enough PokéDollars to buy this!')
      return;
    }
    if (money < 20 && ball === 'Great Ball') {
      alert('You do not have enough PokéDollars to buy this!')
      return;
    }
    if (money < 30 && ball === 'Ultra Ball') {
      alert('You do not have enough PokéDollars to buy this!')
      return;
    }
    if (money < 40 && ball === 'Master Ball') {
      alert('You do not have enough PokéDollars to buy this!')
      return;
    }
    money = money - price;
    console.log(money);
    setPokeDollars(money);
    var params = {};
    params.pokedollars = money;
    params.username = username;
    axios.patch('/pokedollars', { params } )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

    var path = '';
    if (ball === 'Poké Ball') {
      path = 'pokeball';
    }
    if (ball === 'Great Ball') {
      path = 'greatball';
    }
    if (ball === 'Ultra Ball') {
      path = 'ultraball';
    }
    if (ball === 'Master Ball') {
      path = 'masterball';
    }
    var currentPoke = '';

    axios.get(`/pokemon/${path}/`)
      .then((data) => {
        console.log(data.data);
        currentPoke = data.data;
        var poke = data.data.identifier.charAt(0).toUpperCase() + data.data.identifier.slice(1);
        alert(`You bought a ${ball}! When you open the ${ball}... a wild ${poke} jumps out!`);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${data.data.id}`)
          .then((result) => {
            console.log(result.data.forms[0].name);
            console.log(result.data.sprites.front_default);
            var pokemonInfo = {};
            pokemonInfo.name = result.data.forms[0].name.charAt(0).toUpperCase() + result.data.forms[0].name.slice(1);;
            pokemonInfo.photo = result.data.sprites.front_default;
            pokemonInfo.weight = currentPoke.weight;
            pokemonInfo.height = currentPoke.height;
            pokemonInfo.baseExp = currentPoke.base_experience;
            var list = pokemonlist.slice();
            list.push(pokemonInfo);
            console.log(list);
            setPokemonList(list);
            // localStorage.setItem("pokemonlist", JSON.stringify(list));
            setCount(list.length);
            var params = {};
            params.count = list.length;
            params.username = username;
            axios.patch('/count', { params } )
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
            })
            var params = {};
            params.userid = id;
            params.pokeid = data.data.id;
              axios.post('/add', { params})
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch((err) => {
            console.log(err);
          })
  }

  function changeBall (event) {
    setBall(event.currentTarget.value);
    if (event.currentTarget.value === 'Poké Ball') {
      setPrice(10);
    } else if (event.currentTarget.value === 'Great Ball') {
      setPrice(20);
    } else if (event.currentTarget.value === 'Ultra Ball') {
      setPrice(30);
    } else if (event.currentTarget.value === 'Master Ball') {
      setPrice(40);
    }
  }

  return (
    <Grid container spacing={0}>
      <Grid xs={7}>
      <h1>PokéQuiz</h1>
      <h4>Gatcha catch them all!</h4>
      </Grid>
      <Grid xs={4}>
      <h4>Welcome, {username}!</h4>
      <h5>PokéDollars: {PokeDollars}</h5>
      <button onClick={handleLogout}>Log Out</button>
      </Grid>
      <Grid xs={7}>
        <FindQuiz handleFind={handleFind} changeCategory={changeCategory} changeDifficulty={changeDifficulty}/>
        {questions.length > 1 && <Quiz questions={questions} gradeQuiz={gradeQuiz} chooseAnswer={chooseAnswer}/>}
      </Grid>
      <Grid xs={4}>
        <Leaderboard/>
        <PokeShop purchase={purchase} changeBall={changeBall}/>
        <MyPokemon pokemonlist={pokemonlist} count={count}/>
      </Grid>
    </Grid>
    );
}


export default App;