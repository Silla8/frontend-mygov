

const CheckPin_Email = async(pin, email)=>{

    let response = false;
    try {
        
        await fetch("https://mygov-3789ba1ecda3.herokuapp.com/auth/password-recovery", {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pin, email })
        }).then(res => res.json()).then(data => response = data)

    } catch (error) {
        console.log(error.message);
    }

    return response;
}

module.exports= CheckPin_Email;