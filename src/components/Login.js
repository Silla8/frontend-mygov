import '../styles/Login.css';
import LogSection from './LogSection';


export default function Login({ setIsActive }){
    
    return (
        <di className="login">
            <LogSection setIsActive={setIsActive} />
        </di>
    )
};