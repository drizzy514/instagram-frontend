import { useState   } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";



function Signup (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        // const accessToken =  window.localStorage.getItem('token')
        // // await axios.get("http://localhost:4000/reg", {
        // //   method: 'GET',
        // //   body: {
        // //     token: accessToken,
        // //   }
        // // }).then((res) => console.log(res.data))
        try {
          const res = await axios.post("https://blog-siteuz.herokuapp.com/reg", {
            username,
            password
          }).then(async(response) => {
            await window.localStorage.setItem('token', response.data)
          });
          res.data && window.location.replace("/");
        } catch (err) {
          setError(true);
        }
      };
    return (
        <>  
        <div className="register">
        <span className="registerTitle">Register</span>
        <form action="https://blog-siteuz.herokuapp.com/reg" className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <label>Phone Number</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your number..."
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/">
            Login
          </Link>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Succsessfuly signed!</span>}
      </div>
              </>
    )
}
export default Signup