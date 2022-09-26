import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Quiz from './components/Quiz.jsx';
import PokeShop from './components/PokeShop.jsx';
import MyPokemon from './components/MyPokemon.jsx';
import FindQuiz from './components/FindQuiz.jsx';


const App = () => {
  const [questions, setQuestions] = useState([]);

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

  function handleFind (event) {
    event.preventDefault();
    axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
      .then((data) => {
        console.log(data.data.results);
        setQuestions(data.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <h1>PokéQuiz</h1>
      <h4>Gatcha catch them all!</h4>
      <h6>PokeDollars: 10 P</h6>
      <FindQuiz handleFind={handleFind}/>
      {questions.length > 1 && <Quiz questions={questions}/>}
      <PokeShop/>
      <MyPokemon/>
    </div>
    );
}


export default App;