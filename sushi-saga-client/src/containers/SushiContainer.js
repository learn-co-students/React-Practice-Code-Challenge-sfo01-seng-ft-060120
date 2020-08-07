import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const displaySushi = () => {
    return props.displayedSushi.map( sushi => {
      return <Sushi sushi={sushi} key={sushi.id} moneyCounter={props.moneyCounter}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          displaySushi()
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer