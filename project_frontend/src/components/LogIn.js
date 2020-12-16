import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'

export default class LogIn extends Component {
constructor() {
  super();
  this.state = {
    email: "",
    password: ""
  }

}





  render() {
    return (
      <div style={{margin: "auto",width: "20%"}}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email"/>            
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>            
          </Form.Group>
          <Form.Group>
            <Button varient="primary" type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
