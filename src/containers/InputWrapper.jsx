import React from 'react';
import { connect } from 'react-redux';
import updateInputsStore from 'redux/actions/updateInputsStore';

class InputWrapper extends React.Component {

  render() {
    const Component = this.props.component;
    //TODO: figure out how to pass only valid dom attributes through to input
    return(
      <Component
        // input={inputProps}
        onChange={e => this.props.updateInput(e.target.value, this.props.inputName)}
        value={this.props.value[this.props.inputName]}
      />
    );
    
  }

};
 
const mapStateToProps = state =>( {
  value: state.inputs
})

const mapDispatchToProps = dispatch => ({
    updateInput: (val, inputName) => dispatch(updateInputsStore(val, inputName))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper);
