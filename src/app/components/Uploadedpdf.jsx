"use client"
import React, { useEffect , useState } from 'react'
import axios from 'axios';
// import { fetchpdf } from '../actions/Fetchpdf/fetchpdf'
import deletepdf from '../actions/Deletepdf/deletepdf'
import { useRouter } from 'next/navigation'
import payforpdf from '../actions/payforpdf/payforpdf';

const Uploadedpdf = ()=> {
    const router = useRouter();
    const [response, setResponse] = useState([]);
    const [paidpdf, setPaidpdf] = useState([]);
    
        
         async  function fetchbutton(){
            const pdfdata = await  axios.get('/api/fetchpdf');
            const paidpdfdata = await axios.get('/api/fetchpaidpdf');
           
            setPaidpdf(paidpdfdata.data.message);
            console.log("all Paid pdfs are here below");
            console.log(paidpdfdata.data.message);
            setResponse(pdfdata.data.message);
            console.log("all pdfs are here below");
              console.log(pdfdata.data.message);
          }


        useEffect(() => {
            fetchbutton();
        },[]);

    async function pushdata(id){
        const reply = await deletepdf(id);
        console.log(reply);
    }

    async function Payforpdf(id){
        const reply = await payforpdf(id);
        router.refresh();
        console.log(reply);
    }
  return (
    <>
    <div className='mx-auto text-center text-2xl font-medium'>
            Yours PDF are here
    </div>

    <div className='flex flex-row gap-5 justify-center'>
        <div className='flex flex-col bg-green-400'>
            <p className='mx-auto text-2xl font-medium'>Uploaded PDFS</p>
            <button className='mx-auto rounded-lg  bg-blue-600 p-3 text-white text-2xl font-medium' onClick={fetchbutton}>Refresh</button>
            <div className=' w-full max-w-[600px] flex flex-col gap-5 p-5'>
            {response.map((pdf) => (
            <div className='flex flex-col gap-4 bg-gray-400 p-4' key={pdf.title}>
                <div className='flex flex-col justify-between'>
                    <p className='text-2xl'>{pdf.title}</p>
                    <p className='text-lg'>{pdf.filePath}</p>
                    <p>{pdf.id}</p>
                    <div className='flex flex-row'>
                    <button className='mx-auto rounded-lg  bg-blue-600 p-3 text-white text-2xl font-medium' onClick={()=>{pushdata(`${pdf.id}`)}}>delete</button>
                    <button className='mx-auto rounded-lg  bg-blue-600 p-3 text-white text-2xl font-medium' onClick={()=>{payforpdf(`${pdf.id}`)}}>Pay</button>
                    </div>
                </div>
            </div>
            ))}
            </div>
         </div>



         <div className='flex flex-col bg-green-400'>
         <p className='mx-auto text-2xl font-medium'>Paid PDFS</p>
            <button className='mx-auto rounded-lg  bg-blue-600 p-3 text-white text-2xl font-medium' onClick={fetchbutton}>Refresh</button>
            <div className=' w-full max-w-[600px] flex flex-col gap-5 p-5'>
                {paidpdf.length === 0 ? (
                    <p className='text-2xl'>No Paid PDFS</p>
                ) : (
                    paidpdf.map((pdf) => (
                        <div className='flex flex-col gap-4 bg-gray-400 p-4' key={pdf.title}>
                            <div className='flex flex-col justify-between'>
                                <p className='text-2xl'>{pdf.title}</p>
                                <p className='text-lg'>{pdf.filePath}</p>
                                <p>{pdf.id}</p>
                                <button onClick={() => pushdata(`${pdf.id}`)}>delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        
         </div>
    </div>
    
    </>
  )
}

export default Uploadedpdf