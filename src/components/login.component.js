import React, { useState } from "react";
import fire from '../fire.js';

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



const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }
    return (
        <form className="authentication" onSubmit={handleSubmit}>

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" 
                onChange={({ target }) => setEmail(target.value)} 
                className="form-control" 
                placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                onChange={({ target}) => setPassword(target.value)}
                className="form-control" 
                placeholder="Enter password" />
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
    
};

export default Login