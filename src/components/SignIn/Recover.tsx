"use client";
import React from "react";

const Recover = () => {
  return (
    <section>
      <div className="grid grid-cols-5 bg-[#F9F9F9]">
        <div className="col-span-2">
          <div className="px-8 py-12 sm:px-8 sm:py-10">
            <div className="mt-8">
              <h1 className="text-4xl font-bold text-black">Password Recovery</h1>
            </div>
            <div className="mt-24">
              <form>
                <div>
                  <div className="relative">
                    <input type="password" id="password" name="password" placeholder="New password" className="w-full sm:border-black rounded-md text-lg text-black sm:p-3 sm:mb-4 focus:border-blue-500 focus:ring-blue-500 bg-[#E0E0E0]" required aria-describedby="password-error" />
                    <button type="button" data-hs-toggle-password='{
                        "target": "#hs-toggle-password"
                      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
                      <svg className="flex-shrink-0 size-4.5 text-gray-400 text-[#2F80ED]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                        <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>

                <div className="mt-8">
                  <div className="relative">
                    <input type="password" id="password" name="password" placeholder="New password" className="w-full sm:border-black rounded-md text-lg text-black sm:p-3 sm:mb-4 focus:border-blue-500 focus:ring-blue-500 bg-[#E0E0E0]" required aria-describedby="password-error" />
                    <button type="button" data-hs-toggle-password='{
                        "target": "#hs-toggle-password"
                      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
                      <svg className="flex-shrink-0 size-4.5 text-gray-400 text-[#2F80ED]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                        <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                
                <div className="grid gap-y-4 mt-8">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-700">Submit</button>
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

export default Recover;
