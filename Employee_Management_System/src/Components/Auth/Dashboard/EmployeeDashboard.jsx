import React from 'react'
import Left_employee_dashboard from './employeedashboard components/Left_employee-dashboard'
import Rightsection_employee from './employeedashboard components/Rightsection_employee'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className='h-screen w-full bg-amber-800 flex justify-between'>
        <Left_employee_dashboard/>
        <Rightsection_employee/>
        
      </div>
    </div>
  )
}

export default EmployeeDashboard
