import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Login  extends Component {

    


    render() {
        // if(this.props.loggedIn === true){
        //     return <Redirect to={`/user/${this.props.userId}/shows`} />
        // }
        const users = this.props.users;
       
        

        
        return (
            <div>
                <h1>Login</h1>
                {/* <h1>Login</h1>
                 <form onSubmit={this.props.login}>
                    <div>
                    <input name="userName" type="text" placeholder="username" required/>
                    </div>
                    <div>
                    <input name="password" type="text" placeholder="password" required/>
                    </div>
                    <input type='submit'/>
                </form> */}
                {users.map((user, i)=>{
                    return(
                        <div key={i}>
                             <Link to={`/user/${user._id}/shows`} onClick={this.props.changeLogIn}><h3>{user.userName}</h3></Link> 
                        </div>
                    )
                })}
                <div>Don't have an account? Sign up <Link to='/signup'>here</Link>!</div>
            </div>
        );
    }
}

export default Login