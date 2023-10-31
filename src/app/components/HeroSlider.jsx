import React from 'react'
import TextCards from './TextCards'

const HeroSlider = () => {
  return (
    <>
    <main className='w-screen h-[880px] flex flex-col bg-cream'>
                <div className='mx-auto text-8xl font-medium text-center pt-[100px] '>
                    Meet Claude
                </div>
                <div className='mx-auto text-2xl font-medium text-center pt-[20px] '>
                A next-generation AI assistant for
                </div>
                <div className='mx-auto text-2xl font-medium text-center pt-[0px] '>
                your tasks, no matter the scale
                </div>

                <div className='flex flex-row pt-10 gap-5 mx-auto' >
                        <div>
                            <button className='px-[80px] bg-black py-4 font-medium  text-white rounded-xl'>
                                    Submit Business Interest
                            </button>
                        </div>

                        <div>
                        <button className='px-[110px] bg-transparent border-black border-solid border-2 font-medium py-4 text-black rounded-xl'>
                                            Talk to Claude
                            </button>
                        </div>
                </div>

            <TextCards/>
    </main>
    </>
  )
}

export default HeroSlider