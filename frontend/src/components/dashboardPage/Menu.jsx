import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <ul>
            <h4>Menu</h4>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/positions">Positions</Link></li>
            <li><Link to="/funds">Funds</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
    </div>
  )
}

export default Menu