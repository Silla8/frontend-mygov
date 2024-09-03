import '../styles/Information.css';



export default function Information(){

    return (
        <div className="info">
               <div style={{width: '70%', }}>
                    <p style={{display: 'flex', fontSize: 30}}>Welcome</p>
                    <p style={{display: 'flex', fontSize: 16}}>
                        Your Centralized Government Portal! At MyGov, we are committed to streamlining your interaction with government services.
                    </p>
                    <div style={{ borderTop: "1px solid #80b6b3 ", marginLeft: 20, marginRight: 20, marginTop: 40, marginBottom: 40}}></div>
                    <p style={{fontSize: 16,  display: 'flex'}}>Please register to submit an application or log in if you're already registered.</p>
                    <div style={{position: 'absolute', bottom: 10, right: 10, display: 'flex', flexFlow: 'column', alignItems: 'flex-end'}}>
                        <p style={{ fontSize: 15}}>© 2024, SilloGic Solutions & Idda</p>
                        <p style={{ fontSize: 13, color: '#80b6b3', }}>Version 1.0.0</p>
                    </div>
               </div>
        </div>
    )
};