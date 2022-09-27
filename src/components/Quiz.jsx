import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'

const Quiz = (props) => {

  return (
    <div>
      <h1>Quiz</h1>
      {props.questions.length > 1 && props.questions.map((question, index) => (
        <Question key={index} question={question} number={index + 1} chooseAnswer={props.chooseAnswer} index={index} required/>
      ))}
      <br></br>
      <button onClick={props.gradeQuiz}>Submit Quiz</button>
    </div>
    );
}


export default Quiz;