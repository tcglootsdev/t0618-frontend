"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative sm:min-h-screen w-[412px] bg-[url('/images/Home/img_main.png')] bg-center place-items-center bg-no-repeat sm:bg-cover sm:w-screen">
    {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
    <div className="grid min-h-screen sm:px-8 px-2">
      <div className="container relative z-10 sm:mt-64 mt-80 grid place-content-start sm:ms-20 ms-1">
        <p className="font-serif italic text-3xl sm:text-6xl uppercase" color="white">
          Cabelo Sedoso
        </p>
        <p color="white" className="font-serif text-xl sm:text-3xl font-thin mt-4 w-full md:max-w-full lg:max-w-3xl">
          Não acontece por acaso
        </p>
        <p color="white" className="font-serif text-xl sm:text-3xl font-thin mb-12 w-full md:max-w-full lg:max-w-3xl">
          Acontece por marcação
        </p>
        <div className="gap-8 flex mb-5">
          <button type="button" className="py-3 px-4 sm:w-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-[#A5775E]">FAZER MARCAÇÃO</button>
        </div>
        <div className="gap-4 flex mt-16 divide-x divide-dashed">
          <div className="flex-shrink-0 group block">
            <div className="sm:flex items-center">
              <img className="inline-block justify-center size-[28px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
              <div className="ms-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">Address:</h3>
                <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">Rua Aquiles Machados</p>
              </div>
            </div>
          </div>
          <div className="ps-4 flex-shrink-0 group sm:block hidden">
            <div className="flex items-center">
              <img className="inline-block size-[28px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
              <div className="ms-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">Address:</h3>
                <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">Rua Aquiles Machados</p>
              </div>
            </div>
          </div>
          <div className="ps-4 flex-shrink-0 group sm:block hidden">
            <div className="flex items-center">
              <img className="inline-block size-[28px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
              <div className="ms-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">Address:</h3>
                <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">Rua Aquiles Machados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
