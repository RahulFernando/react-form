import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const changeInputHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }

    setEnteredNameValid(true);
    console.log(nameRef.current.value);
  }

  const nameInputIsValid = !enteredNameValid && enteredNameTouched
  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} onChange={changeInputHandler} />
        {nameInputIsValid && <p className='error-text'>Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
