import React from 'react';

const Input = ({
  inputName,
  type,
  onChange,
}) => {
  return <input onChange={onChange} type={type} />;
};

export default Input;
