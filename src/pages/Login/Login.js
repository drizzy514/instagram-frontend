import {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";
function Login () {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user, setUser] = useState('')
    const [setToken] = useAuth(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
            if(user) {
              try {
                await axios.post("https://blog-siteuz.herokuapp.com/login", {
                  password,
                  username
                }).then(res => res.json()).then(data => {
                  setToken(data.accessToken)
                  typeof data.message !== 'undefined' ? console.log(data.message) : console.log()
                });
              } catch (err) {
                      console.log(err.message)
              }
            }
        
          return setUser
      };
    return (
                <>
                    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="https://blog-siteuz.herokuapp.com/login" className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
                </>
            )
}

export default Login
