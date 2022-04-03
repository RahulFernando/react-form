import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    error: nameError,
    isValid: nameIsValid,
    reset: nameResetHandler,
    changeInputHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  
  const {
    value: enteredEmail,
    error: emailError,
    isValid: emailIsValid,
    reset: emailResetHandler,
    changeInputHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
  } = useInput((value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));

  const nameInputClasses = nameError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (emailIsValid && nameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    emailResetHandler();
    nameResetHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <p className="error-text">Name is required</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Provide valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
