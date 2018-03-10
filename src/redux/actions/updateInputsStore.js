import { UPDATE_INPUTS } from './actions.types';

const updateInputsStore = (value, inputName) => ({
  type: UPDATE_INPUTS,
  value,
  inputName
});

export default updateInputsStore;
