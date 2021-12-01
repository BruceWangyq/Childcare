import * as React from 'react';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from 'next/image';

const Header2 = () => {
    return (
        <div>
            <header className='sticky top-0 z-50 bg-white py-2'>
                <div className='flex items-center justify-between h-14 layout'>
                    <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
                        <div className="relative w-36 h-12">
                            <Image src='/images/Logo Variations_Horizontal.png' alt=''  layout='fill' /> 
                        </div>
                    </UnstyledLink>
                </div>
             </header>
        </div>
    )
}

export default Header2
