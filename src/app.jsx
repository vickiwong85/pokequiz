import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swal from 'sweetalert2';
import LoginButton from './components/LoginButton.jsx';
import LogoutButton from './components/LogoutButton.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import pokelogo from './assets/pokequiz.png';
import Login from './components/Login/Login.jsx';
import Quiz from './components/Quiz.jsx';
import PokeShop from './components/PokeShop.jsx';
import MyPokemon from './components/MyPokemon.jsx';
import FindQuiz from './components/FindQuiz.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Grid from '@mui/material/Grid';
import { Paper, AppBar, Toolbar } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  'border-radius': '50px',
  boxShadow: 24,
  p: 4
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFDE00;
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  align-content: space-evenly;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFDE00;
  font-family: 'Poppins', sans-serif;
  align-content: space-evenly;
  padding: 30px;
`

const Button = styled.button`
padding: 10px;
background: #3B4CCA;
font-family: 'Poppins', sans-serif;
border-radius: 10px;
margin-top: 40px;
margin-bottom: 30px;
margin-left: 130px;
color: white;
&:hover {
    background-color: #130281
  }
`
const Div = styled.div`
padding: 30px;
`
const H4 = styled.h3`
font-family: 'Poppins', sans-serif;
padding-top: 40px;
padding-left: 20px;
`

const App = () => {
  const [username, setUsername] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState('1');
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
  const [leaders, setLeaders] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLeaders, setShowLeader] = useState(false);
  const [showPokeShop, setShowPokeShop] = useState(false);
  const [showPokemon, setShowPokemon] = useState(false);
  const [message, setMessage] = useState();
  const [open, setOpen] = React.useState(false);
  const [openReceipt, setOpenReceipt] = React.useState(false);
  const [receipt, setReceipt] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenReceipt = () => setOpenReceipt(true);
  const handleCloseReceipt = () => setOpenReceipt(false);

  if(!loggedIn) {
    return <div><Login setLoggedIn={setLoggedIn} handleLogin={handleLogin} handleCreate={handleCreate} setUsername={setUsername} setPassword={setPassword}/></div>
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
                  setShowQuiz(true);
                  setShowPokemon(false);
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
    .then(() => {
      axios.get('/leaderboard')
        .then((result) => {
          setLeaders(result.data);
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
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
        axios.get('/leaderboard')
        .then((result) => {
          setLeaders(result.data);
          axios.get('/login', { params })
            .then((data) => {
              setPokeDollars(data.data[0].pokedollars);
              setCount(data.data[0].pokemoncount);
              setId(data.data[0].id);
              setPokemonList([]);
              setLoggedIn(true);
              })
            .catch((err) => {
              console.log(err)
            })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  function changeCategory (event) {
    setCategory(event.currentTarget.value);
  }

  function changeDifficulty (event) {
    setDifficulty(event.currentTarget.value);
  }

  function changeAmount (event) {
    setAmount(event.currentTarget.value);
  }

  function changeDifficulty (event) {
    setDifficulty(event.currentTarget.value);
  }

  function handleFind (event) {
    event.preventDefault();
    axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((data) => {
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
    var income = numberCorrect * 5;
    setMessage(`You got ${numberCorrect}/${questions.length} correct! ${income} PokeDollars have been added to your wallet.`);
    handleOpen();
    var currentPokeDollars = PokeDollars;
    currentPokeDollars+=income;
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
  }

  function purchase (event) {
    event.preventDefault();
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
        currentPoke = data.data;
        var poke = data.data.identifier.charAt(0).toUpperCase() + data.data.identifier.slice(1);
        setReceipt(`You bought a ${ball}. When you open the ${ball}... a wild ${poke} jumps out!`);
        handleOpenReceipt();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${data.data.id}`)
          .then((result) => {
            var pokemonInfo = {};
            pokemonInfo.name = result.data.forms[0].name.charAt(0).toUpperCase() + result.data.forms[0].name.slice(1);;
            pokemonInfo.photo = result.data.sprites.front_default;
            pokemonInfo.weight = currentPoke.weight;
            pokemonInfo.height = currentPoke.height;
            pokemonInfo.baseExp = currentPoke.base_experience;
            setPokemon(pokemonInfo);
            var list = pokemonlist.slice();
            list.push(pokemonInfo);
            setPokemonList(list);
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

  function handleLeaders () {
    axios.get('/leaderboard')
        .then((result) => {
          setLeaders(result.data);
          setShowLeader(true);
          setShowQuiz(false);
          setShowPokemon(false);
          setShowPokeShop(false);
        })
        .catch((err) => {
          console.log(err)
        })
  }

  function handleBuy() {
    setShowLeader(false);
    setShowQuiz(false);
    setShowPokemon(true);
    setShowPokeShop(true);
  }

  function handleQuizzes() {
    setShowLeader(false);
    setShowQuiz(true);
    setShowPokemon(false);
    setShowPokeShop(false);
  }

  return (
    <div>
      <AppBar position="static" alignitems="left" color="primary">
        <Toolbar>
        <Grid container justifyContent="left" wrap="wrap">
        <Grid item>
        <img src={pokelogo} onClick={handleBuy}></img>
        </Grid>
        <Grid item justifyContent="right">
        <H4>Welcome, {username}!</H4>
        <H4>You have {PokeDollars} PokéDollars (PD)</H4>
        </Grid>
        <Grid item>
        <Button onClick={handleQuizzes}>Quizzes</Button>
        <Button onClick={handleLeaders}>Leaderboard</Button>
        <Button onClick={handleBuy}>Pokémon</Button>
        <Button onClick={handleLogout}>Log Out</Button>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <RowContainer>
      <RowContainer>
        {showQuiz && <React.Fragment><FindQuiz handleFind={handleFind} changeCategory={changeCategory} changeDifficulty={changeDifficulty} changeAmount={changeAmount}/>
        <Div></Div></React.Fragment>
        }
        {showQuiz && questions.length > 0 && <Quiz questions={questions} gradeQuiz={gradeQuiz} chooseAnswer={chooseAnswer} handleOpen={handleOpen}/>}
          {showQuiz && message && <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            alignitems="center"
            textAlign= "center"
          >
            <Box sx={style} alignitems="center" textAlign="center">
              <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
              <strong>{message}</strong>
              </Typography>
            </Box>
          </Modal>}
      </RowContainer>
      <ColumnContainer>
        {showLeaders && leaders.length > 1 && <RowContainer><Leaderboard leaders={leaders}/></RowContainer>}
        {showPokeShop&& <PokeShop purchase={purchase} changeBall={changeBall} />}
        {showPokeShop && receipt && pokemon && <Modal
            open={openReceipt}
            onClose={handleCloseReceipt}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            alignitems="center"
            textAlign= "center"
          >
            <Box sx={style} alignitems="center" textAlign="center">
              <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
              <strong>{receipt}</strong>
              </Typography>
              <img src={pokemon.photo}></img>
            </Box>
          </Modal>}
      </ColumnContainer>
      <ColumnContainer>
      {showPokemon && pokemonlist && <MyPokemon pokemonlist={pokemonlist} count={count}/>}
      </ColumnContainer>
      </RowContainer>
      </div>
    );
}



export default App;