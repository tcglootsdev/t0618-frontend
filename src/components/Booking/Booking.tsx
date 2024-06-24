"use client";
import React, { useState } from "react";

const Booking = () => {
  const [flag, setFlag] = useState('none');

  const changeView = () => {
    if(flag == 'none') setFlag('block');
    setFlag('none');
  }
  return (
    <section>
      <div className="bg-white py-8 px-12 overflow-auto h-screen">
        <div className="mt-2 mb-8">
          <p className="text-2xl text-black text-sans">
            Booking History
          </p>
        </div>
        <div>
          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3 relative">
            <img src="/images/Home/img_type1.png" className="rounded-md" width="60px" height="60px" onClick={()=>changeView}/>
            <div className="absolute" style={{display: `${flag}`}}>
              <p className="text-base text-black">Reschedule</p>
              <p className="text-red text-base">Cancel</p>
            </div>
            <div className="flex justify-between w-full">
              <div className="text-start">
                <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
              </div>
              <div className="text-end">
                <p className="text-lg font-bold text-black">$160</p>
                <div className="flex gap-3">
                  <p className="text-sm text-[#828282]">Coming in 2 days</p>
                  <p className="text-sm text-[#828282]">12 April 2024 | 9:00am</p>
                  <p className="text-sm text-[#2F80ED]">2 services</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <img src="/images/Home/img_type1.png" className="rounded-md" width="60px" height="60px"/>
            <div className="flex justify-between w-full">
              <div className="text-start">
                <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
              </div>
              <div className="text-end">
                <p className="text-lg font-bold text-black">$80</p>
                <div className="flex gap-3">
                  <p className="text-sm text-[#27AE60]">Successfully</p>
                  <p className="text-sm text-[#828282]">12 April 2024 | 9:00am</p>
                  <p className="text-sm text-[#2F80ED]">1 service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <img src="/images/Home/img_type1.png" className="rounded-md" width="60px" height="60px"/>
            <div className="flex justify-between w-full">
              <div className="text-start">
                <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
              </div>
              <div className="text-end">
                <p className="text-lg font-bold text-black">$80</p>
                <div className="flex gap-3">
                  <p className="text-sm text-[#EB5757]">Canceled</p>
                  <p className="text-sm text-[#828282]">6 March 2024 | 9:00am</p>
                  <p className="text-sm text-[#2F80ED]">1 service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <img src="/images/Home/img_type1.png" className="rounded-md" width="60px" height="60px"/>
            <div className="flex justify-between w-full">
              <div className="text-start">
                <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
              </div>
              <div className="text-end">
                <p className="text-lg font-bold text-black">$120</p>
                <div className="flex gap-3">
                  <p className="text-sm text-[#27AE60]">Successfully</p>
                  <p className="text-sm text-[#828282]">12 February 2024 | 10:00am</p>
                  <p className="text-sm text-[#2F80ED]">1 service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
