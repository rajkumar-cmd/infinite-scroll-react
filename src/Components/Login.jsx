import React from 'react'
import Style from "../Components/Style/Login.module.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContextProvided";
import { Button } from '@chakra-ui/react';

const Login = () => {
  const val = React.useContext(AuthContext);
  const navigate=useNavigate();
  const [data,setData]=React.useState({
    Username:"",
    Password:""
  })
  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(data.Username=="foo"&&data.Password=="bar"){
      console.log("You are in");
      val.log();
      navigate("/home")
    }
  }
  console.log(data);
  return (
    <form className={Style.LoginBox}>
      <h1>Login</h1>
      <h3>Username</h3>
      <input type="text" name='Username' onChange={handleinput} placeholder='Username' value={data.Username}/>
      <h3>Password</h3>
      <input type="text" name='Password' onChange={handleinput} placeholder='Password' value={data.Password}/>
      <Button size='lg' className={Style.Submit} onClick={handlesubmit}>Submit</Button>
    </form>
  )
}

export default Login