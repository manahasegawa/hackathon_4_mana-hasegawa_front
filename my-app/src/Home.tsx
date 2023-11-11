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
    tag         :string
}

function Home() {

    const [age, setAge] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [itemData, setItemData] = useState<ItemData[]>([]);

    /*
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!name) {
            alert("Please enter name");
            return;
        }

        if (name.length > 50) {
            alert("Please enter a name shorter than 50 characters");
            return;
        }

        if (age < 20 || age > 80) {
            alert("Please enter age between 20 and 80");
            return;
        }

        try{
            const response = await fetch(
                "http://localhost:8000/user",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        age,
                    }),
                }
            );
            if (response.status === 200) {
                fetchUsers();
            } else {
                console.error("POST request failed")
            }

            setName("");
            setAge(0);
        } catch (err) {
            console.error(err)
        }
    };
    */

    const fetchUsers = async () => {
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
                // userDataを適切に処理するコードをここに追加
            } else {
                // GETリクエストが失敗した場合の処理
                console.error("GET request failed");
            }
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        fetchUsers();
    },[]);

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div>
                {itemData.map((item, index) => (
                    <div key={index} >
                        <p>{item.title}, {item.category},{item.tag},{item.explanation},{item.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;