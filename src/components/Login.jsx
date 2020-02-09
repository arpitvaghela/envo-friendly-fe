import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/login.css'
class LoginPage extends Component {
constructor(props){
  super(props);
  this.state={
    id:''
  }
}
  render() {

    return (
      <>
        <div class="wrapper fadeInDown">
          
          <div id="formContent">
          <Link to='/'><FaTimes className="close-login"/></Link>
            <h2 class="active"> Sign In </h2>

            <div class="fadeIn first">
            </div>

            <form>
              <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={(e)=>{this.setState({id:e.target.value})}}/>
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"/>
                  <input type="submit" class="fadeIn fourth" value="Log In" onClick={()=>this.props.click(this.state.id)}/>
        </form>

    
      </div>
    </div>
      </>
            );
          }
        }
        
export default LoginPage;