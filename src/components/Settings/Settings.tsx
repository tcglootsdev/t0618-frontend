"use client";
import React, { useState } from "react";
import moment from 'moment';

const Settings = () => {
  const [flag, setFlag] = useState(true);
  const [type, setType] = useState('edit');
  return (
    <section>
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 bg-[#F9F9F9] h-screen">
        <div className="sm:col-span-7 col-span-5 bg-white p-5 h-full">
          {type != 'edit' && 
          <div className="sm:flex grid grid-cols-2 justify-between mb-5">
            <div className="p-5 rounded-md bg-[#F9F9F9] sm:m-0 m-2">
              <img src="/images/Setting/VisaPay.png" />
            </div>
            <div className="p-5 rounded-md bg-[#F9F9F9] sm:m-0 m-2">
              <img src="/images/Setting/Mastercard.png" />
            </div>
            <div className="p-5 rounded-md bg-[#F9F9F9] sm:m-0 m-2">
              <img src="/images/Setting/GooglePay.png" />
            </div>
            <div className="p-5 rounded-md bg-[#F9F9F9] sm:m-0 m-2">
              <img src="/images/Setting/ApplePay.png" />
            </div>
            <div className="p-5 rounded-md bg-[#F9F9F9] sm:m-0 m-2">
              <img src="/images/Setting/MBPay.png" />
            </div>
          </div>
          }
          <div className="sm:flex justify-between gap-5">
            <input disabled={flag} autoFocus placeholder="Sarah" className="p-4 w-full sm:mb-0 mb-5 text-lg bg-[#F9F9F9] text-black rounded-md"/>
            <input disabled={flag} placeholder="Smith" className="p-4 w-full text-lg bg-[#F9F9F9] text-black rounded-md"/>
          </div>1
          <div className="sm:flex justify-between sm:mb-5 mb-5 gap-5">
            <input disabled={flag} type="email" placeholder="Sarah@gmail.com" className="p-4 w-full sm:mb-0 mb-5 text-lg bg-[#F9F9F9] text-black rounded-md"/>
            <input disabled={flag} placeholder="Smith" className="p-4 text-lg bg-[#F9F9F9] w-full text-black rounded-sm"/>
          </div>
          <div className="sm:flex justify-between sm:mb-5 gap-5">
            <input disabled={flag} type="password" placeholder="password" className="p-4 w-full mb-5 text-lg bg-[#F9F9F9] text-black rounded-md"/>
            <input type="password" className="p-4 w-full text-lg bg-white text-black rounded-md" disabled/>
          </div>
        </div>

        <div className="col-span-5 rounded-sm bg-white sm:h-dvh p-5">
          <div className="grid rounded-md bg-[#F9F9F9] border content-between h-full">
            <div>
              <div className="rounded-md bg-white p-7 m-5">
                <div className="flex justify-between mb-5">
                  <div className="flex gap-5">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                      <input
                        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..." />
                    </div>
                    <p className="text-black uppercase text-base">Default method</p>
                  </div>
                  <div className="bg-white hover:cursor-pointer">
                    <svg className="w-[24px] h-[24px] fill-[#8e8e8e]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-black text-lg mb-1"> ••• ••• ••• 2978</p>
                <p className="text-black text-lg mb-1">{moment(Date.now()).format("MM/DD")}</p>
                <div className="flex justify-between">
                  <p className="uppercase text-black text-lg">Sarah smith</p>
                  <div className="flex gap-2">
                    <p className="text-black text-lg uppercase">Master card</p>
                    <div className="flex items-center gap-x-2">
                      <svg className="size-7" width="400" height="248" viewBox="0 0 400 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00"/>
                          <path d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z" fill="#EB001B"/>
                          <path d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z" fill="#F79E1B"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="400" height="247.2" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {type != 'edit' && 
              <div className="text-end mx-5">
                <p className="text-[#0000FF] hover:cursor-pointer">Add new payment method</p>
              </div>}
            </div>
            {type == 'edit' ? 
              <div className="flex gap-5 m-5">
                <button className="w-full bg-black border-black text-white rounded-md text-base p-2 hover:bg-primary hover:border" onClick={()=>{setType('add');setFlag(false);}}>Edit Settings</button>
              </div> :
              <div className="flex gap-5 m-5">
                <button className="w-full border border-black text-black rounded-md text-base p-2 hover:bg-primary hover:text-white" onClick={()=>{setType('edit');setFlag(true);}}>Cancel</button>
                <button className="w-full bg-black border-black text-white rounded-md text-base p-2 hover:bg-primary hover:border">Add payment method</button>
              </div>
            }
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Settings;
