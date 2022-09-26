import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'

const Quiz = (props) => {



  return (
    <div>
      <h1>Quiz</h1>
      {props.questions.map((question, index) => (
        <Question key={index} question={question}/>
      ))}
      <Question/>
    </div>
    );
}


export default Quiz;