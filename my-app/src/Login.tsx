import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {fireauth} from "./Fireauth";
import React from "react";

export  const Login: React.FC = () => {

     // googleでログインする
    const signInWithGoogle = (): void => {
        // Google認証プロバイダを利用する
        const provider = new GoogleAuthProvider();

        // ログイン用のポップアップを表示
        signInWithPopup(fireauth, provider)
            .then(res => {
                const user = res.user;
                alert("ログインユーザー: " + user.displayName);
            })
            .catch(err => {
                const errorMessage = err.message;
                alert(errorMessage);
            });
    };

    /**
     * ログアウトする
     */
    const signOutWithGoogle = (): void => {
        signOut(fireauth).then(() => {
            alert("ログアウトしました");
        }).catch(err => {
            alert(err);
        });
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>
                Googleでログイン
            </button>
            <button onClick={signOutWithGoogle}>
                ログアウト
            </button>
        </div>
    );
};

