import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// export default class Home extends Component {
//     render() {
//         return (<div className="form-wrapper">
//           <Form >
//             <Form.Group controlId="Name">
//               <Form.Label>Book</Form.Label>
//               <Form.Control type="text"  />
//             </Form.Group>
    
                
//             <Button variant="primary" size="lg" block="block" type="submit">
//             Login
//             </Button>
//           </Form>
//         </div>);
//       }
// }

export default class Login extends Component {
    render() {
        return (
            <form className="authentication">

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}