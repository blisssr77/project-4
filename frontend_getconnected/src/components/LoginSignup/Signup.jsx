import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'


const Signup = (props) => {
    const [form, setForm] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSignUp(form)
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    const handleLoginRedirect = () => {
        navigate('/login');
    }
    }

  return (
    <div className="container">
        <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <label htmlFor="username"/>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" className="" />
                    <label htmlFor="email"/>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" className="" />
                    <label htmlFor="password"/>
                    <input type="password" name="password" autoComplete="true" placeholder="Password" onChange={handleChange}/>
                </div>
            </div>
            <div className="submit-container">
                <button type="submit" className="submit" value="Login">Sign Up</button>

                <button type="button" className="gray submit">Log In</button>

                {/* <button type="button" className="gray bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoginRedirect}>Log In</button> */}
            </div>
        </form>
    </div>
  )
}

export default Signup