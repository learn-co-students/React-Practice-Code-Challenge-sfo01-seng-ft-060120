import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  constructor() {
    super()
    
    this.state = {
      sushi: [],
      fourSushi: [],
      displayIndex: 0,
      money: 50,
      eatenSushi: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(json => {
      this.setState({
        sushi: json,
        fourSushi: json.slice(0,4)
      })
    })
  }

  getNextFourSushi = () => {
    let newDisplayIndex = 0
    this.state.displayIndex === this.state.sushi.length - 4 ? newDisplayIndex = 0 : newDisplayIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newDisplayIndex,
      fourSushi: this.state.sushi.slice(newDisplayIndex, newDisplayIndex + 4)
    })
  }

  sushiHasBeenEaten = (sushi) => {
    let updatedEatenSushi = []
    let updatedSushi = this.state.sushi.map (singleSushi => {
      if (sushi.id === singleSushi.id) {
        singleSushi.hasBeenEaten = true
        updatedEatenSushi.push(singleSushi)
        return singleSushi
      } else {
        return singleSushi
      }
    })
    let updatedFourSushi = this.state.fourSushi.map (singleSushi => {
      if (sushi.id === singleSushi.id) {
        singleSushi.hasBeenEaten = true
        return singleSushi
      } else {
        return singleSushi
      }
    })
    this.setState({
      sushi: updatedSushi,
      fourSushi: updatedFourSushi,
      money: this.state.money - sushi.price,
      eatenSushi: updatedEatenSushi
    })
  }

  addMoney = (event) => {
    event.preventDefault()
    this.setState({
      money: this.state.money + parseInt(event.target.amount.value)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} fourSushi={this.state.fourSushi} getNextFourSushi={this.getNextFourSushi} sushiHasBeenEaten={this.sushiHasBeenEaten} money={this.state.money} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;