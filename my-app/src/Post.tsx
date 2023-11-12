import React from 'react';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Post(){

    const [title,setTitle] = useState("");
    const [explanation,setExplanation] = useState("");
    const [category,setCategory] = useState("1");
    const [curriculum,setCurriculum] = useState("1")




    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try{


            const response = await fetch(
                "http://localhost:8000",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        category,
                        curriculum,
                        explanation
                    }),
                }
            );
            if (response.status === 200) {
                console.log("POST succeeded")
                console.log(category,curriculum)
            } else {
                console.error("POST request failed")
            }

            setTitle("");
            setExplanation("");
            setCategory("1");
            setCurriculum("1");


        } catch (err) {
            console.error(err)
        }
    };


    return(
        <form
            style={{display: "flex", flexDirection: "column"}}
            onSubmit={handleSubmit}
            action="/localhost:8000"
            method="POST"
        >

            <div >
                <label>タイトル: <input
                    type={"text"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input></label>
            </div>

            <div>
                <FormControl >
                    <FormLabel >カテゴリ</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name = "category"
                        row>
                        <FormControlLabel value="1" control={<Radio />} label="ブログ" />
                        <FormControlLabel value="2" control={<Radio />} label="書籍" />
                        <FormControlLabel value="3" control={<Radio />} label="動画" />
                    </RadioGroup>
                </FormControl>
                <FormControl >
                    <FormLabel >カリキュラム</FormLabel>
                    <RadioGroup
                        name = "curriculum"
                        row
                        value={curriculum}
                        onChange={(e) => setCurriculum(e.target.value)}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="エディタ (IDE)" />
                        <FormControlLabel value="2" control={<Radio />} label="OSコマンド（とシェル）" />
                        <FormControlLabel value="3" control={<Radio />} label="Git" />
                        <FormControlLabel value="4" control={<Radio />} label="GitHub" />
                        <FormControlLabel value="5" control={<Radio />} label="HTML & CSS" />
                        <FormControlLabel value="6" control={<Radio />} label="JavaScript" />
                        <FormControlLabel value="7" control={<Radio />} label="React" />
                        <FormControlLabel value="8" control={<Radio />} label="React x Typescript" />
                        <FormControlLabel value="9" control={<Radio />} label="SQL" />
                        <FormControlLabel value="10" control={<Radio />} label="Docker" />
                        <FormControlLabel value="11" control={<Radio />} label="Go" />
                        <FormControlLabel value="12" control={<Radio />} label="HTTP Server (Go)" />
                        <FormControlLabel value="13" control={<Radio />} label="RDBMS(MySQL)へ接続(Go)" />
                        <FormControlLabel value="14" control={<Radio />} label="Unit Test(Go)" />
                        <FormControlLabel value="15" control={<Radio />} label="フロントエンドとバックエンドの接続" />
                        <FormControlLabel value="16" control={<Radio />} label="CI (Continuous Integration)" />
                        <FormControlLabel value="17" control={<Radio />} label="CD (Continuous Delivery / Deployment)" />
                        <FormControlLabel value="18" control={<Radio />} label="認証" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div >
                <label>詳細: <input
                    type="text"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                ></input></label>
            </div>

            <button type={"submit"}>追加する</button>
        </form>

    )
}
export default Post;