import React, {useState, useEffect} from 'react';
import './Login.css';

export default function Login(props) {

  return(
    <div className="login-wrapper">
      <h1>PokéQuiz</h1>
      <h5>Please Log In</h5>
      <form onSubmit={props.handleLogin}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => props.setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => props.setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h5>Create an Account</h5>
      <form onSubmit={props.handleCreate}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => props.setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => props.setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}