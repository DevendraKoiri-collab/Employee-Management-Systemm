import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/login.jsx'
import EmployeeDashboard from './Components/Auth/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './Components/Auth/Dashboard/AdminDashboard.jsx'
import { getdata, setdata } from './utils/Localstorage.jsx'
import { Authcontext } from './context/Authprovider.jsx'
import Authprovider from './context/Authprovider.jsx'

const App = () => {
   const [user, setuser] = useState(null);
    const authdata = useContext(Authcontext);

    useEffect(()=>
    {
      const loggedInuser=localStorage.getItem('loggedInuser')
      if(loggedInuser)
      {
        setuser(loggedInuser.role)
      }

    },[authdata]);

    const handlelogin=(email,password)=>
    {
      
       if(email=='admin@me.com' && password=='123')
       {
      
        setuser('admin');
        localStorage.setItem('loggedInuser',JSON.stringify({role:admin}))
       }
       else if(authdata && authdata.employees.find((e)=> email==e.email && password==e.password
        ))
       {
       
        setuser('employee');
         localStorage.setItem('loggedInuser',JSON.stringify({role:employees}))
       }
       else{
        alert("Invalid credentials");
       }

    }

   

  return (
    <div >
     { !user?<Login handlelogin={handlelogin}/>:"" }
     {user=='admin'? <AdminDashboard/>:<EmployeeDashboard/>}
      {/* <EmployeeDashboard/> */}
      
      
    </div>
  )
}

export default App
