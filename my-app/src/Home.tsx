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
        try {
            const getResponse = await fetch("https://hackathon-4-mana-hasegawa-back-mbuoyt5akq-uc.a.run.app/", {
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
    }, []);

    const sortByTime = () => {
        setItemData(itemData.sort((a, b) => (isAsc ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time))));
        setIsAsc(!isAsc);
    };

    const [filteredCategory, setFilteredCategory] = useState(null);

    const handleFilter = (category: any) => {
        setFilteredCategory(category);
    };

    const filteredItems = filteredCategory
        ? itemData.filter((item: any) => item.category === filteredCategory)
        : itemData;

    const [filteredCurriculum, setFilteredCurriculum] = useState(null);

    const handleFilter2 = (curriculum: any) => {
        setFilteredCurriculum(curriculum);
    };

    const filteredItems2 = filteredCurriculum
        ? itemData.filter((item: any) => item.curriculum === filteredCurriculum)
        : itemData;


    return (
        <div className="App">
            <header className="App-header">
            </header>

            <button onClick={sortByTime}>古い順</button>
            <button onClick={sortByTime}>新しい順</button>

            <label>Filter by Category:</label>
            <select onChange={(e) => {
                handleFilter(e.target.value)
            }}>
                <option value="">カテゴリ：全て</option>
                <option value="ブログ">ブログ</option>
                <option value="書籍">書籍</option>
                <option value="動画">動画</option>

            </select>
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
                {filteredItems.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <button>{item.title}</button>
                        </td>
                        <td>{item.category}</td>
                        <td>{item.curriculum}</td>
                        <td>{item.explanation}</td>
                        <td>{item.time}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <label>Filter by Curriculum:</label>
            <select onChange={(e) => {
                handleFilter2(e.target.value)
            }}>
                <option value="">カリキュラム：全て</option>
                <option value="エディタ (IDE)">エディタ (IDE)</option>
                <option value="OSコマンド（とシェル）">OSコマンド（とシェル）</option>
                <option value="Git">Git</option>
                <option value="GitHub">GitHub</option>
                <option value="HTML & CSS">HTML & CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="React x Typescript">React x Typescript</option>
                <option value="SQL">SQL</option>
                <option value="Docker">Docker</option>
                <option value="Go">Go</option>
                <option value="HTTP Server (Go)"> HTTP Server (Go)</option>
                <option value="RDBMS(MySQL)へ接続(Go)">RDBMS(MySQL)へ接続(Go)</option>
                <option value="Unit Test(Go)">Unit Test(Go)</option>
                <option value="フロントエンドとバックエンドの接続">フロントエンドとバックエンドの接続</option>
                <option value=" CI (Continuous Integration)"> CI (Continuous Integration)</option>
                <option value="CD (Continuous Delivery / Deployment)">CD (Continuous Delivery / Deployment)</option>
                <option value="認証">認証</option>
            </select>
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
                {filteredItems2.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <button>{item.title}</button>
                        </td>
                        <td>{item.category}</td>
                        <td>{item.curriculum}</td>
                        <td>{item.explanation}</td>
                        <td>{item.time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
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
                {itemData.map((item: any, index: any) => (
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