import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './lambda-logo.png';
import { Button } from 'reactstrap';

class Register extends React.Component {
    state = {
            name: '',
            password: '',
            email: ''
        }


    inputChangeHandler = (user, event) => {
        this.setState({[user]: {...this.state[user], [event.target.name]: event.target.value}})
      }

      newUser = () => {
        const user = this.state.user;
        axios.post('https://dakine-lambdanotes-api.herokuapp.com/register', user)
        .then(response => {
          // console.log(response);
          const token = response.data;
          localStorage.setItem('jwt', token);
        })

        .catch(err => {
          console.log(err)
        })

      }

    render() {
    return (
        <div className="register-containerx">
            <div className="register-buttonm">
            <div>
            <Link to='/'><Button>Back</Button></Link>
            </div>
             <div className="register-button">
                <p className="register-login-context">Already have an acct?</p>
             </div>
             <div>
                <Link to="/login"><p className="register-login-button" >Log In</p></Link>
            </div>
            </div>
      <div className="register-container">
         <img className="register-logo-img" src={logo} />
            <h3 className="register-header">Sign Up Today!</h3>
            </div>
            <form className="register-container">
                <div className="register-form">
                  <input className="register-form-namebox1"
                    type='text'
                    name='name'
                    placeholder='Enter a new name'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>
                  <input className="register-form-namebox1"
                    type='password'
                    name='password'
                    placeholder='Create a password'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>
                    <input className="register-form-namebox1"
                    type='text'
                    name='email'
                    placeholder='Add Your Email'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>

                    <Link to="/login"><Button className="register-button1" onClick={this.newUser}>Sign Up</Button></Link>
                </div>

            </form>
        </div>
    )}
}

export default Register;
