"use client";
import { Button } from "@material-tailwind/react";

function ContactUs() {
  return (
    <div>
      <div className="relative bg-slate-100 mt-16 bg-white">
        <div className=" overflow-hidden mt-10 relative">
          {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
          <img src="/images/Home/img_contact.png" className="sm:w-full sm:h-[700px] h-[600px] object-left object-cover" alt="" />
          
          <div className="absolute sm:inset-0 sm:h-full sm:w-1/2 inset-x-0 bottom-0 w-full bg-gray-700/75 sm:place-self-end">
            <div className="sm:my-48 sm:mx-20">
              <p className="font-serif italic sm:text-6xl text-2xl uppercase sm:my-16 mt-8 px-4 text-wrap leading-tight" color="white">
                Oferecemos 15% de desconto
              </p>
              <p color="white" className="font-serif sm:text-4xl px-4 text-lg font-thin mt-1 w-full md:max-w-full lg:max-w-3xl uppercase">
                na sua primeira visita
              </p>
              <div className="mt-12 mb-5 text-center">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-[#A5775E]">FAZER MARCAÇÃO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
