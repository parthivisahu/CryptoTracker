import React from 'react'
import "./body.css"
import CryptoList from '../CryptoItem/CryptoList'
const Body = () => {
  return (
    <div>
        <div className='body'>
            <CryptoList />
        </div>
    </div>
  )
}

export default Body