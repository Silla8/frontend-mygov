import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function MergedSection({ title, path }) {

  const [mouse, setMouse]= useState(false);
  const navigate = useNavigate();
  const redirect = ()=>{
    navigate('/home/'+path);
  }

  const mouseOver = ()=>{
    setMouse(!mouse);
}

const mouseOff= ()=>{
    setMouse(!mouse);
}

  return (
        <div className="card mb-1 box-shadow" style={{backgroundColor: mouse? "blueviolet":'#336663', cursor: 'pointer'}} onClick={redirect} onMouseLeave={mouseOff}  onMouseEnter={mouseOver}>
            <div className="card-body">
            <span style={{color: "white", fontWeight: 'bold'}}>{title}</span>
            </div>
        </div>
  );
}
