import React from 'react'
import './square.css'

function Square({value,onsquareclick}) {
  return (
    <button className='each-square' onClick={onsquareclick}>{value}</button>
  )
}

export default Square