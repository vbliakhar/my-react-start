import React, {Component} from "react"
import "./Counter.css"
class Counter extends Component {
    state = {
        variable: 0
    }
     branch =() =>{
        this.setState ({
            variable:this.state.variable+1
        })
    }

    render (){
        return(
            <div>
                <h2>Counter {this.state.variable}</h2>
                <button onClick={()=>this.branch()}>+</button>
                <button onClick={()=>this.setState({variable:this.state.variable-1})}>-</button>
            </div>
        )
    }
}
export default Counter