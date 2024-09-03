import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import { Style } from '../styles/style';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState, useEffect } from "react";
import CheckActive from "../services/CheckActive";
import CheckPassword from "../services/CheckPassword";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dummy from '../images/personal_info.svg';
import { useNavigate } from "react-router-dom";


export default function Setting({ setIsActive }){

    const navigate = useNavigate();
    const [loadingPassword, setLoadingPassword]= useState(false);
    const[loadingPicture, setLoadingPicture]= useState(false);
    const [password, setPassword]= useState("");
    const [newPassword, setNewPassword]= useState("");
    const [confirmPass, setConfirmPass]= useState("");
    const [picture, setPicture]=useState(null);

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
    const cleanup= ()=>{
        setConfirmPass("");
        setNewPassword("");
        setPassword("");
    }

    const handlePassword= (e)=>{
        setPassword(e.target.value);
    }

    const handleNewPassword= (e)=>{
        setNewPassword(e.target.value);
    }

    const handleConfirmPassword= (e)=>{
        setConfirmPass(e.target.value);
    }

    const submissionPassword = async (e)=>{
        e.preventDefault();
        setLoadingPassword(true);
        await CheckActive(setIsActive);
        const correct = await CheckPassword(password);
        if(!correct){
            setLoadingPassword(false);
            toast('Please provide your correct current password!');
        }
        if(correct===true && newPassword===confirmPass){
            const token = localStorage.getItem('mygovToken');
            await fetch('https://mygov-3789ba1ecda3.herokuapp.com/auth/change-password', {
                method: 'put',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    mygovToken: token
                },
                body: JSON.stringify({ newPassword })
            }).then(res => res.json()).then(data =>{

                setLoadingPassword(false);
                cleanup();
                toast(data);

            })
        }
        
        setLoadingPassword(false);
    }

    const submissionPicture = async(e)=>{

        e.preventDefault();
        setLoadingPicture(true);
        await CheckActive(setIsActive);

        if(picture.toString().split(':')[0]=== 'http'){
            toast("Please select a picture to proceed!");
            setTimeout(()=> setLoadingPicture(false), 5000);
            return
        }
        const formData = new FormData();
        formData.append("image", picture);
        const token = localStorage.getItem('mygovToken');

        await fetch('https://mygov-3789ba1ecda3.herokuapp.com/picture', {
            method: 'put',
            headers: {
                "Accept": "application/json",
                mygovToken: token
            },
            body: formData
        }).then(res => res.json()).then(data =>{
            toast(data);
        })


        setTimeout(()=> {setLoadingPicture(false);navigate(0)}, 5000);

    }
    return(
        <div className="home d-flex flex-column">
            <ToastContainer />
            <HomeHeader setIsActive={setIsActive} />
            <div style={Style.DetailSection1}>
                <div style={{width: '40%', marginBottom: 5}}>
                    <h2 style={{color: "#336663"}}>Password Setting</h2>
                    <form onSubmit={submissionPassword} style={{borderRadius: 10, height: '60vh', border: '1px solid #EAEAEA', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', rowGap: 30}}>
                        <div style={{width: '70%', display: 'flex', flexDirection: 'column', rowGap: 20, alignItems: 'center'}}>
                            <CustomInput type={'password'} name={'password'} placeholder={'Current Password'} handler={handlePassword} value={password}/>
                            <CustomInput type={'password'} name={'password'} placeholder={'New Password'} handler={handleNewPassword} value={newPassword}/>
                            <CustomInput type={'password'} name={'password'} placeholder={'Confirm Password'} handler={handleConfirmPassword} value={confirmPass}/>
                        </div>
                        <p style={{color: 'royalblue', visibility: newPassword!==confirmPass ? 'visible' : 'hidden'}}>Please Confirm your password, to continue!</p>
                        <CustomButton loading={loadingPassword} title={' > Change Password'}  width={160}/>
                    </form>
                </div>
                <div style={{width: '40%', marginBottom: 5}}>
                    <h2 style={{color: "#336663"}}>Picture Setting</h2>
                    <form onSubmit={submissionPicture} style={{borderRadius: 10, height: '60vh', border: '1px solid #EAEAEA', display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: 20}}>
                        <div style={{width: '70%', display: 'flex', paddingTop: 10, flexDirection: 'column', rowGap: 10, alignItems: 'center'}}>
                            <img 

                                alt="pic profile"
                                width={210}
                                height={240}
                                style={{borderRadius: 20, border: '1px solid #EAEAEA'}}
                                src={picture ?  (picture.toString().split(':')[0]==='http' ? picture : URL.createObjectURL(picture)) : dummy}
                            />
                            <input type="file" name="image" onChange={event => setPicture(event.target.files[0])} style={{color: 'white', backgroundColor: 'blueviolet'}}/>
                        </div>
                        <CustomButton loading={loadingPicture} title={' > Upload picture'}  width={160}/>
                    </form>
                </div>
            </div>
            <HomeFooter />
      </div>
    );
}
