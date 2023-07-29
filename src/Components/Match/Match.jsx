import React, { useState } from "react";

import "./Match.css";

export default function Match(props){
    const [selectedResult, setSelectedResult] = useState([]);

    const handleClickResult = (e) => {
        if(selectedResult[0] === e.target.value){
            setSelectedResult([]);
            props.handleClick(props.index,"-",e.target.getAttribute("odd"));
            props.setAmount(props.amount - 1);
        }else if(selectedResult.length > 0){
            setSelectedResult([e.target.value]);
            props.handleClick(props.index,e.target.value,e.target.getAttribute("odd"));
        }else if(props.amount < 5){
            setSelectedResult([e.target.value]);
            props.handleClick(props.index,e.target.value,e.target.getAttribute("odd"), true);
            props.setAmount(props.amount + 1)
        }else{
            alert("Você já selecionou 2 resultados");
        }
    }

    return(
        <div className="div_Match">
            <div className="div_date_Match">
                <p>{props.data_partida}</p>
                <p>{props.campeonato}</p>
            </div>
            <div className="div_info_Match">
                <img className="img_Match" src={props.img_time_A} alt="Logo"/>
                <p className="text_draw_match">x</p>
                <img className="img_Match" src={props.img_time_B} alt="Logo"/>
            </div>
            <div className="div_info_Match">
                <p className="text_name_Match">{props.time_A}</p>
                <p className="text_name_Match">Empate</p>
                <p className="text_name_Match">{props.time_B}</p>
            </div>
            <div className="div_info_Match">
                <button onClick={handleClickResult} odd={props.odd_time_A} value="A" className={ selectedResult[0] === "A" ? "button_selected_Match" : "button_Match"}>{props.odd_time_A}</button>
                <button onClick={handleClickResult} odd={props.odd_empate} value="B" className={ selectedResult[0] === "B" ? "button_selected_Match" : "button_Match"}>{props.odd_empate}</button>
                <button onClick={handleClickResult} odd={props.odd_time_B} value="C" className={ selectedResult[0] === "C" ? "button_selected_Match" : "button_Match"}>{props.odd_time_B}</button>
            </div>
        </div>
    );
}