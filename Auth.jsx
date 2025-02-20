import { useState } from "react";
import axios from "axios";

const Auth = () => {
const [name,setName]= useState("")
const [email,setEmail]= useState("")
const [password,setPassword]= useState("")
const nameChnge =(e)=>{
    setName(e.target.value)
}
const mailChnge =(e)=>{
    setEmail(e.target.value)
}
const passChnge =(e)=>{
    setPassword(e.target.value)
}
const handleFormSubmit =async (e)=>{
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8000/reg",{name,email,password})
       console.log("Registration Success ", result)
    } catch (error) {
      console.log("Something went wrong",error);      
    }    
}
  return (
    <>
      <div className="form">
        <div>
          <h1>Register Form</h1>
        </div>
        <form   onSubmit={handleFormSubmit}>        
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            onChange={nameChnge}
          /> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            onChange={mailChnge}
          /> <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            onChange={passChnge}
          /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Auth;
