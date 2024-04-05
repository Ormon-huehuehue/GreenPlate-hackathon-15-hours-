import {useState} from 'react'
import axios from "axios"

export default function Login() {

    const [data,setData] = useState({
        email:'',
        password:''
    })

    const loginUser = (e)=>{
        e.preventDefault();
        axios.post('/user/login',data)
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
        <div className="container">
            <div className="login-card">
                <h1>Sign In</h1>
                <form onSubmit = {loginUser}>
                    <label>Email</label><br/>
                    <input type= "email" placeholder = "Enter your email" value = {data.email} onChange={(e)=> setData({...data,email:e.target.value})} /><br/>
                    <label>Password</label><br/>
                    <input type = "password" placeholder = "Enter your password" value = {data.password} onChange = {(e)=> setData({...data,password:e.target.value})} /><br/>
                    <button type= "submit">Submit</button>
                </form>
            </div>
        </div>
    )
  
}
