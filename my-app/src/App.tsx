import React, {useState} from 'react';
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import {fireauth} from "./Fireauth";

//各ページのtsxファイルをインポート
import {Login} from "./Login";
import Home from "./Home";


function App() {
    // stateとしてログイン状態を管理する。ログインしていないときはnullになる。
    const [loginUser, setLoginUser] = useState(fireauth.currentUser);

    // ログイン状態を監視して、stateをリアルタイムで更新する
    onAuthStateChanged(fireauth, user => {
        setLoginUser(user);
    });
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Login/>
        {/* ログインしていないと見られないコンテンツは、loginUserがnullの場合表示しない */}
        {loginUser ? <Home /> : null}
    </div>
  );
}

export default App;
