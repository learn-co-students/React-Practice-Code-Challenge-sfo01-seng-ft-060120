import React, { Fragment } from 'react'

const Sushi = (props) => {

console.log(props.sushi.id)
  const handleClick = () => {
    if (props.money > props.sushi.price) {
      props.sushiHasBeenEaten(props.sushi)
    } else {
      alert('Sorry, no more sushi for you!')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { props.sushi.hasBeenEaten === true ? null : <img src={props.sushi.img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi