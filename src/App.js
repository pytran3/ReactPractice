import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
              <ul>
                {["foo", "bar"].map(name => <li><Hello name={name}/></li>)}
                <li><Hello name={"hoge"}/></li>
                <li><Hello/></li>
              </ul>
            </header>
        </div>
    );
}

export default App;
