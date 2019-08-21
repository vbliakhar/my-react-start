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
        if (props.name.length>5){
            inputClasses.push("nameLength")
        }
        const testik =["testik"]
            if (props.name.length>4){
                testik.push("testikOne")
            }
     return(
        <div className="Car">
            <h1 className={testik.join(" ")}>Car name: {props.name}</h1>
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