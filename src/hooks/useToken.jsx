import { useEffect, useState } from 'react';
const useToken = user => {
    const [token, setToken] = useState();
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const tokenUser = {name,email};
        if(email){
            fetch(`https://autozoneapp.herokuapp.com/users/${email}`,{
                method:'PUT',
                body:JSON.stringify(tokenUser)
            })
            .then(res=>res.json())
            .then(data =>{
                const accessToken = data?.token;
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken);
            })
        }
    }, [user])
    
    return [token];
};

export default useToken;