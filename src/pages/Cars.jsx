import React from 'react'
import { Link } from 'react-router-dom'

const Cars = () => {
  return (
    <div>Cars
        <p>BMW</p>
        <Link to="/cars/bmw">
            <p>BMW</p>
        </Link>
    </div>
  )
}

export default Cars