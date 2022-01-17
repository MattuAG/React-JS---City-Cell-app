import React from 'react'
import { Items } from './Items/ItemListContainer'
import NavBar from './NavBar/NavBar'

const ComponentContainer = () => {
    return (
        <div>
            <NavBar>
                <Items />
            </NavBar>
               
        </div>
    )
}

export default ComponentContainer
