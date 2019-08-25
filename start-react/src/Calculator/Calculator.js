import React, {Component} from 'react'
import "./Calculator.css"

class Calculator extends Component {
        state={
            number:[1,2,3,4,5,6,7,8,9,0]
        }
        test=(index)=>{
            const figur=index;
            console.log(figur);
        }
        render(){
            return(
                <div className="Calculator">
                    <h2>Calculator</h2>
                <input type="text" value = "xxx"/>
                    <div className="numberButton">
                    {
                        this.state.number.map((item, index)=>(
                        <button 
                           key={index}
                           onClick={()=>this.test(item)}
                        >
                           {item}
                        </button>))
                    }  
                    </div>
                </div>
                
            )
            }
}
export default Calculator