import * as React from 'react';
import Image from 'next/image'

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'PHILOSOPHY' },
  { href: '/', label: 'CAREGIVERS' },
  { href: '/', label: 'SERVICES' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white py-2'>
      <div className='flex items-center justify-between h-14 layout'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <div className="relative w-16 h-16">
          <Image src='/images/Logo Variations_Logo.png' alt=''  layout='fill' /> 
          </div>
        </UnstyledLink>
        <nav>
          <ul className='font-semibold flex items-center justify-between space-x-20'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <div className="space-x-3">
          <UnstyledLink href='/' className='font-bold hover:bg-gray-200 border-solid border-2 border-indigo-800 px-5 py-2 rounded-full'>
          Sign in
        </UnstyledLink>
          <UnstyledLink href='/' className='text-white font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 rounded-full'>
          Sign up
        </UnstyledLink>
        </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
