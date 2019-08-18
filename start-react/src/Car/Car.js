import React from"react"
 const car=(props)=>{
     return(
        <div>
            <h1>Car name: {props.name}</h1>
            <p>Year: {props.year}</p>
            <input type="text" onChange={props.changeCar}/>
            <button onClick={props.clickDelite}>Delite</button>
            
        </div>
     )
 }
export default car