import React, {useState, useEffect} from 'react';
import he from 'he';
import styled from 'styled-components';

const Div = styled.div`
  border: solid 2px #3B4CCA;
  padding: 30px;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
  background: #3B4CCA;
  color: white;
`


const Question = (props) => {

  //randomize answers
  var answers = [];
  answers.push(props.question.correct_answer);
  answers.push(props.question.incorrect_answers[0], props.question.incorrect_answers[1], props.question.incorrect_answers[2]);
  let currentIndex = answers.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [answers[currentIndex], answers[randomIndex]] = [
      answers[randomIndex], answers[currentIndex]];
  }

  //decode symbols in questions
  var question = he.decode(props.question.question);

  //decode symbols in answers
  answers[0] = he.decode(answers[0]);
  answers[1] = he.decode(answers[1]);
  answers[2] = he.decode(answers[2]);
  answers[3] = he.decode(answers[3]);


  return (
    <Div>
      {props.question && <div>
        <h4><strong>Question {props.number}</strong></h4>
        <h5>{question}</h5>
        <form>
        <label><input type="radio" name="option" onClick={props.chooseAnswer} value={answers[0]} id={props.index}/>{answers[0]}</label><br></br>
        <label><input type="radio" name="option" onClick={props.chooseAnswer} value={answers[1]} id={props.index}/>{answers[1]}</label><br></br>
        <label><input type="radio" name="option" onClick={props.chooseAnswer} value={answers[2]} id={props.index}/>{answers[2]}</label><br></br>
        <label><input type="radio" name="option" onClick={props.chooseAnswer} value={answers[3]} id={props.index}/>{answers[3]}</label><br></br>
        </form>
        </div>}
    </Div>
    );
}


export default Question;