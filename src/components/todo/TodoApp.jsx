import { useState } from "react";
import {BrowserRouter, Routes, Route , useNavigate,useParams} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
          <Route path="*" element={<ErrorComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
 <h1>Lets start with your login!</h1>
  const [username, setUsername] = useState("in28minutes");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const [showError, setShowError] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    // console.log(event.target.value)
    setPassword(event.target.value);
  }

  function handleButton() {
    if (username.trim() !== "" && password === "dummy") {
      setShowSuccess(true);
      setShowError(false);
      navigate(`/welcome/${username}`)//use tild whrn we want a value to change 
      // console.log("success")
    } else {
      // console.log("failed")
      setShowSuccess(false);
      setShowError(true);
    }
  }

  //this is very long procedure
  // function SuccessMsgComponenet(){
  //     if(showSuccess){
  //         return <div className="successMsg" >Authentication successfull</div>
  //     }
  //     return null
  // }

  // function ErrorMsgComponenet(){
  //     if(showError){
  //         return <div className="successMsg">Authentication Failed</div>
  //     }
  //     return null
  // }

  return (
    <div className="Login">
        <h1>Lets start with your login!</h1>
      <div className="LoginForm">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button type="button" name="login" onClick={handleButton}>
            Login
          </button>
        </div>
      </div>

      {/* <ErrorMsgComponenet/> 
      <SuccessMsgComponenet/> */}

      {/* Easier way insteda of using components */}
      {showSuccess && (
        <div className="successMsg">Authentication successfull</div>
      )}
      {showError && <div className="errorMsg">Authentication Failed</div>}
    </div>
  );
}

function WelcomeComponent() {
    const {username} =useParams();
    // console.log(username)
  return <div className="WelcomeComponent">
    <h1>Welcome {username}!</h1>
    <div>Welcome</div>
    </div>;
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
    <h1>Error 404!</h1>
    <div >Sorry for inconvinience our team is currently woking on it</div>
    </div>
  )
}



