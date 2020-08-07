import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    displayedSushi: [],
    sushiIndex: 4,
    moneyCount: 100,
    sushiEaten: []
  }
  
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({
      displayedSushi: json.slice(0,4),
      sushi: json
    }))
  }

  moreSushi = () => {
    let displayedSushi = []
    let sushi = [...this.state.sushi]
    displayedSushi = sushi.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    let sushiIndex = this.state.sushiIndex + 4
    this.setState({
      displayedSushi,
      sushiIndex
    })
  }

  moneyCounter = (price, id) => {
    let moneyCount = this.state.moneyCount - price
    if (moneyCount >= 0) {
      let sushiEaten = [...this.state.sushiEaten]
      let displayedSushi = this.state.displayedSushi.map(sushi => {
        if (sushi.id === id && this.state.moneyCount >= price) {
          sushiEaten.push(sushi.img_url)
          sushi.img_url = null
        }
        return sushi
      })
  
    
    // this.state.moneyCount >= price ? this.setState({ moneyCount }) : "You can't afford this!"
    //if money count is greater than or equal to price, then subtract sushi price from money count
    //if false, don't do anything(alert, not enough money)
    this.setState({
      displayedSushi, sushiEaten, moneyCount
    })
  }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi} displayedSushi={this.state.displayedSushi} moneyCounter={this.moneyCounter}/>
        <Table moneyCount={this.state.moneyCount} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;