import React from 'react';
import { connect } from 'react-redux';
import browserHistory from 'react-router';
import './Login.css';
import { login } from '../../ducks/userDuck';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: ''
    };
  }

  handleChange( field, event ) {
    this.setState( { [ field ]: event.target.value } );
  }

  login(event) {
    even.preventDefault();

    this.props.despatch( login( {
      username: this.state.username,
      email: this.state.email
    } ) );

    browserHistory.push( '/shop' );
  }

  render() {
    return(
      <div>
        <form className="login-form">
          <input
            onChange={ this.handleChange.bind( this, 'username' ) }
            placeholder="Username"
            type="text"
            value={ this.state.username }
          />
        <input
          onChange={ this.handleChange.bind( this, 'email' ) }
          placeholder="Email"
          type="text"
          value={ this.state.email }
        />
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default connect( state => ( {
  user: state.user
} ))(Login);
