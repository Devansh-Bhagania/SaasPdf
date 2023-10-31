"use client";
import { set } from 'lodash';
import React,{useState} from 'react'
// import { authOptions } from '@/app/api//auth/[...nextauth]/route.js';
// import { getServerSession } from 'next-auth/next';
// import prisma from '@/app/lib/prisma';
import { addPdf } from '../actions/pdfadd/addpdf';
import { useRouter } from "next/navigation"

function page() {
    const router = useRouter();
    // const session = await getServerSession(authOptions);
    // console.log(session);
    // const email = session.user?.email;
    // const userpin = await prisma.user.findUnique({
    //     where: {
    //         email: email,
    //     },
    // })
    // const user = await prisma.pdf.findMany({
    //     where: {
    //         userid: userpin?.userid,
    //     },
    // });
    // console.log(user);
    // const pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    // console.log(pdf);
    // const pdfsave = await addPdf(pdf,email);
    // console.log(pdfsave);

    const [title, setTitle] = useState('');
    const [filePath, setFilePath] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {

            if(title == "" || filePath == ""){
                console.log("Form is not filled ");
            }
            else{
            setMessage("Adding PDF up in Database...");
            const message = await addPdf(title,filePath);
            // console.log(message);
            router.refresh();
            router.push("/protected/dashboard");
        }
       
       
    };
   
  return (
    <>
    {/* <div>Add pdf page Signed in as {session.user?.email}</div> */}
    {/* <p>{session.user?.name}</p> */}
    <div className='mx-auto bg-cream w-full flex flex-col gap-5 p-10'>
            <div className='mx-auto text-3xl font-medium'>
                Add Your Pdfs
            </div>
            {/* title of the pdf  */}
            <div className='max-w-[900px] flex-col flex mx-auto gap-5 p-10'>
            <label htmlFor="title">Title</label>
            <input type='text' className='shadow-xl outline-none rounded-lg  border-2 border-black p-3 text-2xl' value={title} onChange={(e) => setTitle(e.target.    value)} />
            {/* filepath of the pdf  */}
            <label htmlFor="title">FilePath</label>
            <input type='text' className='shadow-xl rounded-lg outline-none border-2 border-black p-3 text-2xl' value={filePath} onChange={(e) => setFilePath(e.target.value)} />
            <button className=" max-w-[280px] mx-auto shadow-xl px-5 text-2xl text-white bg-gradient-to-r from-sky-400 to-blue-500 font-medium py-2 rounded-full" onClick={handleSubmit}>Upload PDF</button>
          
            <p>{message}</p>
            </div>
    </div>
    
    
    
    </>
  )
}

export default page