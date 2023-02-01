import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ item }) => {
    return (
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/cars">cars</Link></li>
        </ul>
    )
}

export default Nav