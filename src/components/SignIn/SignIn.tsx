"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  return (
    <section>
      <div className="grid lg:grid-cols-5 sm:grid-cols-1 bg-[#F9F9F9]">
        <div className="sm:col-span-2 col-span-3">
          <div className="px-8 py-12 sm:px-8 sm:py-8">
            <div className="mt-8">
              <h1 className="text-4xl font-bold text-black">Sign In</h1>
            </div>

            <div className="mt-12">
              <form>
                <div>
                  <div className="relative">
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full rounded-md text-lg text-black mb-4 sm:p-3 p-1 sm:mb-5 focus:border-none bg-[#E0E0E0]" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                <div>
                  <div className="relative">
                    <input type="password" id="password" placeholder="Password" name="password" className="w-full border-gray-200 rounded-md text-lg text-black sm:p-3 p-1 focus:border-blue-500 focus:ring-blue-500 bg-[#E0E0E0]" required aria-describedby="password-error" />
                    <button type="button" data-hs-toggle-password='{
                        "target": "#hs-toggle-password"
                      }' className="absolute top-0 end-0 p-1.5 sm:p-4 rounded-e-md">
                      <svg className="flex-shrink-0 size-4.5 text-gray-400 text-[#2F80ED] w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <div className="flex justify-end items-center mt-2 mb-12 hover:cursor-pointer" onClick={()=>router.push('/signin/forgot')}>
                  <p className="text-base text-blue-600 decoration-2 hover:underline font-medium">Forgot password?</p>
                </div>
                <div className="grid gap-y-4">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-700" onClick={()=>router.push('/Home')}>Sign in</button>
                </div>
              </form>
            </div>

            <div className="py-3 flex items-center text-xs text-gray-400 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 mt-4 mb-8">Or login with</div>

            <div className="mt-5 flex gap-8">
              
              <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xs sm:text-base font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                  <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                  <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                  <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
                </svg>
                Google Account
              </button>
              <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xs sm:text-base font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                <svg className="w-[20px] h-[20px] fill-[#33FF00]" viewBox="0 0 318 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                Apple Account
              </button>
            </div>
            <div className="text-center mt-24">
              <p className="mt-2 text-base sm:text-lg text-black dark:text-neutral-400">
                Don&apos;t have a user account yet?{' '}
                <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 hover:cursor-pointer" onClick={() => router.push('/signup')}>
                  Register
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

export default SignIn;
