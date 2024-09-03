import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import DetailSection from "../components/DetailSection";
import LoadingPage from "../components/LoadingPage";

export default function Details({ setIsActive }){

    const [loading, setLoading]= useState(false);
    const [response, setResponse]= useState({});
    const { path } = useParams();
    const headerMap = new Map([
        ["personal_info" , "Personal Information"],
        ["workplace_info","Workplace Information"],
        ["personal_interest","Personal Interest Information"],
        ["financial_info","Financial Information"],
        ["family_info","Family Information"],
        ["education_info","Education Information"],
        ["profile", "Comprehensive Information"]
]);
    
    useEffect(()=>{
        fetching();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetching = async ()=>{

            setLoading(true);
            const token = localStorage.getItem('mygovToken');
            try {

                await fetch("https://mygov-3789ba1ecda3.herokuapp.com/auth/verify-token", {
                    method: 'get',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        mygovToken: token
                    }
                }).then(res => res.json()).then(data => {
                    if(!data){

                        setLoading(false);
                        setIsActive(false)
                    }});
    
                const body = {
                    "options": [
                     "all"
                    ]
                     
                 };

                 await fetch("https://mygov-3789ba1ecda3.herokuapp.com/api/"+path, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        mygovToken: token,
                    },
                    body: JSON.stringify(body)
                }).then(res => res.json()).then(data => {
                    setResponse(data);
                    }
                );

            } catch (error) {
                console.log(error.message);
            }

            
            setLoading(false);
           
    }

   
    return(
        <div className="details d-flex flex-column">
            <HomeHeader setIsActive={setIsActive}/>
            {loading ? <LoadingPage />: <DetailSection response={response} title={headerMap.get(path)}/>}
            <HomeFooter />
        </div>
    );
}