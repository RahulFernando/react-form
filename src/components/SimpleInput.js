import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const changeInputHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} onChange={changeInputHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
