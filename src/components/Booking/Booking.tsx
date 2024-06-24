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
            <div className="sm:flex justify-between w-full">
              <div className="flex sm:gap-3 gap-5 items-center">
                <img src="/images/Home/img_type1.png" className="rounded-md aspect-square w-[60px] h-[60px]" onClick={()=>changeView}/>
                <div className="text-start">
                  <p className="text-lg font-bold text-black mb-1">Studio 27 Salon</p>
                  <p className="text-sm text-[#828282] mt-1">142 Union Street, Everett</p>
                </div>
              </div>
              <div className="sm:text-end">
                <div className="sm:flex gap-5">
                  <div className="flex gap-5 items-end sm:mt-1 mt-2">
                    <p className="text-sm text-[#828282]">Coming in 2 days</p>
                    <p className="text-sm text-[#828282]">12 April 2024 | 9:00am</p>
                  </div>
                  <div className="flex justify-between sm:mt-1 mt-2 sm:inline">
                    <p className="text-lg font-bold text-black">$160</p>
                    <p className="text-sm text-[#2F80ED]">2 services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <div className="sm:flex justify-between w-full">
              <div className="flex sm:gap-3 gap-5 items-center">
                <img src="/images/Home/img_type1.png" className="rounded-md aspect-square w-[60px] h-[60px]"/>
                <div className="text-start">
                  <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                  <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
                </div>
              </div>
              <div className="sm:text-end">
                <div className="sm:flex gap-5">
                  <div className="flex gap-5 items-end sm:mt-1 mt-2">
                    <p className="text-sm text-[#27AE60]">Successfully</p>
                    <p className="text-sm text-[#828282]">12 April 2024 | 9:00am</p>
                  </div>
                  <div className="flex justify-between sm:mt-1 mt-2 sm:inline">
                    <p className="text-lg font-bold text-black">$80</p>
                    <p className="text-sm text-[#2F80ED]">1 service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <div className="sm:flex justify-between w-full">
              <div className="flex sm:gap-3 gap-5 items-center">
                <img src="/images/Home/img_type1.png" className="rounded-md aspect-square w-[60px] h-[60px]"/>
                <div className="text-start">
                  <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                  <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
                </div>
              </div>
              <div className="sm:text-end">
                <div className="sm:flex gap-5">
                  <div className="flex gap-5 items-end sm:mt-1 mt-2">
                    <p className="text-sm text-[#EB5757]">Canceled</p>
                    <p className="text-sm text-[#828282]">6 March 2024 | 9:00am</p>
                  </div>
                  <div className="flex justify-between sm:mt-1 mt-2 sm:inline">
                    <p className="text-lg font-bold text-black">$80</p>
                    <p className="text-sm text-[#2F80ED]">1 service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] p-4 rounded-sm gap-4 mb-3">
            <div className="sm:flex justify-between w-full">
              <div className="flex sm:gap-3 gap-5 items-center">
                <img src="/images/Home/img_type1.png" className="rounded-md aspect-square w-[60px] h-[60px]"/>
                <div className="text-start">
                  <p className="text-lg font-bold text-black">Studio 27 Salon</p>
                  <p className="text-sm text-[#828282]">142 Union Street, Everett</p>
                </div>
              </div>
              <div className="sm:text-end">
                <div className="sm:flex gap-5">
                  <div className="flex gap-5 items-end sm:mt-1 mt-2">
                    <p className="text-sm text-[#27AE60]">Successfully</p>
                    <p className="text-sm text-[#828282]">12 April 2024 | 9:00am</p>
                  </div>
                  <div className="flex justify-between sm:mt-1 mt-2 sm:inline">
                    <p className="text-lg font-bold text-black">$80</p>
                    <p className="text-sm text-[#2F80ED]">1 service</p>
                  </div>
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
