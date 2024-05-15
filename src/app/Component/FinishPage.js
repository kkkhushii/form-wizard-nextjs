import React from 'react'
import Image from 'next/image'


function FinishPage({ onPrevious ,onSetImage}) {
  return (

    <div className="w-full max-w-[1080px] border rounded-[24px] p-[40px] drop-shadow-[rgba(47, 115, 242, 0.15) h-fit mt-[100px] mb-[10px] flex flex-col items-center gap-[24px] bg-white">

      <div className=' flex gap-[24px] justify-center items-center flex-col'>
        <div className='flex gap-[8px] flex-col'>
          <p className=' font-sans  text-xl leading-[26px] font-medium text-pcol'> Thank you for your purchase!</p>
          <p className='font-sans  leading-[20px] font-normal text-sm text-customBtn2Color'>Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d</p>

        </div>
        <div>
          <Image src='/icons/payment 1.svg' width={362} height={362} alt='payment logo' ></Image>
          <div className='flex justify-center'>
            <p className='text-finishtext w-1/2 font-sans text-xs font-normal text-center leading-4 '>
              We will send you a notification within 24 hours when it ships.
            </p>
          </div>
        </div>

      </div>
      <div className='sm:flex md:flex lg:flex sm:flex-row sm:w-full sm:justify-around md:w-fit lg:justify-between lg:w-full md:w-full md:flex-row md:justify-between flex  flex-col gap-[15px] w-fit '>
        {/* <button className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 ' onClick={onPrevious}>
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'>Previous Step</span></button> */}
        <button className='rounded-[8px] py-[8px] px-[16px] bg-customborderColor hover:bg-gray-300 transition-colors duration-300'  onClick={() => onSetImage(1)}>
          <span className='font-medium text-lg font-sans leading-[23px]  text-ptagcolor'>Continue Shopping</span></button>
        <button className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 '>
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'> Download Receipt  </span></button>
          

      </div>
    
    </div>

  )
}

export default FinishPage




