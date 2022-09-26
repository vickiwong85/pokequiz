import React, {useState, useEffect} from 'react';

const FindQuiz = (props) => {
  return (
    <div>
      <h1>Find Quiz</h1>
      <form>
        <label>Category: </label>
        <select>
          <option>Science/Nature</option>
        </select>
        <br></br>
        <label>Difficulty: </label>
        <select>
          <option>Easy</option>
          <option>Medium</option>
          <option>Difficult</option>
        </select>
        <br></br>
        <button onClick={props.handleFind}>Submit</button>
      </form>
    </div>
    );
}


export default FindQuiz;