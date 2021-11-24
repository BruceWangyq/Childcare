import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

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
                  'background-image':
                  'url(/images/hero-bg.jpg)',
                }}>
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2" >
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ">
            Childcare that works for 

              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400 text-[#FF70A7] ">
                you 
              </span>
              {' '}and {' '}
              <span className="inline-block text-deep-purple-accent-400 text-[#FFD456]">
                your family
              </span>
            </h2>
            <p className="text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 w-28 rounded-full'>
          Sign up
        </UnstyledLink>
        </div>
      </div>
    </div>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#FFD456] rounded-2xl my-8">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Our care provides
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div className="flex-1 gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 border-deep-purple-accent-400 shadow-sm hover:scale-105 group hover:shadow-xl duration-300">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab facilis vero distinctio ut totam voluptates quo alias dolore molestiae?
                </h6>
              </div>
            </div>
            <div className="bg-white border-l-4 border-deep-purple-accent-400 shadow-sm hover:scale-105 group hover:shadow-xl duration-300">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aut!
                </h6>
              </div>
            </div>
            <div className="bg-white border-l-4 border-deep-purple-accent-400 shadow-sm hover:scale-105 group hover:shadow-xl duration-300">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur eveniet omnis quas illum sint.
                </h6>
              </div>
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
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <svg
                  className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Parent Benefits
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  Cheese on toast airedale the big cheese. Danish fontina cheesy
                  grin airedale danish fontina taleggio the big cheese macaroni
                  cheese port-salut.
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
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
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <svg
                  className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Child Benefits
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear. I didn't even know we were calling
                  him Big Bear. We never had the chance to.
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
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
