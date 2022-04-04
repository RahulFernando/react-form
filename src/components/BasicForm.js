import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: fname,
    error: fnameError,
    isValid: fnameIsValid,
    changeInputHandler: fnameChangeHandler,
    onBlurHandler: fnameBlurHandler,
    reset: fnameResetHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lname,
    error: lnameError,
    isValid: lnameIsValid,
    changeInputHandler: lnameChangeHandler,
    onBlurHandler: lnameBlurHandler,
    reset: lnameResetHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    error: emailError,
    isValid: emailIsValid,
    changeInputHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  const fnameInputClasses = fnameError
    ? 'form-control invalid'
    : 'form-control';

  const lnameInputClasses = lnameError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (emailIsValid && fnameIsValid && lnameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    emailResetHandler();
    fnameResetHandler();
    lnameResetHandler();
  };

  console.log(emailError);

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
          {fnameError && <p className="error-text">First Name is required</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameError && <p className="error-text">Last Name is required</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
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

export default BasicForm;
