import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushi.map(sushi => {
          return <Sushi sushi={sushi} sushiHasBeenEaten={props.sushiHasBeenEaten} money={props.money}/>
          })
        }
        <MoreButton getNextFourSushi={props.getNextFourSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer