import Footer from '@/components/layout/Footer';
import * as React from 'react';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from 'next/image';
import Header2 from '@/components/layout/Header2';

const signup = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header2 />
            <section className="mb-auto ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12  md:pt-40 md:pb-20 flex items-center">

                {/* Left side */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h1 className="h1">Get started with two easy steps.</h1>
                    <img
                        className="object-cover w-full h-56 sm:h-96 rounded-2xl mt-5"
                        src="/images/Caregiver illustration.png"
                        alt=""
                    />
                </div>

                {/* Right side */}
                <div>
                <div className="text-gray-600 text-center m-2">
                    Already have an account? <UnstyledLink href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</UnstyledLink>
                    </div>
                <div className="bg-[#FFF5F2] p-16 rounded-3xl">
                <img
                        className="object-fill h-26 mx-auto"
                        src="/images/Progress Meter-2.png"
                        alt=""
                    />
                <h3 className="pb-4">Children Information</h3>

                {/* Form */}
                <div className="max-w-sm mx-auto grid grid-cols-2 gap-8">
                    <div>
                    <form>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="age-groups">Age Groups <span className="text-red-600">*</span></label>
                        <select className="rounded-md w-44">
                            <option>0-3 Years Old</option>
                            <option>4-7 Years Old</option>
                            <option>8-12 Years Old</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="dietary-restrictions">Dietary Restrictions <span className="text-red-600">*</span></label>
                        <input id="name" type="text" className="form-input w-full text-gray-800 rounded-md" placeholder="" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="allergies">Allergies <span className="text-red-600">*</span></label>
                        <input id="email" type="email" className="form-input w-full text-gray-800 rounded-md" placeholder="" required />
                        </div>
                    </div>
                    </form>
                    </div>



                    <form>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="medical-conditions">Medical Conditions <span className="text-red-600">*</span></label>
                        <input id="name" type="text" className="form-input w-full text-gray-800 rounded-md" placeholder="" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="medication">Medication <span className="text-red-600">*</span></label>
                        <input id="name" type="text" className="form-input w-full text-gray-800 rounded-md" placeholder="" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="Disabilities">Disabilities <span className="text-red-600">*</span></label>
                        <input id="name" type="text" className="form-input w-full text-gray-800 rounded-md" placeholder="" required />
                        </div>
                    </div>
                    </form>
    
                    <UnstyledLink href='/signin' className='font-bold hover:bg-gray-200 border-solid border-2 border-indigo-800 px-5 py-2 rounded-full text-center'>
                    Back
                    </UnstyledLink>
                    <UnstyledLink href='/signup/2' className='text-white font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 rounded-full text-center'>
                    Finish
                    </UnstyledLink>
     
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
                <Footer />
        </div>
    )
}

export default signup
