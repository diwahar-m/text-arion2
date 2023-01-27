import {useState} from "react";
import "./style.css"; 

const Card=()=>{
    
   
    

    const[score,changeScore]=useState(0); 

    const decreaseCounter=()=>{
        changeScore(prevScore => prevScore-3)
    }
    const increaseCounter=()=>{
        changeScore(prevScore => prevScore+3)
    }

    return(
        <div className="cardHome">
            
            <div className="cardContainer">
                <h1>Counter</h1> 
                <div className="card">
                    <button type='button' onClick={decreaseCounter}>-</button>
                    <p>{score}</p>

                    <button type='button'  onClick={increaseCounter}>+</button>
                </div>
            </div>
        </div>

    )
}

export default Card;