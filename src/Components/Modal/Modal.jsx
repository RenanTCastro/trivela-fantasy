import React, { useState } from "react";

import "./Modal.css";

export default function Modal(props){
    const max_teams = props.amount >= 8 ? true : false;

    const [code, setCode] = useState("")
    const [sent, setSent] = useState(false);

    const handleClick = () =>{
        let aux_code = "";
        for (let i = 0; i <= 16; i++) {
          const value = props.selectedResult[i]?.value;
          if (value === '-') {
            aux_code += Math.floor(Math.random() * 10);
          } else {
            aux_code += value;
          }
        }
        setCode(aux_code);
        setSent(true);
    }

    return(
        <div className="modal_background">
            {
            sent && 
                <div className="finalizar_modal_container">
                    <p>Seleção conluída, copie o código e envie para a validação</p>
                    <p className="codigo">{code}</p>
                    <button 
                        className="botao_Modal_Copiar" 
                        onClick={()=>  
                            navigator.clipboard.writeText(code)
                            .then(alert("Código copiado com sucesso!"))
                            }>COPIAR CÓDIGO</button>
                </div>
            }

            <div className={!max_teams ? "modal_container" : "modal_container_second"}>
                {!max_teams ?
                    <>
                        <p>Time selecionados {props.amount}/8</p>
                        <p>{props.score} pts</p>
                    </>
                    :
                        <button className="button_Modal" onClick={handleClick}>
                            <p className="send_Modal">Enviar</p>
                            <p className="send_Modal">{props.score} pts</p>
                        </button>
                    }
            </div>
        </div>
    );
}