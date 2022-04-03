import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameValid && enteredNameTouched;
  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';
  let formIsValid = false;

  if (enteredNameValid) {
    formIsValid = true;
  }

  const changeInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const onBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={changeInputHandler}
          onBlur={onBlurHandler}
        />
        {nameInputIsValid && <p className="error-text">Name is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
