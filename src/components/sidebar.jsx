import React from 'react'
//import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/sidebar.css'

class Sidebar extends React.Component{
    
    render(){
        return(
            <div className="sidebar" >
            {
                this.props.menu.map((menu_item,index) => (
                        <a key={index} to={menu_item.linkpath} className="link-menu-items">{menu_item.name}</a> 
                ))
            }
        </div>)
    }
}

export default withRouter(Sidebar);