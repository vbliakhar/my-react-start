import React, {Component} from 'react'
import Car from './Car/Car'
// import './App.scss'


class App extends Component {
  state = {
      cars:[
          {name:"Ford",year:"2018"},
          {name:"Mazda",year:"2010"},
          {name:"Lada",year:"1990"},
          ],
      pageTitle: "Title"
  }
  changeTitle = () =>{
    console.log("Title")
    let oldTitle = this.state.pageTitle
    let newTitle=oldTitle+" hi"
  this.setState ({
    pageTitle:newTitle
  })
  }
  render() {
    const divStyle = { 
      textAlign: "center"
    }
    console.log("one")
    return (
      <div style={divStyle}>
         <h1>{this.state.pageTitle}</h1>
         <button onClick={this.changeTitle}>Button</button>
         <Car
            name={this.state.cars[0].name} 
            year={this.state.cars[0].year}
            onClickTitle={this.changeTitle}
         />
      
      </div>
    );
  }
}

export default App