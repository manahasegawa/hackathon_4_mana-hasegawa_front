import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

interface ItemData {
    id          :string
    title       :string
    explanation :string
    time        :string
    category    :string
    curriculum  :string
}

function Home() {

    const [itemData, setItemData] = useState<ItemData[]>([]);
    
    const fetchItems = async () => {
        try{
            const getResponse = await fetch("http://localhost:8000", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (getResponse.status === 200) {
                // GETリクエストの結果を処理
                const itemData = await getResponse.json();
                setItemData(itemData);
                //itemData.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
                console.log(itemData);
                // userDataを適切に処理するコードをここに追加
            } else {
                // GETリクエストが失敗した場合の処理
                console.error("GET request failed");
                console.log("getに失敗")
            }
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        fetchItems();
    });

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div>
                {itemData.map((item, index) => (
                    <div key={index} >
                        <p>{item.title}, {item.category},{item.curriculum},{item.explanation},{item.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;