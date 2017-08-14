import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login  extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                 <form>
                    <div>
                    <input name="username" type="text" placeholder="username" required/>
                    </div>
                    <div>
                    <input name="password" type="text" placeholder="password" required/>
                    </div>
                    <input type='submit'/>
                </form>
                <div>Don't have an account? Sign up <Link to='/signup'>here</Link>!</div>
            </div>
        );
    }
}

export default Login