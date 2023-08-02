import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <ul>
            <h3>CryptoTracker</h3>
              <li>Home</li>
              <li>About</li>
              <li>Cryptocurrencies</li>
              <li>Contact</li>
              <li>Bitcoin</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar