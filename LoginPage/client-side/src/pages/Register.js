import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/messenger.png'

const Register=()=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [confirmPassword,setConfirmPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:username,
            email:email,
            password:password,
            // confirmPassword:confirmPassword
        }
        setUsername('')
        setEmail('')
        setPassword('')
        // setConfirmPassword('')
        console.log(formData)
    }

    const handleChange=(e)=>{
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
        // else if(e.target.confirmPassword === 'confirmPassword'){
        //     setConfirmPassword(e.target.value)
        // }
    }
  return(
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="brand"> 
            <img src={logo} alt="logo"/>
            <h1 className="logo_name">Snapit</h1>
            </div> 
            <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            {/* <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/> */}
            <button type="submit" className="btn_register">Create User</button>
            <span>already have an account ? <Link to="/login" className="right">Login</Link></span>
        </form>
    </div>
  )
}

export default Register