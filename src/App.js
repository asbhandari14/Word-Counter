import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,                                       //This must be needed to import to use the react router 
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');           //Wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message, 
      type:  type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'; 
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode ";
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // } , 2000)
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // } , 1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode ";
    }
  }
  return ( 
  <>
<Router>

<Navbar title = "TextUtils" aboutText='About' mode = {mode} toggleMode = {toggleMode} />
<Alert alert= {alert}/>
<div className="container my-3" >
<Routes>
          <Route exact path="/about" element={<About mode = {mode}/>}>   
   //It is good practice to use exact path instead of path(only)
          </Route>

          <Route exact path="/" element={<TextForm showAlert ={showAlert} heading = " Try TextUtils - word counter, character counter , remove extra spaces  " mode = {mode}/>}>

          </Route>
        </Routes>
</div>
</Router>
    </>
  );
}

export default App; 
