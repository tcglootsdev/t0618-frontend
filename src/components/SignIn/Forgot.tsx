"use client";
import React from "react";

const Forgot = () => {
  return (
    <section>
      <div className="grid grid-cols-5 bg-[#F9F9F9]">
        <div className="col-span-2">
          <div className="px-8 py-12 sm:px-8 sm:py-10">
            <div className="mt-8">
              <h1 className="text-4xl font-bold text-black">Forgot password?</h1>
            </div>
            <div className="mt-12">
              <p className="text-[#828282] text-lg">Enter your user account's verified email address and we will send you a password reset link.</p>
            </div>
            <div className="mt-24">
              <form>
                <div>
                  <div className="relative">
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full sm:border-black rounded-md text-lg text-black sm:p-3 sm:mb-4 focus:border-blue-500 focus:ring-blue-500 bg-[#E0E0E0]" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                
                <div className="grid gap-y-4 mt-8">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-700">Recovery</button>
                </div>
              </form>
            </div>

            <div className="text-center mt-40">
              <p className="mt-2 text-lg text-black dark:text-neutral-400">
                Back to{' '}
                <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <img
            alt=""
            src="/images/login.png"
            className="object-cover w-full h-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Forgot;
