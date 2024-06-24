"use client";

import Card from "./Card/Card";
import { useRouter } from "next/navigation";

const cards_data = [
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  },
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  },
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  },
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  },
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  },
  {
    title: "Trim",
    time: "30m",
    price: 40,
    description: "Help avoid split ends and improve your overall hair health with regular trims. If you're not ready for a full haircut, a trim is a quick and inexpensive way to maintain your original style.",
    type: "add",
  }
];

const Service = () => {
  const router = useRouter();
  return (
    <div className="p-5 bg-white h-screen overflow-auto">
      <div className="mb-5">
        <p className="text-black text-xl">Recommended</p>
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-1">
        <div className="col-span-3">
          {cards_data.map((card,idx)=> {
            return <Card key={idx} info={card} />
          })}
        </div>
        <div className="grid col-span-2 bg-[#F9F9F9] content-between rounded-lg p-5 mx-5 sm:h-screen">
          <div>
            <div className="flex gap-5 mb-12">
              <div>
                <img src="/images/Home/img_type1.png" width="60px" height="60px" className="rounded-lg"/>
              </div>
              <div className="text-start">
                <p className="text-bold text-lg text-black">Studio 27 Salon</p>
                <p className="text-lg text-[#828282]">142 Union Street, Everett</p>
              </div>
            </div>
            <div className="grid divide-y-2">
              <div className="mb-5">
                <p className="text-lg text-[#828282]">Services not selected</p>
              </div>
              <div className="pt-8">
                <p className="font-black text-lg text-black">Total:</p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#CDCDCD] text-lg rounded-md p-3 w-full border border-black hover:bg-[#2F80ED]" onClick={()=>router.push('/ordering/Confirm')}>Continue</button>
          </div>      
        </div>
      </div>
      
    </div>
  );
}

export default Service;