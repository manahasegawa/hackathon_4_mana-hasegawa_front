import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//各ページのtsxファイルをインポート
import  Home from "./Home";
import {Login} from "./Login";
import  Management from "./Management";
import  Post from "./Post";
import  View from "./View";
import  NotFound from "./Notfound";


function App() {
  return (
    <div className="App">
        <header className="App-header">
        </header>
        <Login/>
    </div>
  );
}

export default App;
