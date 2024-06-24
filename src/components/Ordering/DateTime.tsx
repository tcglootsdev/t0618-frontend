"use client";

import { useState } from "react";
import moment from "moment";

const DateTime = () => {
  const [type, setType] = useState('Date');
  const dayset = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = () => {
    var today = new Date();
    var days = [];
    for(var i=0; i<10; i++) {
      days.push(i);
    }
    return days.map((day)=>{
      return(
        <div className="fmt-5">
          <div className="bg-[#FAF3F2] hover:bg-[#494040] hover:text-white p-3 text-center">
            <p className="text-black">{today.getDate() + day > 31 ? today.getDate() + day - 31 : today.getDate() + day}</p>
          </div>
          <p className="text-[#494040] text-center">{dayset[(today.getDay() + day) % 7]}</p>
        </div>
      )
    })
  }

  return (
    <div className="py-5 px-10 bg-white h-screen">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p className="uppercase text-[#494040] text-3xl font-serif">Select</p>
          <p className="uppercase text-[#494040] text-3xl font-serif italic">{type=='Date'?"Date":"Time"}</p>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-black text-base">Choice a master</p>
          <div className="w-48 p-2">
            <select id="cars" name="cars" className="bg-white h-6 border border-gray-500 w-full text-black">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-2xl text-[#494040] uppercase">{moment(Date.now()).format("MM/YYYY")}</p>
        </div>
        <div className="flex">
          <button className="bg-white border border-gray-200 p-2 hover:bg-gray-300">
            <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"></path>
            </svg>
          </button>
          <button className="bg-white border border-gray-200 p-2 hover:bg-gray-300">
            <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-10 justify-between mt-5">
        {dates()}
      </div>
      <div className="bg-[#FAF3F2] h-3/5 text-center justify-items-center mt-8 content-center">
        <div>
          <img src="/images/Home/Group 13.png" className="mx-auto"/>
        </div>
        <p className="text-2xl text-[#494040] font-serif uppercase mt-5 mb-2">Fatima is fully booked on this date</p>
        <p className="text-sm text-[#494040] mb-5">Available from Fri, July 14</p>
        <button className="bg-[#A5775E] p-3 text-center text-white uppercase">Go to next available Date</button>
      </div>
    </div>
  );
}

export default DateTime;