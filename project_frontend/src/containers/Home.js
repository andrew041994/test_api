import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default class Home extends Component {
  render() {
    return (
      <div style={{margin: "auto",width: "20%"}}> <br/><br/>
      <header>Realtor Pro Revamped</header><br/><br/>
        <Link to="/login">
        <Button  variant="primary" size="lg" block>Log In</Button>
        </Link>
        <br/><br/>
        <Link>
        <Button variant="primary" size="lg" block>Sign-Up</Button>
        </Link>
        <br/><br/>
        <Link>
        <Button variant="primary" size="lg" block>Log In With Google</Button>
        </Link>
        
          {/* <button href="/login">Log In</button> <br/><br/>
          <button>Sign Up</button><br/><br/>
          <button>Sign up With Google</button><br/><br/> */}
          
     </div>
    );
  }
}
