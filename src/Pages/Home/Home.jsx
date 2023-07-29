import React, { useEffect, useState } from "react";

import "./Home.css";

import Header from "../../Components/Header/Header";
import Match from "../../Components/Match/Match";
import Modal from "../../Components/Modal/Modal";

import { data } from "../../Data/rodada_1";

export default function Home(){
    const [score, setScore] = useState(0);
    const [amount, setAmount] = useState(0);
    const [selectedResult, setSelectedResult] = useState(
        {
            "0": {
                "value": "-",
                "odd": "0"
            },
            "1": {
                "value": "-",
                "odd": "0"
            },
            "2": {
                "value": "-",
                "odd": "0"
            },
            "3": {
                "value": "-",
                "odd": "0"
            },
            "4": {
                "value": "-",
                "odd": "0"
            },
            "5": {
                "value": "-",
                "odd": "0"
            },
            "6": {
                "value": "-",
                "odd": "0"
            },
            "7": {
                "value": "-",
                "odd": "0"
            },
            "8": {
                "value": "-",
                "odd": "0"
            },
            "9": {
                "value": "-",
                "odd": "0"
            },
            "10": {
                "value": "-",
                "odd": "0"
            },
            "11": {
                "value": "-",
                "odd": "0"
            },
            "12": {
                "value": "-",
                "odd": "0"
            },
            "13": {
                "value": "-",
                "odd": "0"
            },
            "14": {
                "value": "-",
                "odd": "0"
            },
            "15": {
                "value": "-",
                "odd": "0"
            },
            "16": {
                "value": "-",
                "odd": "0"
            },
        }
    );

    const handleClick = (index, value, odd, new_team) => {
        if(value === "-"){
            const updatedSelectedResult = {
                ...selectedResult,
                [index]: {
                  value: "-",
                  odd: "0",
                },
              };
            setSelectedResult(updatedSelectedResult);
        }else{
            const info = {
                "value": value,
                "odd": odd
            }
            const aux = {[index]: info};
            setSelectedResult({...selectedResult, ...aux})
        }
    }

    useEffect(() => {
        const data = selectedResult || [];
        const score = Object.values(data).reduce((acc, obj) => {
            const oddValue = parseInt(obj.odd);
            return acc + (isNaN(oddValue) ? 0 : oddValue);
        }, 0);
        setScore(score);
    },[selectedResult])

    return(
        <div className="div_Home" id="capture-element">
            <Header/>
            <p className="text_Home">Selecione o resultado de 8 jogos e envie para validação</p>
            {
                data.map((item, index) => {
                    return(
                        <Match 
                            data_partida={item.data_partida} 
                            campeonato={item.campeonato} 
                            time_A={item.time_A}
                            img_time_A={item.img_time_A}
                            odd_time_A={item.odd_time_A}
                            time_B={item.time_B}
                            img_time_B={item.img_time_B}
                            odd_time_B={item.odd_time_B}
                            odd_empate={item.odd_empate}
                            index={index}
                            handleClick={handleClick}
                            setAmount={setAmount}
                            amount={amount}
                            key={index}
                            />
                    );
                }
                )
            }    
            <div className="bottom_home"/>
            <Modal amount={amount} score={score} selectedResult={selectedResult}/>
        </div>
    );
}