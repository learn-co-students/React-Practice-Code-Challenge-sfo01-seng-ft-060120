import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {id, name, img_url, price} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.eat(e, id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          img_url === 'eaten' ?
          null  
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi