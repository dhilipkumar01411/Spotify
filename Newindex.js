import React from 'react'
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import './Notification'
import { NotificationContainer } from 'react-notifications';
function Newindex() {
        const [password, setPassword] = useState('');
        const [username, setUsername] = useState('');
        const [error,    setError]    = useState('');
        

const handleSubmit =(e) => {
  e.preventDefault();
        
        if (username && password.length >=8) {
          
        } else {
            setError()
        }

      };
  return (
    <div>
      <h1>login page</h1>
     <form onSubmit={handleSubmit}>
      <label>username :</label>
      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <label>password</label>
      <input type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
     </form>

     {error && <p >{error}</p>}
     {/* <Notification/> */}
     <NotificationContainer/>
    </div>
  )
}

export default Newindex