import React from 'react';
import '../App.css'
import { TextField} from '@mui/material';



export default function login_page() {

  return (
    <>
    <div className="box">
        <div className="form">
            <h2>Sign In</h2>
            <h5>Authentication System</h5>
            <div className="inputBox">
              <TextField id="standard-basic" placeholder="Username*" autoComplete='current-username' variant="standard" />
            </div>
            <div className='inputBox'>
              <TextField id="standard-password-input" placeholder="Password*" type="password" autoComplete="current-password" variant="standard" />
            </div>
            <input type="submit" value="LogIn"/>
        </div>
    </div>
    </>
  )
}
