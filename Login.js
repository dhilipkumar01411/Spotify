import React from 'react'
import icon from './Img/icons8-spotify.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Newindex.scss'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Home from './Home'
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
function Login() {
  const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

  const [input1, setInput1] = useState('');
  


  const handleSubmit = (e) => {


      
      e.preventDefault();
      
      if (input1 && password.length >=8) {
          toast('You can go in');
    setTimeout(() => {
      window.location.href = '/Home';
    }, 1000);
      } else {
          toast.error('check again')
          
      }
  };
  return (
    <div className='main'>
     <div className='mainbox'> 
         <div className='main0'>
        <img src={icon}/>
        <h1>Log in to Spotify</h1>
        </div>

        <div className='main01'>
        <Link to={'/signup'}>
        <button><FaPhone style={{ paddingRight :'9%', width : '1.5rem' , height : '1.5rem'}} />continue with phone number</button>
        </Link>

        <Link to={'/signup'}>
        <button ><FcGoogle style={{ paddingRight :'22%', width : '1.5rem' , height : '1.5rem'}}/> continue with google</button>
        </Link>

        <Link to={'/signup'}>
        <button><FaFacebookSquare style={{ paddingRight :'22%', width : '1.5rem' , height : '1.5rem'}} />continue with facebook</button>
        </Link>

        
        </div>
        <hr></hr>

        <div className='main02'>
            <form onSubmit={handleSubmit}>
                <label>email or username</label>
                <input type='text'
                placeholder='enter ur username or email' style={{color: "white"}}
                value={input1}
                onChange={(e) => setInput1(e.target.value)}/>

                <label>password</label>
                <input type='password'
                placeholder='enter ur password' style={{color: "white"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                
                <button type='submit'>login</button>
                
                <br></br>
                <Link to={'/signup'} style={{  color:'white'}}>
                Forgot password
                </Link>
                <br></br>
                <Link to={'/signup'} style={{  color:'white'}}>
                dont have an account?   signin for spotify
                </Link>
            </form>
            
            <ToastContainer />
            
        </div>
        </div>
    </div>
  )
}

export default Login