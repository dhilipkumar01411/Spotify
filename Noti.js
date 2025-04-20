import React, { useState } from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Noti(){
    const notify = () => toast("Wow so easy!");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
      <div>
        <form onSubmit={notify}>
        <label>username : </label>
        <input type='text'
        value={username}
      />
      <label>password : </label>
        <input type='password'
        value={password}
      />
        </form>
        <button onClick={notify}>submit</button>
        <ToastContainer />
      </div>
    );
  }
  export default Noti;