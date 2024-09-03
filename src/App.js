import './App.css';
import Welcome from "./screen/Welcome";
import Home from './screen/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import Details from './screen/Details';
import Setting from './screen/Setting';

function App() {

  const [isActive, setIsActive]=useState(false);
  const [loading, setLoading]=useState(false);

useEffect(()=>{
    isAuth();
},[])

  const isAuth = async ()=>{
    setLoading(true);
    const token = localStorage.getItem('mygovToken');
    try {
          await fetch("https://mygov-3789ba1ecda3.herokuapp.com/auth/verify-token", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            mygovToken: token,
          }
        }).then(response => response.json()).then(data => {
          setIsActive(data)
          
        });
      
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  if(loading){
    return <LoadingPage />
  }
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route exact path="/home" element={!isActive ?  <Navigate to="/login" /> :<Home setIsActive={setIsActive} /> }/>
            <Route exact path="/login" element={isActive ? <Navigate to="/home" /> : <Welcome setIsActive={setIsActive}/>}/>
            <Route exact path="/home/setting" element={isActive ? <Setting setIsActive={setIsActive} /> : <Navigate to={"/login"} />} />
            <Route exact path="/home/:path" element={isActive ? <Details setIsActive={setIsActive} /> : <Navigate to="/login" />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
