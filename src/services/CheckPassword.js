


const CheckPassword = async(password) =>{

    let correct=false;
    try {

        const token = localStorage.getItem('mygovToken');

       await fetch('https://mygov-3789ba1ecda3.herokuapp.com/auth/check-password', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                mygovToken: token
            },
            body: JSON.stringify({ password })
        }).then(res => res.json()).then(data => correct=data);
        
    } catch (error) {
        console.log(error.message);
    }

    return correct;
}

module.exports= CheckPassword;