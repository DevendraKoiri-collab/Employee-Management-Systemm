import React from 'react'
import { UsersRound } from 'lucide-react';
import {
  House,
  ClipboardList,
  Users,
  Crosshair,
  CalendarDays,
  ChartColumn,
  Settings,
} from "lucide-react";

const Left_employee_dashboard = () => {
  return (
    <div>
     <div className="outer h-screen w-48 bg-[#222] p-2 pt-2 flex flex-col gap-10 border-r-2 border-gray-700 ">
        <div className="employeehead flex flex-row gap-2 ">
               <UsersRound className='text-green-700 text-center'/>
               <h1 className='text-white font-medium text-l text-nowrap'>Employee Panel</h1>
        </div>
        
        <div className="mid-inner h-screen w-45bg-[#333] rounded-2xl p-1">
            <div className="inner flex flex-col gap-2">
                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white cursor-pointer transition-all duration-200 hover:bg-[#2b2b2b]">
                 <House size={22} className='text-green-700' />
                <span className='text-green-600' >Dashboard</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                  <ClipboardList size={22} />
                <span className='' >Tasks</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                 <Users  size={22} />
                <span className='' >Track</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                 <Crosshair size={22} />
                <span className='' >Employees</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                 <CalendarDays size={22} />
                <span className='' >Calendar</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                 <ChartColumn size={22} />
                <span className='' >Report</span>
                </div>

                <div className="flex items-center gap-4 px-4 h-12 rounded-xl text-white hover:bg-[#2b2b2b] cursor-pointer">
                 <Settings size={22} />
                <span className='' >Settings</span>
                </div>

            </div>
        </div>
     </div>
    </div>
  )
}

export default Left_employee_dashboard
