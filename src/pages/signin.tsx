import Footer from '@/components/layout/Footer';
import Header2 from '@/components/layout/Header2';
import * as React from 'react';
import UnstyledLink from '@/components/links/UnstyledLink';

const signin = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header2 />
            <section className="mb-auto ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <img
                        className="object-fill w-32 h-32 rounded-2xl mt-5 mx-auto"
                        src="/images/image-4.png"
                        alt=""
                    />
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto bg-[#FFF2F7] px-28 py-10 md:max-w-2xl rounded-3xl">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <UnstyledLink href="/signup" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</UnstyledLink>
                      </div>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">Remember me</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                    <UnstyledLink href='/' className='text-white font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 rounded-full text-center ml-44'>
                    Log in
                    </UnstyledLink>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>

                <div className="text-gray-600 text-center mt-6">
                  Don’t you have an account? <UnstyledLink href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</UnstyledLink>
                </div>
              </div>

            </div>
          </div>
        </section>
            <Footer />
        </div>
    )
}

export default signin
