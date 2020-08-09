import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      plates: [],
      money: 100
    }
  }
  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(json => {
      this.setState({
        sushis: json
      })
    })
  }

  addPlates = (sushi) => {
    let newPlates = this.state.plates
    newPlates.push(sushi)
    this.setState({
      newPlates
    })
    
  }

  money = (sushi) => {
    let remainder = this.state.money - sushi.price
    if(this.state.money >= sushi.price){
      this.setState({
        money: remainder
      })
      return true
    }
    else{
      return false 
    }
      
  }

  eat = (e, id) => {
    let sushis = this.state.sushis.map(sushi => {
       if(sushi.id === id){
         if(this.money(sushi)){
           sushi.img_url = "eaten"
           this.addPlates(sushi)
         }
         
      }
      return sushi
    })
    this.setState({
      sushis
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eat={this.eat} />
        <Table money={this.state.money} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;