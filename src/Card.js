import { Component } from "react";
import React,{useState} from "react";
import '../src/css/Card.css';

// class Card extends Component{
    function Card(){
    const [name,setName]=useState('Aayush Mandavya');
    const [job,setJob]=useState('Mentor/SSE');
    const progressvalue={
        width:'50%'
    };
      
    
        return(
            <>
            <div className="card">
           <div className="card__box">
            <div className="card__box__circle">
             <div className="card__box__letter">
                <span>{name.slice(0,1)}</span>
            </div>
            </div>
            <div className="card__box__text">
            <h3>{name}</h3>
            <h4> {job}</h4>
           
            
            </div>
            <div className="card__box__online">
            </div>
            <div className="progress_bar">
            <div className="progress_bar__value" style={progressvalue}>
            </div>
            </div>
            </div>
            </div>
            </>
        );
    
}

export default Card 