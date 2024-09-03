import logo from "../images/mygov_logo.png";
import pic from '../images/personal_info.svg';
import '../styles/dropdown.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function HomeHeader({ setIsActive, photo }) {
 
  const [picture, setPicture]= useState(null);
  
  const logout =()=>
  {
    localStorage.removeItem("mygovToken");
    setIsActive(false);

  }

  const navigate = useNavigate();
  const redirect = ()=>{
    navigate('/home/setting');
  }

  useEffect(()=>{
    fetching();
  },[])

  const fetching = async()=>{
    try {
        
        const token= localStorage.getItem('mygovToken');

        await fetch('https://mygov-3789ba1ecda3.herokuapp.com/picture', {
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                mygovToken: token
            }
        }).then(res => res.json()).then(data => {
            setPicture(data.imageUrl);
        })
       
    } catch (error) {
        console.log(error.message);
    }
}

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-white justify-content-between" style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>
      <a class="navbar-brand" href="https://my.gov.az/">
        <img
          className="logo"
          width="110"
          height="30" 
          src={logo}
          alt="mygov logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-5" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/home">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home">
              Contact
            </a>
          </li>
          <li class="nav-item dropdown"  style={{paddingLeft: 13}}>
            <img
              alt="Thumbnail [100%x225]"
              src={photo ? photo : (picture ? picture : pic)}
              data-holder-rendered="true"
              height="45"
              width="45"
              style={{borderRadius: 100}}
            />
            <div class="dropdown-content">
              <p onClick={redirect} style={{paddingTop: 5}}>Setting</p>
              <p onClick={logout}>{'> Log out'}</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
