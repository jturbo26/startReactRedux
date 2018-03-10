import React from 'react';
import { connect } from 'react-redux';
import InputWrapper from 'containers/InputWrapper';
import Input from 'components/genericComponents/Input';

const Login = () => {
  return (
    <div>
      <h1>This is the login page of our App</h1>
      <InputWrapper
        component={Input}
        type='text'
        inputName='username'
      />
      <InputWrapper
        component={Input}
        type='radiotype'
        inputName='radio1'
        name='radio'
      />
      <InputWrapper
        component={Input}
        type='radio'
        inputName='radio2'
        name='radio'
      />
      

    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(Login);
