"use client"
import React, { useEffect , useState } from 'react'
import axios from 'axios';
// import { fetchpdf } from '../actions/Fetchpdf/fetchpdf'
// import deletepdf from '../actions/Deletepdf/deletepdf'

const Uploadedpdf = ()=> {
    const [response, setResponse] = useState([]);
    
        // const ans = await fetch('/api/fetchpdf');
  
 
        // console.log(response)


        
            // const pdfdata = await  fetch('/api/fetchpdf');
           
            // // setResponse(pdfdata)
            //   console.log(pdfdata);
              
         async  function fetchbutton(){
            const pdfdata = await  axios.get('/api/fetchpdf');
           
            setResponse(pdfdata.data.message);
              console.log(pdfdata.data.message);
          }

    function pushdata(id){
        console.log(id)
    }
  return (
    <>
    <div className='mx-auto text-center text-2xl font-medium'>
            Yours PDF are here
    </div>
    <button className='p-4 bg-blue-300 text-white text-2xl font-medium' onClick={fetchbutton}>fetch pdfs</button>
    <div className='mx-auto w- full max-w-[600px] flex flex-col gap-5 p-10'>
        {response.map((pdf) => (
            <div className='flex flex-col gap-4 bg-gray-400 p-4' key={pdf.title}>
                <div className='flex flex-col justify-between'>
                    <p className='text-2xl'>{pdf.title}</p>
                    <p className='text-lg'>{pdf.filePath}</p>
                    <p>{pdf.id}</p>
                    <button onClick={()=>{pushdata(`${pdf.id}`)}}>delete</button>
                </div>
            </div>
        ))}
    </div>
    
    </>
  )
}

export default Uploadedpdf