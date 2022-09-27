import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Quiz from './components/Quiz.jsx';
import PokeShop from './components/PokeShop.jsx';
import MyPokemon from './components/MyPokemon.jsx';
import FindQuiz from './components/FindQuiz.jsx';


const App = () => {
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [answersChosen, setAnswersChosen] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [PokeDollars, setPokeDollars] = useState(0);
  const [incorrectQuestions, setIncorrect] = useState('');

  // useEffect(() => {
  //   axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
  //     .then((data) => {
  //       setQuestions(data.data.results);
  //       console.log(data.data.results[0].question)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, );

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
    setQuestions([]);
  }

  function chooseAnswer (event) {
    var currentAnswers = answersChosen;
    currentAnswers[event.target.id] = event.target.value;
    setAnswersChosen(currentAnswers);
    console.log(answersChosen);
  }

  return (
    <div>
      <h1>PokéQuiz</h1>
      <h4>Gatcha catch them all!</h4>
      <h6>PokeDollars: {PokeDollars}</h6>
      <FindQuiz handleFind={handleFind} changeCategory={changeCategory} changeDifficulty={changeDifficulty}/>
      {questions.length > 1 && <Quiz questions={questions} gradeQuiz={gradeQuiz} chooseAnswer={chooseAnswer}/>}
      <PokeShop/>
      <MyPokemon/>
    </div>
    );
}


export default App;