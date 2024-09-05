import CustomButton from "./CustomButton"
import { useState } from 'react';
import CustomInput from './CustomInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function LogSection({ setIsActive }){


    //React hooks
    const [pin, setPin]= useState("");
    const [password, setPassword]= useState("");
    const [visible, setVisible]= useState(false);
    const [mouse, setMouse] = useState(false);
    const [loading, setLoading]= useState(false);
    const [email, setEmail] = useState("");


    //Handler functions
    const handlePin= (event)=>{
        setPin(event.target.value);
    }
    
    const handlePassword= (event)=>{
        setPassword(event.target.value);
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }


    const cleanUp= ()=>{
        setPassword("");
        setPin("");
        setEmail("");
    }
    const submission = async (e)=>{

        e.preventDefault();
        try {
            
                setLoading(true);
                await fetch( visible ? "https://mygov-3789ba1ecda3.herokuapp.com/auth/signup" : "https://mygov-3789ba1ecda3.herokuapp.com/auth/signin", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(visible ? { pin, password, email } : { pin, password })
                }).then(response => response.json()).then(data => {
        
                    if(data.token){
                        localStorage.setItem("mygovToken", data.token);
                        setLoading(false);
                        setIsActive(true);
                    }else{
                        setLoading(false);
                        toast(data);
                    }
                })
        
            
        } catch (error) {
            setLoading(false);
            toast("Connection Failed");
        }
       
        
    }

    const mouseOver = ()=>{
        setMouse(!mouse);
    }

    const mouseOff= ()=>{
        setMouse(!mouse);
    }

    const visibility= ()=>{
        setVisible(!visible);
        cleanUp();
    }

    return (
        <div style={{width: '70%',}}>
        <ToastContainer />
            <div style={{marginBottom: -10}}>
                <p style={{ display: 'flex', fontSize: 30 }}>{visible ? 'Register' : 'Log in'}</p>
            </div>
            <form onSubmit={submission} style={{display: 'flex', flexDirection: 'column', rowGap: 18}}>

                    <CustomInput type={'text'} name={'pin'} handler={handlePin} placeholder={'Unique identifier'} value={pin}/>

                    {visible ? <CustomInput type={'email'} name={'email'} handler={handleEmail} placeholder={'Email address'} value={email} /> : null}
                    
                    <CustomInput type={'password'} name={'password'} handler={handlePassword} placeholder={'Password'} value={password} />
                    
                    <CustomButton title={visible ? ' > Register' : ' > Log in'} loading={loading} width={100} fontSize={19}/>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
                       {visible ? null : <a href='/password-recovery' style={{color: '#336663', }}> 
                            <p style={{fontSize: 18, display: 'flex'}}>Forgot password</p>
                        </a>}
                        <span 
                            style={{color: '#336663', textDecoration: mouse ? 'underline' :'none'  }} 
                            onMouseEnter={mouseOver} 
                            onMouseLeave={mouseOff}
                            onClick={visibility}
                            > 
                                <p style={{fontSize: 18, display: 'flex'}} >{visible ? 'Have alredy an account?' : 'Register'}</p>
                        </span>
                    </div>
                
            </form>
        </div>
    )
    
};


