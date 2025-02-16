import axios from "axios";
import { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mailChnge = (e) => {
    setEmail(e.target.value);
  };
  

  const handleFormSubmit = async (e) => {
    try {
      // console.log(email, pass);
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/login", {email, password})
      // const data = await response.json()
      if(response.status==200){
        navigate("/success");
      }
    } catch (error) {
      console.log("Error loggin in: ", error.message);
    }
    // navigate("/success");
  };

  return (
    <>
      <div className="form">
        <div>
          <h1>Login Form</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            onChange={mailChnge}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            // onChange={passChnge}
            onChange={(e)=>setPassword(e.target.value)}
            required
            
          />
          <br />
          <button type="submit">Login</button>
          <Link to={"/register"}>
            <p id="noAcc">Don't have an account</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Log;
