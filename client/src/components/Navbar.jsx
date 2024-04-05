
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 id = "nav-head">ERP</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/pricing'>Pricing</Link> 
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>   
            <Link to='/register'>Register</Link>       
        </div>
        <button id = "contact-us"><Link to='/'>Contact Us</Link></button>
    </nav>
  )
}
