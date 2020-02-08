import React from 'react'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/nav-bar.css'

class Navbar extends React.Component{
    
    render(){
        return(
            <nav className="navbar" >
                <a  to='/' className="App-logo">Envofriendly</a>
                <a  to='/shopping-cart' className="shopping-cart-icon"><FaUser className="user-icon"/></a>
        </nav>)
    }
}

export default withRouter(Navbar);
