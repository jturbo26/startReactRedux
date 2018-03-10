import { UPDATE_INPUTS } from 'redux/actions/actions.types';

const inputs = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INPUTS:
      return {...state, [action.inputName]: action.value}
    default: {
      return state;
    }
  }
};

export default inputs;
