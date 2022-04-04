import { useReducer } from 'react';

const init = {
  value: '',
  touched: false,
}

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.value,
      };
    
    case 'BLUR':
      return {
        ...state,
        touched: action.touched,
      };
    
    case 'RESET':
      return {
        value: init.value,
        touched: init.touched,
      };
      
    default:
      return state;
  }
}

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputReducer, init);

  const valueIsValid = validate(inputState.value);
  const hasError = !valueIsValid && inputState.touched;

  const changeInputHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const onBlurHandler = (e) => {
    dispatch({ type: 'BLUR', touched: true });
  };

  const reset = () => {
      dispatch({ type: 'RESET' });
  }

  return {
      value: inputState.value,
      error: hasError,
      isValid: valueIsValid,
      reset,
      changeInputHandler,
      onBlurHandler,
  }
};

export default useInput;
