import React　from "react";
import { useEffect } from "react";
import { useState} from "react";



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
    const [isAsc, setIsAsc] = useState(true);


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
                const Data = await getResponse.json();
                setItemData(Data);
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
    },[]);

    const sortByTime = () => {
        setItemData(itemData.sort((a, b) => (isAsc ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time))));
        setIsAsc((isAsc!=true));
    };

    const columns = [
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'category', headerName: 'category', width: 300 },
        { field: 'curriculum', headerName: 'curriculum', width: 300 },
        { field: 'explanation', headerName: 'explanation', width: 300 },
        { field: 'time', headerName: 'time', width: 300 }
    ]


    return (
        <div className="App">
            <header className="App-header">
            </header>

                    <button onClick={sortByTime}>古い順</button>
                    <button onClick={sortByTime}>新しい順</button>


                <table>
                    <thead>
                    <tr>
                    <th>title</th>
                    <th>category</th>
                    <th>curriculum</th>
                    <th>explanation</th>
                    <th>time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemData.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.curriculum}</td>
                            <td>{item.explanation}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

    );
}


export default Home;