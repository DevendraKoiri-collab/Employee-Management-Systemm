import React, { useState } from "react";

const Login = ({handlelogin}) => {
  console.log({handlelogin})
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      {/* Heading */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white">
          Login
        </h1>
      </div>

      {/* Centered Card */}
      <div className="flex-1 flex justify-center items-center ">
        <div className="w-96 h-140 flex justify-center items-center bg-gray-500 border-2 border-[#ffffff] shadow-lg rounded-4xl">
          {/* Your form goes here */}
          <form 
             onSubmit={(e)=>
             {
                 e.preventDefault();
                handlelogin(email,password)
             

                 setemail("");
                 setpassword("");

             }
             }
             className="flex flex-col justify-center items-center gap-5">
            <input 
            required className="h-15 w-70 p-5 rounded-4xl border-2 text-black border-[#ffffff]  " type="email"
             placeholder="Enter your email"
             value={email} 
             onChange={(e)=>
             {
                setemail(e.target.value);

             }
             }/>
            <input 
            value={password}
            onChange={(e)=>
            {
                setpassword(e.target.value);

            }
            }
            required className="  h-15 w-70 p-5 rounded-4xl border-2 text-black border-[#ffffff] " type="password" placeholder="Enter your password" />
            <div className="submit mt-5">
                <button className=" submit text-white bg-[#41926B] p-4  h-15 w-70  font-medium text-xl rounded-4xl " type="submit">Login</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;