import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user-logged-in")) {
       
      // const date=new Date().getTime()+50000;
      // console.log(date);
      // data.user.time=date;
      // console.log(data.user);
      // navigate("/chat")


  //   }
  // }, []);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // console.log(res);

    const data = await res.json();
    if (res.status === 400) {
      toast.error(data.Message, { theme: "dark" });
    } else {


      //implementation for log out automatically after a fixed time=====
      
      const date=new Date().getTime()+20000;
      console.log(date);
      data.user.time=date;
      // console.log(data.user);

      localStorage.setItem("user-logged-in",JSON.stringify(data.user));
      navigate("/chat");
    }
  };

  
  return (
    <div className="register_container">
      <div className="form_container">
        <Navbar />
        <form onSubmit={(e) => handleSubmit(e)} className="from">
          <p>START FOR FREE</p>
          <h2>Log in account</h2>
          <span>
            New Member ? <Link to="/register">Register</Link>
          </span>

          <input
            type="email"
            placeholder="Enter User Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            placeholder="Enter User Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <div className="btn_container">
            {/* <button className='button change_pass' >Change Password</button> */}
            <button type="submit" className="button create_acc">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
