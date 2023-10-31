
import React from 'react';
import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
import { getServerSession } from 'next-auth/next';

import Link from 'next/link';

const Navbar = async () => {
    
    const session = await getServerSession(authOptions);
    console.log("jfidsfkb")
    // console.log(session.user);
    return (
        <>
        <header>
        <nav className=' px-10 p-3 bg-cream justify-between flex flex-row  gap-4 mx-auto'>
            

                <div className='justify-left text-3xl font-medium' >
                    SaasPDF
                </div>


                <div className='flex flex-row p-auto p-3 font-medium gap-5'>
                    <div><Link href='/'>Home</Link></div>
                    <div><Link href='/Addpdf'>Add PDF</Link></div> 
                    <div> <Link href='/protected/dashboard'>Dashboard</Link></div> 

                    <div>
                    {session && session.user?.email ? (
                     <>
                    <div className='flex  flex-row gap-5'>
                    <Link href='/auth/signout' className='hover:underline'>Sign out</Link>
                    <p>
                    <b>{session.user?.email}</b>
                    </p>
                    </div>
                    </>
                     ) : (
                    <>
                    <div className='flex flex-row'>
                    <Link href='/auth/signin' className='hover:underline'>Sign in</Link>
                    <Link href='/auth/signup' className='hover:underline'>Sign up</Link>
                    </div>
                    </>
                    )}
                    </div>
                </div>
             

            

            
        </nav>
        </header>
        </>
    );
};

export default Navbar;
