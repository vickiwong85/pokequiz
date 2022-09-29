import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Button = styled.button`
padding: 10px;
background: #3B4CCA;
font-family: 'Noto Sans Mono', monospace;
border-radius: 10px;
margin-top: 40px;
margin-left: 320px;
color: #FFDE00;
&:hover {
    background-color: #130281
  }
`

const FindQuiz = (props) => {
  return (
    <div>
      <h1>Find Quiz</h1>
        <label>Category: </label>
        <select onChange={props.changeCategory}>
          <option value="">Random</option>
          <option value="9" >General Knowledge</option>
          <option value="27">Animals</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="10">Entertainment: Books</option>
          <option value="32">Entertainment: Cartoon and Animations</option>
          <option value="29">Entertainment: Comics</option>
          <option value="11">Entertainment: Film</option>
          <option value="31">Entertainment: Japanese Anime and Manga</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals and Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="20">Mythology</option>
          <option value="24">Politics</option>
          <option value="17">Science and Nature</option>
          <option value="18">Science: Computers</option>
          <option value="30">Science: Gadgets</option>
          <option value="19">Science: Mathematics</option>
          <option value="21">Sports</option>
          <option value="28">Vehicles</option>
        </select>
        <br></br>
        <label>Difficulty: </label>
        <select onChange={props.changeDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br></br>
        <Button onClick={props.handleFind}>Search</Button>
    </div>
    );
}


export default FindQuiz;