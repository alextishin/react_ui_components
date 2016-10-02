import React from 'react'
import {connect} from 'react-redux'
import Icon from '../FormComponents/Icon'
import Input from '../FormComponents/Input'
import _ from 'underscore'
import {signUpUser, signUpUserSuccess, signUpUserFailure, resetUser } from '../../actions/users'
import { validateUserFields, validateUserFieldsSuccess, validateUserFieldsFailure, resetValidateUserFields } from '../../actions/validateUserFields';




const validateAndSignUpUser = (values, dispatch) => {
  console.log('validateAndSignUpUser', values);
  return new Promise((resolve, reject) => {

    dispatch(signUpUser(values))
      .then((response) => {
        let data = response.payload.data;

        if(response.payload.status != 200) {

          dispatch(signUpUserFailure(response.payload));
          reject(data);
        } else {

          dispatch(signUpUserSuccess(response.payload));
          resolve();
        }
      });
  });
};


var SignUpForm = React.createClass({
  getInitialState: function () {
    return {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      statesValue: null,
      forbiddenWords: ["password", "user", "username"]
    }
  },

  handlePasswordInput: function (event) {
    if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
  },

  handleConfirmPasswordInput: function (event) {
    this.setState({
      confirmPassword: event.target.value
    });
  },

  saveAndContinue: function (e) {
    e.preventDefault();


    var canProceed = this.validateEmail(this.state.email)
     // && !_.isEmpty(this.state.statesValue)
      && this.refs.password.isValid()
      && this.refs.passwordConfirm.isValid();

    if(canProceed) {
      var data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };

      this.props.signUpUser(data);
    } else {
      this.refs.email.isValid();
      //this.refs.state.isValid();
      this.refs.username.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
  },

  isConfirmedPassword: function (event) {
    return (event == this.state.password)
  },

  handleUsernameInput: function(event) {
    this.setState({
      username: event.target.value
    })
  },

  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  validateEmail: function (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function (value) {
    return !_.isEmpty(value);
  },

  updateStatesValue: function (value) {
    this.setState({
      statesValue: value
    })
  },

  render: function() {


    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>Example of form validation built with React.</p>
          <form onSubmit={this.saveAndContinue}>
            <Input
              text="Username"
              ref="username"
              validate={this.isEmpty}
              value={this.state.username}
              onChange={this.handleUsernameInput}
              emptyMessage="Company name can't be empty"
            />
            <Input
              text="Email Address"
              ref="email"
              type="text"
              defaultValue={this.state.email}
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput}
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />
            <Input
              text="Password"
              type="password"
              ref="password"
              validator="true"
              minCharacters="8"
              requireCapitals="1"
              requireNumbers="1"
              forbiddenWords={this.state.forbiddenWords}
              value={this.state.passsword}
              emptyMessage="Password is invalid"
              onChange={this.handlePasswordInput}
            />

            <Input
              text="Confirm password"
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput}
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
            />
            <button
              type="submit"
              className="button button_wide">
              SIGN UP
            </button>
          </form>

           <a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="github_link" title="View Source Code">
              <Icon type="guthub" />
          </a>
        </div>

      </div>
    );
  }

});



const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: validateAndSignUpUser,
    resetMe: () =>{
      dispatch(resetValidateUserFields());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    validateFields: state.validateFields
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
