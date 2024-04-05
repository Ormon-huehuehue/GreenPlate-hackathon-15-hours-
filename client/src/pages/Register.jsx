import React from 'react'
import { useState } from 'react'
import axios from "axios"



export default function Register() {

    const [data,setData] = useState({
        name:'',
        email:'',
        password :''
    })

    const registerUser= (e)=>{
        e.preventDefault()

  // Send HTTP POST request to backend using Axios
        axios.post('/user/register',data)
            .then(response => {
                console.log('Response from server:', response.data);
      // Handle response as needed
            })
            .catch(error => {
                console.error('Error:', error);
      // Handle error
            });
        }



  return (
    <div className='register-container'>
        <form onSubmit = {registerUser} className='register-card'>
            <h1>Register</h1>
            <label>Name</label>
            <input type = "text" placeholder = "Enter your name" value ={data.name} onChange={(e)=> setData({...data, name : e.target.value})}></input>
            <label>Email</label>
            <input type= "email" placeholder = "Enter your email" value = {data.email} onChange={(e)=> setData({...data,email:e.target.value})}></input>
            <label>Password</label>
            <input type = "password" placeholder = "Enter your password" value = {data.password} onChange = {(e)=> setData({...data,password:e.target.value})}></input><br/>
            <button type= "submit">Submit</button>
        </form>
    </div>
  )
}
