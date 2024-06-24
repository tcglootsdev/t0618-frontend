"use client";
import { Button } from "@material-tailwind/react";

function ContactUs() {
  return (
    <div>
      <div className="relative bg-slate-100 mt-16 bg-white">
        <div className=" overflow-hidden mt-10 relative">
          {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
          <img src="/images/Home/img_contact.png" className="w-full h-[700px]" alt="" />
          
          <div className="absolute inset-0 h-full w-1/2 bg-gray-700/75 place-self-end">
            <div className="my-48 mx-20">
              <p className="font-serif italic text-6xl uppercase mb-16 mt-16 text-wrap leading-tight" color="white">
                Oferecemos 15% de desconto
              </p>
              <p color="white" className="font-serif text-4xl font-thin mt-8 w-full md:max-w-full lg:max-w-3xl uppercase">
                na sua primeira visita
              </p>
              <div className="mt-12 gap-8 flex mb-5">
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
