import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function InfoSection({ title, pic, path }) {

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
    <div className="col-md-4"  >
      <div className="card mb-4 box-shadow" onClick={redirect} onMouseEnter={mouseOver} onMouseLeave={mouseOff} style={{cursor: 'pointer', backgroundColor: mouse ? '#336663' : 'white', display: 'flex', alignItems: 'center'}}>
        <img
          alt="Thumbnail [100%x225]"
          src={pic}
          data-holder-rendered="true"
          height="100"
          width="100"
          style={{borderRadius: 100}}
        />
        <div className="card-body">
          <span style={{ color: mouse ? 'white': '#336663'}}>{title}</span>
        </div>
      </div>
    </div>
  );
}
