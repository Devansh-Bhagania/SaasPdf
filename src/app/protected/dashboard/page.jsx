import MakePaymentComponent from '@/app/components/MakePayment'
import Uploadedpdf from '@/app/components/Uploadedpdf'
import React from 'react'

const DashboardPage = () => {
  return (
    <>
    <Uploadedpdf/>
    <div className='w-[1240px] mx-auto bg-cream text-2xl font-medium'>
        <h1 className='text-center p-5'>Make Payment</h1>
        <MakePaymentComponent/>
    </div>
    </>

  )
}

export default DashboardPage