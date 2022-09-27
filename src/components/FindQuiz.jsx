import React, {useState, useEffect} from 'react';

const FindQuiz = (props) => {
  return (
    <div>
      <h1>Find Quiz</h1>
        <label>Category: </label>
        <select onChange={props.changeCategory}>
          <option value="9" >General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals and Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
        </select>
        <br></br>
        <label>Difficulty: </label>
        <select onChange={props.changeDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br></br>
        <button onClick={props.handleFind}>Search</button>
    </div>
    );
}


export default FindQuiz;