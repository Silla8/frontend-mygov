import Information from "../components/Information";
import Login from "../components/Login";
import '../styles/Welcome.css';
import Header from "../components/Header";



function Welcome({ setIsActive }){

    return (
        <div className="welcome">
            <Header />
            <Login setIsActive={setIsActive} />
            <Information />
        </div>
    );
}

export default Welcome;