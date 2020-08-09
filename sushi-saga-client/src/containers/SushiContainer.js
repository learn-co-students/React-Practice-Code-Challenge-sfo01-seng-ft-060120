import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
class SushiContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      currentIndex: 0
    }
  }

  addFour = () => {
    let newIndex = this.state.currentIndex + 4
    this.setState({
      currentIndex: newIndex
    })
  }

  generate = () => {
    return this.props.sushis.map((sushi, index) => {
      if(index >= this.state.currentIndex && index < this.state.currentIndex + 4){
        return <Sushi key={index} sushi={sushi} eat={this.props.eat} />
      }
    })
  }
  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.generate()}          
          <MoreButton addFour={this.addFour}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer