import * as React from 'react';
import Footer from '@/components/layout/Footer';
import Header2 from '@/components/layout/Header2';
import Card from '@/components/Card';

const caregivers = () => {
    return (
        <div className="h-screen flex flex-col">
        <Header2 />
        <div className="flex max-w-7xl mx-auto mb-auto">
        <div className="flex flex-col w-1/5 border-2 border-[#6369D2] rounded-2xl items-center">
        <div className="justify-center">
            <h4 className="mt-4">Experience</h4>
        <select className="rounded-3xl w-44 mt-4 ">
            <option>0-3 Years</option>
            <option>4-7 Years</option>
            <option>8-10 Years</option>
            <option>Any Experience</option>
          </select>
        </div>
        <div className="justify-center">
            <h4 className="mt-4">Availability</h4>
        <select className="rounded-3xl w-44 mt-4 ">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
            <option>Anytime</option>
          </select>
        </div>
        <div className="justify-center">
            <h4 className="mt-4">Age Groups</h4>
        <select className="rounded-3xl w-44 mt-4 ">
            <option>0-3 Years Old</option>
            <option>4-7 Years Old</option>
            <option>8-12 Years Old</option>
          </select>
        </div>
        <div className="justify-center">
            <h4 className="mt-4">Distance</h4>
        <select className="rounded-3xl w-44 mt-4 ">
            <option>10 miles</option>
            <option>25 miles</option>
            <option>50 miles</option>
            <option>100 miles</option>
            <option>Anywhere</option>
          </select>
        </div>
        <button className="text-white font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 rounded-full text-center mx-auto my-7 mb-3">Book Now</button>
        </div>
        <section className="mb-auto grid grid-cols-3 w-4/5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </section>
        </div>
        <Footer />
        </div>
    )
}

export default caregivers