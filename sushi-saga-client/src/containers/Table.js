import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
      <div>
        <h4> Sushi Wallet! </h4>
        <form onSubmit={(event) => props.addMoney(event)}>
          <input name="amount" type="text" placeholder="Enter Amount"/><br></br>
          <input type="submit"/>
        </form>
      </div>
    </Fragment>
  )
}

export default Table