import React, { Component } from 'react';
import axios from 'axios'

export default class EditUserForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <form >
                    <div>
                    <input name="userName" type="text" placeholder={this.props.username} required/>
                    </div>
                    <div>
                    <input name="firstName" type="text" placeholder={this.props.firstName} required/>
                    </div>
                    <div>       
                    <input name="lastName" type="text" placeholder={this.props.lastName} required/>
                    </div>
                    <div>
                    <input name="email" type="text" placeholder={this.props.email} required/>
                    </div>
                    <input type='submit'/>
                </form>
                </form>
            </div>
        );
    }
}