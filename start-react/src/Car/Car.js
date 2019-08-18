import React from"react"
import "./Car.css"
 const car=(props)=>{
     const inputClasses = ["input"]
        if (props.name!==""){
            inputClasses.push("green")
        }
        else{
            inputClasses.push("red")
        }
     return(
        <div className="Car">
            <h1>Car name: {props.name}</h1>
            <p>Year: {props.year}</p>
            <input 
            type="text" 
            onChange={props.changeCar} 
            value={props.name}
            className={inputClasses.join(" ")}
            />
            <button onClick={props.clickDelite}>Delite</button>
            
        </div>
     )
 }
export default car