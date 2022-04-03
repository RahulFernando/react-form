import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(true);

  const changeInputHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }

    setEnteredNameValid(true);
    console.log(nameRef.current.value);
  }

  const nameInputClasses = enteredNameValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} onChange={changeInputHandler} />
        {!enteredNameValid && <p className='error-text'>Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
