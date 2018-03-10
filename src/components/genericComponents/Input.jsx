import React from 'react';

const Input = ({
  inputName,
  type,
  onChange,
  input
}) => {
  return <input {...input} onChange={onChange} type={type} />;
};

export default Input;
