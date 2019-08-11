import React from"react"
 const car=(props)=>{
     return(
        <div>
            <h1>Car name: {props.name}</h1>
            <p>Year: {props.year}</p>
            <button onClick={props.onClickTitle}>click</button>
        </div>
     )
 }
export default car