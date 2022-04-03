import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const enteredEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);
  const nameInputIsValid = !enteredNameValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailValid && enteredEmailTouched;
  
  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';
  
  const emailInputClasses = emailInputIsValid
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const changeInputHandler = (e) => {
    const { id, value } = e.target;

    if (id === 'name') {
      setEnteredName(value);
    }
    if (id === 'email') {
      setEnteredEmail(value)
    }
  };

  const onBlurHandler = (e) => {
    if (e.target.id === 'name') {
      setEnteredNameTouched(true);    
    }

    if (e.target.id === 'email') {
      setEnteredEmailTouched(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={changeInputHandler}
          onBlur={onBlurHandler}
        />
        {emailInputIsValid && <p className="error-text">Provide valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
