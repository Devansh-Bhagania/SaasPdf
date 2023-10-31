import Image from 'next/image'
import React from 'react'
import webp1 from '@/app/images/webp1.webp';
import webp2 from '@/app/images/webp2.webp';
import webp3 from '@/app/images/webp3.webp';

const TextCards = () => {
  return (
    <>
    <div className='h-[500px] mt-[50px] px-28 w-full bg-transparent gap-32 flex flex-row'>
        <div className='h-[480px] flex flex-col gap-2 w-1/3 '>
            <div className='mx-auto'>
                <Image src={webp1} width={280} height={100} />
            </div>

            <div>
                <h1 className='text-2xl font-medium text-left'>Safer</h1>
                <p className='pt-5 text-md font-medium text-left'>
                With Constitutional AI built in, Claude is designed to reduce brand risk. Best in class data retention, and no training on your data.
                </p>
            </div>
        </div>
        <div className='h-[480px] flex flex-col gap-2 w-1/3'>
            <div className='mx-auto'>
                <Image src={webp2} width={280} height={100} />
            </div>

            <div>
                <h1 className='text-2xl font-medium text-left'>Safer</h1>
                <p className='pt-5 text-md font-medium text-left'>
                With Constitutional AI built in, Claude is designed to reduce brand risk. Best in class data retention, and no training on your data.
                </p>
            </div>
        </div>
        <div className='h-[480px] flex flex-col gap-2 w-1/3'>
            <div className='mx-auto'>
                <Image src={webp3} width={280} height={100} />
            </div>

            <div>
                <h1 className='text-2xl font-medium text-left'>Safer</h1>
                <p className='pt-5 text-md font-medium text-left'>
                With Constitutional AI built in, Claude is designed to reduce brand risk. Best in class data retention, and no training on your data.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TextCards