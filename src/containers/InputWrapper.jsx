import React from 'react';
import { connect } from 'react-redux';

const InputWrapper = ({
  component,
  ...props
}) => {
  return (
    React.createElement(component, props)
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper);
