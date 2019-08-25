import React, {Component} from 'react'
import Car from './Car/Car'
import Counter from "./Counter/Counter"
import Calculator from "./Calculator/Calculator"
// import './App.scss'


class App extends Component {
  state = {
      cars:[
          {name:"Ford",year:"2018"},
          {name:"Mazda",year:"2010"},
          {name:"Lada",year:"1990"},
          ],
      pageTitle: "Title",
      clickMenu:true,
  }
  clickDelite =(index)=>{
    console.log("Delite", index)
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({
      cars
    })

 
  }
  changeTitle = (a) =>{
    console.log(a)
  this.setState ({
    clickMenu:!this.state.clickMenu
  })
  }
  changeCar =(name, index)=>{
    const oldMas = this.state.cars
    oldMas.name=name
    console.log(name);
    const newMas=[...this.state.cars]
    newMas[index]=oldMas
    this.setState({
      cars:newMas
    })


  }
  // handleInput =(event)=>{
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  render() {
    const divStyle = { 
      textAlign: "center"
    }
    return (
      <div style={divStyle}>
         
         <h1>{this.state.pageTitle}</h1>
         <Counter/>
         <Calculator/>
         <p> </p>
         {this.state.invisibleP?
         <p>Hello test characters</p>
         :null}
         
         <button onClick={()=>this.changeTitle("Title new")}>Button</button>
          
          {this.state.clickMenu?
              this.state.cars.map((car, index)=>{
              return(
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  changeCar={(event)=>this.changeCar(event.target.value, index)}
                  clickDelite={()=>this.clickDelite(index)}
                />
              )
            })
            :null
            }
            {/* <-ternarnui operator */}
      
      </div>
    );
  }
}

export default App