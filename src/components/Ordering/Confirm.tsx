'use client';
import { useRouter } from "next/navigation";

const Confirm = () => {
  const router = useRouter();
  return (
    <div className="bg-white h-screen sm:py-10 py-32">
      <div className="sm:flex gap-5 sm:justify-center text-center">
        <p className="uppercase text-3xl font-serif text-[#494040]">Appointment</p>
        <p className="uppercase text-3xl font-serif text-[#494040]">Confirmed</p>
      </div>
      <div className="bg-[#FAF3F2] rounded-full w-[300px] h-[300px] content-center mx-auto my-10">
        <img src="/images/Setting/Group.png" className="mx-auto w-[180px] h-[180px]"/>
      </div>
      <div className="bg-white mx-[35%] text-center content-center sm:block hidden">
        <p className="text-wrap text-base text-black">It is confirmed that you have an appointment with &quot;Paraíso das Princesas&quot; salon at 2:00 pm on July 14th, 2024. You will receive a reminder via email 24 hours before to your scheduled appointment.</p>
      </div>
      <div className="flex gap-5 justify-center mt-5">
        <button className="uppercase bg-[#FAF3F2] py-2 px-7 text-md text-black" onClick={()=>router.push('/ordering/Service')}>Dismiss</button>
        <button className="uppercase bg-[#A5775E] py-2 px-7 text-md text-white" onClick={()=>router.push('/ordering/Date')}>View Calendar</button>
      </div>
    </div>
  );
}

export default Confirm;