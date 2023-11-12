import React, {useState} from 'react';
import './App.css';
import Home from "./Home";
import Post from "./Post";
import Delete from "./Delete";
import {fireauth} from "./Fireauth";
import {onAuthStateChanged} from "firebase/auth";
import {Login} from "./Login";

function App() {

    // stateとしてログイン状態を管理する。ログインしていないときはnullになる。
    const [loginUser, setLoginUser] = useState(fireauth.currentUser);

    // ログイン状態を監視して、stateをリアルタイムで更新する
    onAuthStateChanged(fireauth, user => {
        setLoginUser(user);
    });
    return (
    <div className="App">
        <div className="App">
            <Login/>
            {/* ログインしていないと見られないコンテンツは、loginUserがnullの場合表示しない */}
            {loginUser ? <Home /> : null}
            {loginUser ? <Post /> : null}
            {loginUser ? <Delete /> : null}
        </div>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
