import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Question from './Question.jsx'

const Button = styled.button`
padding: 10px;
background: #3B4CCA;
/* font-family: 'Noto Sans Mono', monospace; */
font-family: 'Poppins', sans-serif;
border-radius: 10px;
margin-left: 400px;
color: white
&:hover {
    background-color: #130281
  }
`
const Div = styled.div`
overflow: scroll;
overflow-x:hidden;
height: 300px;
`

const Quiz = (props) => {

  return (
    <Div>
      <h1>Quiz</h1>
      {props.questions.length > 1 && props.questions.map((question, index) => (
        <Question key={index} question={question} number={index + 1} chooseAnswer={props.chooseAnswer} index={index} required/>
      ))}
      <br></br>
      <Button onClick={props.gradeQuiz}>Submit</Button>
    </Div>
    );
}


export default Quiz;