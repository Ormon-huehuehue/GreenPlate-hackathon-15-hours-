import React from 'react'
import {useState} from 'react'
import axios from "axios"

export default function Login() {

    const [data,setData] = useState({
        email:'',
        password:''
    })

    const loginUser = (e)=>{
        e.preventDefault();
        axios.get('/user/test')
    }

  return (
    // <div>
    //     <div>
    //         <form onSubmit = {loginUser}>
    //         <label>Email</label>
    //         <input type = "email" placeholder = "Enter your email" value = {data.email} onChange={(e)=>setData({...data,email:e.target.value})}></input>
    //         <label>Password</label>
    //         <input type = "password" placeholder  = "Enter your password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
    //         <button type = "submit">Submit</button>
    //     </form>
    //     </div>
    // </div>
    
        <div className="container">
            <div className="login-card">
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="email"><br />
                        Email:
                    </label><br />
                    <input type="text" name="email" placeholder="Email" />
                    
                    <label htmlFor="password"><br />
                        Password:
                        <input type="password" name="password" placeholder="Password"/>
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <p>Don't have an account? <a href="#">Create Account</a></p>
        </div>
    )
  
}
