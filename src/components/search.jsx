import React from 'react'
import {FaSearch} from 'react-icons/fa'
import '../styles/search.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Searchbar extends React.Component {
    render() {
        return (
            <div className="search">
                <input type="text" className="input" placeholder="     Search..." onChange={(e)=>{this.props.search_f({query:e.target.value})}}/>
                <button className="searchbutton"><Link to='/search' ><FaSearch/></Link> </button>
            </div>
        )
    }
}

export default Searchbar;