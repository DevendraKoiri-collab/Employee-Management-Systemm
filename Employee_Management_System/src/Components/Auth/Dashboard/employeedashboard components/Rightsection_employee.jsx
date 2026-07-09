import React from 'react'
import {
  ClipboardPlus,
  BadgeCheck,
  UserCheck,
  CircleX,
} from "lucide-react";

const Rightsection_employee = () => {
  return (
    <div className='h-full w-[83%] bg-[#2b2b2b] flex flex-col gap-1 justify-between'>
        <div className="p-5 flex justify-between ">
            <h1 className=' text-2xl text-white capitalize font-bold'>Employee Panel</h1>
            <div className="flex text-center gap-1">
               <div className='h-6 w-6 rounded-full bg-amber-700  text-center text-white'>D</div>
               <span className='text-white font-medium text-l'>Devendra</span>
            </div>
           
        </div>

         <div className="secondsection bg-[#2b2b2b] w-[90%] h-[39%] rounded-2xl ml-10">
             <section className='p-3 '>
                <div className="top flex justify-between ">
                    <div className="left flex flex-col gap-[-8px] leading-none">
                    <h4 className='text-gray-500 font-bold text-m'>Hello,</h4>
                    <h2 className='text-white font-bold text-xl '> Devendra 👋</h2>
                       </div>
                       <button className='text-white bg-red-500 border-none rounded-xs h-7 w-20'>Logout</button>
                </div>

                <div className="boxes w-full p-4 flex justify-between gap-4">

                <div className="box1 h-30 w-50 bg-blue-400 rounded-2xl flex flex-col justify-between p-3 ">
                    <h1 className='text-white font-bold text-3xl'>0</h1>
                    <div className="bottom flex justify-between ">
                        <h1 className='text-white font-bold text-l mt-4'>New Task</h1>
                        <ClipboardPlus
                   size={50}
                className="text-white/20 "
                     />
                        
                    </div>
                </div>
              
               <div className="box1 h-30 w-50 bg-green-400 rounded-2xl flex flex-col justify-between p-3 ">
                    <h1 className='text-white font-bold text-3xl'>3</h1>
                    <div className="bottom flex justify-between ">
                        <h1 className='text-white font-bold text-l mt-4'>Completed</h1>
                        <BadgeCheck
                   size={50}
                className="text-white/20 "
                     />
                        
                    </div>
                </div>



                 <div className="box1 h-30 w-50 bg-[#E8AC24] rounded-2xl flex flex-col justify-between p-3 ">
                    <h1 className='text-white font-bold text-3xl'>3</h1>
                    <div className="bottom flex justify-between ">
                        <h1 className='text-white font-bold text-l mt-4'>Accepted</h1>
                       <UserCheck
                   size={50}
                className="text-white/20 "
                     />
                        
                    </div>
                </div>



                 <div className="box1 h-30 w-50 bg-red-500 rounded-2xl flex flex-col justify-between p-3 ">
                    <h1 className='text-white font-bold text-3xl'>1</h1>
                    <div className="bottom flex justify-between ">
                        <h1 className='text-white font-bold text-l mt-4'>Failed</h1>
                        <CircleX
                   size={50}
                className="text-white/20 "
                     />
                        
                    </div>
                </div>


                </div>
                
            
            </section>

         </div>

         <div className="thirdsection flex flex-col gap-1 bg-[#2b2b2b] w-[90%] h-[50%] rounded-2xl ml-10">
            <div className="top flex justify-between p-2">
                <h3 className='text-white text-l font-bold '>Recent task </h3>
                <h3 className='text-green-400'>View all </h3>
                
                 
            </div>
            <div className="grid1 h-23 w-[95%] bg-red-500 ml-5 rounded-xl p-3 text-white">
                <h1>Ek aur task</h1>
                <p>Task jaisa kabhi na dekha hoga</p>
            </div>
             <div className="grid1 h-21 w-[95%] bg-green-400 ml-5 rounded-xl p-2 text-white">
                  <h1>Example task</h1>
                <p>wo aisa task hai</p>
             </div>
              

         </div>
           

       
        
      
      
    </div>
  )
}

export default Rightsection_employee
