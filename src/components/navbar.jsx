import React from 'react'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/nav-bar.css'

import Searchbar from './search'

class Navbar extends React.Component{
    
    render(){
        return(
            <nav className="navbar" >
                <div className="nav-container">
                <Link  to='/' className="App-logo">Envofriendly</Link>
                <Searchbar search_f = {this.props.search_f}/>
                </div>
                <Link  to='/login' ><FaUser className="user-icon"/></Link>
        </nav>)
    }
}


export default withRouter(Navbar);
