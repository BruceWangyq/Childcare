import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import { BsCheck } from 'react-icons/bs';


// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

   

      <main>
        <section className='bg-white'>
          <div className='flex flex-col items-center pt-2 min-h-screen text-black layout'>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-cover text-white rounded-2xl" style={{
                  backgroundImage:"url(/images/hero-bg.jpg)"
                }}>
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2 ml-8" >
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h3 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ">
                Childcare that works for you and your family
                </h3>
                <p className="text-base md:text-lg">
                Break free from traditional daycare. No waitinglists, no month long contracts. Childcare, when you need it.
                </p>
              </div>
              <UnstyledLink href='/' className='font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-6 py-2 w-28 rounded-full'>
              Sign up
            </UnstyledLink>
            </div>
          </div>
        </div>



      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 bg-[#FFFCF2] rounded-2xl my-8">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none ml-6">
              Our Care Providers
            </h2>
            <div className="pt-8">
            <p className="text-base text-gray-700 md:text-lg flex py-4">
            <BsCheck className="mx-4 mt-1"/>Passionate about Early Childhood Education
            </p>
            <p className="text-base text-gray-700 md:text-lg flex py-4">
            <BsCheck className="mx-4 mt-1"/>Registered with the College of Early Childhood Educators of Ontario
            </p>
            <p className="text-base text-gray-700 md:text-lg flex py-4">
            <BsCheck className="mx-4 mt-1"/>Clear Criminal Background Check, conducted twice annually
            </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 shadow-lg sm:h-96 rounded-2xl mt-5"
            src="/images/image-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-32 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <h2 className="mb-2 font-semibold leading-5 py-4">
                  Parent Benefits
                </h2>
                <p className="mb-2 text-md text-gray-900 bg-[#FFFCF2] my-4">
                - Flexible childcare that fits your work schedule
                </p>
                <p className="mb-2 text-md text-gray-900 bg-[#FFFCF2] my-4">
                - Select best childcare provider for your child
                </p>
                <p className="mb-2 text-md text-gray-900 bg-[#FFFCF2] my-4">
                - No need to pay for extra hours you don't need
                </p>
            </div>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <h2 className="mb-2 font-semibold leading-5 py-4">
                Child Benefits
                </h2>
                <p className="mb-2 text-md text-gray-900 bg-[#E9F5F4] my-4">
                - Get high-quality childcare
                </p>
                <p className="mb-2 text-md text-gray-900 bg-[#E9F5F4] my-4">
                - Easy access to early education and programming
                </p>
                <p className="mb-2 text-md text-gray-900 bg-[#E9F5F4] my-4">
                - Get all of their personal needs covered
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container px-5 py-12 mx-auto bg-[#FFF2F7] rounded-2xl">
            <h2 className="px-10 pb-4">Testimonials</h2>
        <div className="w-full mx-auto xl:w-1/2 lg:w-3/4 bg-white px-20 py-4 relative rounded-2xl">
        <img
            className="object-cover w-20 h-20 shadow-lg rounded-full absolute float-left z-10 -inset-x-12 inset-y-8"
            src="/images/avatar-1.jpg"
            alt=""
          />
            <p className="text-lg leading-relaxed">Unlike the traditional daycare service, Childcare Connect provides the most flexible schedule and high-quality service. I strongly recommended!</p>
        </div>
    </div>

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

          </div>
        </section>
      </main>
    </Layout>
  );
}
