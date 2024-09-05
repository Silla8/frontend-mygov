import { Style } from "../styles/style";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import CheckPin_Email from "../services/CheckPin_Email";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";




export default function Recovery(){

    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [pin, setPin]=useState("");
    const [loading, setLoading]= useState(false);
    const [recovered, setRecovered]=useState(false);

    const handleEmail= (e)=>{
        setEmail(e.target.value);
    }

    const handlePin= (e)=>{
        setPin(e.target.value);
    }

    const handleSubmission = async(e)=>{
        e.preventDefault();
        try {

            setLoading(true);
            let res = await CheckPin_Email(pin, email);
            if(res!==true){
                toast(res);
                setTimeout(()=> setLoading(false), 5000);
            }
            
            if(res===true){
                toast("Password Recovered Successfully");
                setLoading(false);
                setRecovered(true);
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return(

        <div style={Style.RecoveryScreen}>
            <ToastContainer />
            {!recovered ? <div style={Style.RecoverySection}>
                <h2>Password Recovery</h2>
                
                <form onSubmit={handleSubmission} style={Style.RecoveryForm}>
                    <CustomInput name={'Unique identifier'} placeholder={'Unique identifier'} type={'text'} handler={handlePin} value={pin}  />
                    <CustomInput name={'Email address'} placeholder={'Email address'} type={'email'} handler={handleEmail} value={email} />
                    <CustomButton title={'> Recover'} fontSize={18} width={150} loading={loading}/>
                </form>

            </div>
            :
            <div style={Style.RecoverySection}>
                <h2>Password Recovered Successfully!</h2>
                
                <div style={Style.RecoveryForm}>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>A temporary password has been sent to your email address, kindly check your email account to get your temporary password!</p>
                </div>
                <span onClick={()=>navigate('/login')}>
                    <CustomButton title={'> Login page'} width={150} fontSize={18}/>
                </span>
            </div>}
        </div>
    );
};