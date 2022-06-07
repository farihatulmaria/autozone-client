import { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState();
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
      const email = user?.email;
      if(email){
          fetch(`https://autozoneapp.herokuapp.com/admin/${email}`,{
              method:'GET',
              headers:{
                'content-type':'application/json',
            },
          })
          .then(res=>res.json())
          .then(data => {
            setAdmin(data?.admin);
            setAdminLoading(false);
          });
      }
    }, [user])
    
    return [admin,adminLoading];
};

export default useAdmin;