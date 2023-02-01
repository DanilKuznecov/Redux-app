import React from 'react'
import Nav from './Nav'

const Header = ({ item }) => {
    return (
        <div>
            <Nav item={item} />
        </div>
    )
}

export default Header