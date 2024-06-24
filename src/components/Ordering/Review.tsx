"use client";
import React from "react";
import moment from "moment";

const Review = () => {

  return (
    <section>
      <div className="bg-white p-5 h-screen overflow-auto">
        <div className="flex gap-3 mb-5 px-3">
          <p className="uppercase text-[#494040] text-3xl font-serif">Review and</p>
          <p className="uppercase text-[#494040] text-3xl font-serif italic">Confirm</p>
        </div>
        <div className="px-3">
          <p className="uppercase text-[#494040] text-xl font-serif">Billing info</p>
        </div>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3 p-3">
            <div className="grid grid-cols-2 gap-5 mt-3">
              <input type="text" placeholder="Add first name" name="firstname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Add last name" name="lastname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Your email" name="firstname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Your phone number" name="lastname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
            </div>
            <div className="mt-2">
              <p className="uppercase text-[#494040] text-xl font-serif">Payment method</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <input type="text" placeholder="Add first name" name="firstname" className="col-span-2 p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Add last name" name="lastname" className="col-span-2 p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Your email" name="firstname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
              <input type="text" placeholder="Your phone number" name="lastname" className="p-2 text-[#84635C] w-full border bg-white border-[#84635C]"/>
            </div>
            <div className="flex gap-3 items-center mt-3 mb-8">
              <p className="text-[#494040] font-base">Pay security with</p>
              <div className="flex gap-2">
                <img src="/images/Setting/VisaPay.png"/>
                <img src="/images/Setting/Mastercard.png" />
                <img src="/images/Setting/GooglePay.png" />
                <img src="/images/Setting/ApplePay.png" />
                <img src="/images/Setting/MBPay.png" />
              </div>
            </div>
            <div>
              <p className="uppercase text-[#494040] text-xl font-serif">Deposit policy</p>
              <p className="text-[#494040] text-sm font-serif mt-2 mb-3">Paraíso das Princesas Salon requires $140 deposit to be paid upfront.</p>
              <p className="text-[#494040] text-sm font-serif">Additional terms and conditions</p>
              <p className="text-[#494040] text-md font-serif mb-3 uppercase text-wrap">DEPOSITS ARE ONLY REFUNDABLE WHEN AN APPOINTMENT IS CANCELLED MORE THAN 24 HOURS IN ADVANCE</p>
              <div className="relative">
                <input
                  className="me-2 mt-[0.3rem] h-3.5 w-8 border border-[#A5775E] appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-[transparent] before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-[#A5775E] after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#A5775E] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#A5775E] checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-[#A5775E] dark:checked:after:bg-[#A5775E]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault" />
                <label
                  className="inline-block ps-[0.15rem] hover:cursor-pointer text-black"
                  // for="flexSwitchCheckDefault"
                >
                  Default switch checkbox input
                </label>
              </div>
              <p className="text-lg font-bold text-[#494040] mt-1">Booking notes</p>
              <textarea
                className="peer block min-h-[auto] w-full rounded border text-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-1"
                id="exampleFormControlTextarea1"
                rows={4}
                placeholder="Include comments or requests about your booking"/>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex gap-5">
              <div>
                <img src="images/Setting/Rectangle 1.png"/>
              </div>
              <div>
                <p className="uppercase text-[#494040] text-lg">Paraíso Das Princesas</p>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-0.5 text-green-500 justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="#84635C"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="h-5 w-5"
                      fill="#84635C"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="h-5 w-5"
                      fill="#84635C"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="h-5 w-5"
                      fill="#84635C"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="h-5 w-5"
                      fill="#84635C"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#494040] text-base">5.0</p>
                </div>
                <p className="text-[#494040] text-sm font-serif mt-1">R. Aquiles Machado 5 i, 1900-077 Lisboa</p>
              </div>
            </div>
            
            <div className="grid divide-y-2 divide-[#A5775E] gap-2 mt-4">
              <div>
                <div className="flex gap-2">
                  <svg className="w-[16px] h-[16px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                  </svg>
                  <p className="text-black text-sm">{moment(Date.now()).format("MM/DD/YYYY")}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <svg className="w-[16px] h-[16px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                  </svg>
                  <p className="text-black text-sm">9.00 am</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between my-2">
                  <p className="text-black uppercase text-lg">Shampoo / Blow Dry / Relaxed</p>
                  <p className="text-black">$100</p>
                </div>
                <p className="text-black">1h 30m</p>
              </div>
              <div>
                <div className="flex justify-between my-2">
                  <p className="text-black uppercase text-lg">Color / Demi Permanent</p>
                  <p className="text-black">$75</p>
                </div>
                <p className="text-black">1h</p>
              </div>
              <div>
                <div className="flex justify-between my-2">
                  <p className="text-black uppercase text-lg font-bold">Total</p>
                  <p className="text-black uppercase font-bold">$175</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="text-black uppercase">Pay now</p>
                  <p className="text-black uppercase">$120</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="text-black uppercase font-medium">Pay at venue</p>
                  <p className="text-black uppercase">$55</p>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full p-2 bg-[#A5775E] text-white rounded-sm mt-8">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
