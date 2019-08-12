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
  changeTitle = (a) =>{
    console.log(a)
  // let pageTitle=pageTitle+a
  this.setState ({
    pageTitle:a
  })
  }
  handleInput =(event)=>{
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const divStyle = { 
      textAlign: "center"
    }
    console.log("render")
    return (
      <div style={divStyle}>
         <h1>{this.state.pageTitle}</h1>
         <input type="text" onChange={this.handleInput}/>
         <button onClick={()=>this.changeTitle("Title new")}>Button</button>
            {this.state.cars.map((car, index)=>{
              return(
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onClickTitle={()=>this.changeTitle(car.name)}
                />
              )
            })}

         {/* <Car
            name={this.state.cars[0].name} 
            year={this.state.cars[0].year}
            onClickTitle={()=>this.changeTitle(this.state.cars[0].name)}
         />
         <Car
            name={this.state.cars[1].name} 
            year={this.state.cars[1].year}
            onClickTitle={()=>this.changeTitle(this.state.cars[1].name)}
         /> */}
      
      </div>
    );
  }
}

export default App