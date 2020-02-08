import React from 'react'
import {FaSearch} from 'react-icons/fa'
import '../styles/search.css'

class Searchbar extends React.Component {
    render() {
        return (
            <div className="search">
                <input type="text" className="input" placeholder="     Search..." />
                <button className="searchbutton"><FaSearch/></button>
            </div>
        )
    }
}

export default Searchbar;