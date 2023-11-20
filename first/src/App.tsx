import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let temp: string = "String hai bc"
  temp = "hLEK"
  type Hello = {
    readonly name:string,
    age:number,
    subjects:Object
  }
  function func(dat: Hello): (string | number)[]{
    dat.age=56
    let arr =[];
    arr.push(10);
    arr.push("JAMAL")
    return arr;
  }
  func({name:"jamal",age:50,subjects:{}})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
