import { useState } from 'react';

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !enteredValue && enteredValueTouched;

  const changeInputHandler = (e) => {
   setEnteredValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
      setEnteredValue('');
      setEnteredValueTouched(false);
  }

  return {
      value: enteredValue,
      error: hasError,
      isValid: valueIsValid,
      reset,
      changeInputHandler,
      onBlurHandler,
  }
};

export default useInput;
