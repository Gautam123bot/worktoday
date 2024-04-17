import React from 'react'
import Info from '../components/Booking_details/Info';
import Selectservice_o from "../components/Booking_details/Selectservice_o"
import Time from '../components/Booking_details/Time';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Getstaffo() {
  const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
      services: '',
      noofstaff: '',
      starttime: '',
      endtime: '',
      notes: '',
      yname: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      address: '',
    })
  
    const RegisterUser = async (e) => {
      // const {username, email, password, firstName, lastName,country,state,city,  address, phone, food} = data
      e.preventDefault();
      try {
        await axios.post("http://localhost:3001/booked", data)
          // username,
          // email,
          // password, 
          // firstName, 
          // lastName, 
          // country, 
          // state, 
          // city,
          // address,
          // phone,
          // food
        // })
        .then(()=>{
          navigate("/");
          alert("registration successful");
        })
        
      } catch (error) {
        alert('Registration failed')
        console.log(error)
      }
  
    }
  
    const titles = ["Give your requirements", "Timing of your work", "Contact Info"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <Selectservice_o data={data} setData={setData}/>
      } else if (page === 1) {
        return <Time data={data} setData={setData}/>
      } else {
        return <Info data={data} setData={setData}/>
      }
    } 
  
    return (
      <div className='bg-gradient-to-r from-slate-100 to-red-600 w-full h-screen min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen'>
        <div>
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
           {/* <img className='mx-auto h-24 w-auto' src={logo} alt="/" /> */}
           <h1 className='p-4 underline text-center text-cyan-950 text-xl'>What's next???</h1>
           <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            {titles[page]}
           </h1>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div>{PageDisplay()}</div>
          <div className='flex flex-row gap-3 pt-8'>
            <button 
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1)
            }}
            className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              Prev</button>
            <button 
             onClick={(e) => {
                if (page === titles.length - 1){
                  alert('Form Submitted')
                  RegisterUser(e);
                  console.log(data)
                } else {
                  setPage((currPage) => currPage + 1)
                }
             }}
            className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              {page === titles.length - 1 ? "Submit" : "Next"}</button>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Getstaffo
