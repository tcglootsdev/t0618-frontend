"use client";
import React, { useState } from "react";
import moment from 'moment';

const Card = (props) => {
  const { title, time, price, description, type } = props.info;
  
  return (
    <section>
      <div className="bg-[#F9F9F9] rounded-md p-5 mb-5">
        <div className="flex justify-between mb-5">
          <div className="flex gap-5 items-center">
            <p className="text-bold text-lg text-black">{title}</p>
            <p className="text-[#828282] text-base">{time}</p>
          </div>
          <div>
            <p className="text-bold text-lg text-black tracking-wide">$ {price}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-4/5">
            <p className="text-[#828282] text-base text-wrap">{description}</p>
          </div>
          {type == 'add' ?
          <div className="bg-[#2F80ED] rounded-sm w-[20px] h-[20px] hover:cursor-pointer">
            <svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </div> :
          <div className="bg-[#BDBDBD] rounded-sm w-[20px] h-[20px] hover:cursor-pointer">
            <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
            </svg> 
          </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Card;
