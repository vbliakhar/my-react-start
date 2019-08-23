import React from"react"
// import "./Car.css"
import stiles from "./Car.module.css"
 const car=(props)=>{
     const inputClasses = [stiles.input]
        if (props.name!==""){
            inputClasses.push(stiles.green)
        }
        else{
            inputClasses.push(stiles.red)
        }
        if (props.name.length>5){
            inputClasses.push(stiles.nameLength)
        }
        const testik =[stiles.testik]
            if (props.name.length>4){
                testik.push(stiles.testikOne)
            }
        
     return(
        <div className={stiles.Car}>
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