import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            registerView: true
        }
    }

    handleLogin = () => {
        const {email, password} = this.state;
        axios.post('/api/login', {email, password})
        .then(res => {
            //need to set redux to user session
            this.props.history.push('/dash')
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }
    
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        const {email, password} = this.state;
        axios.post('/api/register', {email, password})
        .then(res => {
            //Place this user info somewhere state or redux
            //react-router-dom moves the user to the dash
            this.props.history.push('/dash');
        })
        .catch(err => console.log(err))
    }

    

    render(){
        return (
            <div>
                <input 
                    value={this.state.email} 
                    name='email' 
                    onChange={e => this.handleInput(e)}/>
                <input 
                    value={this.state.password} 
                    name='password' 
                    onChange={e => this.handleInput(e)}
                    type='password'/>
                {
                (this.state.registerView) ?
                (
                    <>
                        <button onClick={this.handleRegister}>Register</button>
                        <p>Already have an account? <span onClick={this.handleToggle}>Login Here</span></p>
                    </>
                )
                :
                (
                    <>
                        <button onClick={this.handleLogin}>Login</button>
                        <p>Don't have an account? <span onClick={this.handleToggle}>Register here</span></p>
                    </>    
                    )
                }
            </div>
        )
    }
}

export default Auth;