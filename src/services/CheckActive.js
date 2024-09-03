


const  CheckActive = async (setIsActive )=>{

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
                    setIsActive(false)
                }});


        }catch(error){
            console.log(error.message);
        }
}

module.exports = CheckActive;