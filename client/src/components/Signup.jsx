import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>Create A New User</h1>
                 <form>
                    <div>
                    <input name="firstName" type="text" placeholder="First Name" required/>
                    </div>
                    <div>
                    <input name="lastName" type="text" placeholder="Last Name" required/>
                    </div>
                    <div>
                    <input name="username" type="text" placeholder="Choose A Username" required/>
                    </div>
                    <div>
                    <input name="email" type="text" placeholder="Email Address" required/>
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default Signup