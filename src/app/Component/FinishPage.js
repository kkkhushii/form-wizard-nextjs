import React from 'react'
import Image from 'next/image'


function FinishPage({ onPrevious}) {
  return (
   
    <div className="w-full max-w-[1080px] border rounded-[24px] mt-8 p-[40px] drop-shadow-[rgba(47, 115, 242, 0.15) mt-3 flex flex-col gap-[24px] bg-white">
    <div className='flex justify-between items-center '>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                            <Image src='/icons/lockicon(1).svg'  width={0} height={0}  className="h-[25px] w-[20px]" alt='account logo'></Image>
                          </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Account</p>
                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center '>
                    <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                      <Image src='/icons/personalicon(1).svg'  width={0} height={0}  className="h-[30px] w-[25px]"   alt='user logo'></Image>
                      </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Personal</p>
                    </div>
                    <div className='flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                    <Image src='/icons/visaicon.svg' width={0} height={0}  className="h-[30px] w-[25px]"   alt='payment logo'></Image>
                    </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Payment</p>
                 

                    </div>
                    <div className='  flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customBtn2Color rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                        <Image src='/icons/iconcheck(1).svg' width={0} height={0}  className="h-[30px] w-[25px]"   alt='finsih logo'></Image>
                        </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Finish</p>
                       <div className='border-b-[3px] w-8 border-blue-400'> </div>
                    </div>
                    </div> 
                    <div className=' flex gap-[24px] justify-center items-center flex-col'>
                        <div className='flex gap-[8px] flex-col'>
                            <p className=' font-sans  text-xl leading-[26px] font-medium text-pcol'> Thank you for your purchase!</p>
                            <p className='font-sans  leading-[20px] font-normal text-sm text-customBtn2Color'>Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d</p>

                        </div>
                        <div>
                             <Image src='/icons/payment 1.svg'  width={362} height={362}  alt='payment logo' ></Image>
                             <div className='flex justify-center'>
                                <p className='text-finishtext w-1/2 font-sans text-xs font-normal text-center leading-4 '> 
                                We will send you a notification within 24 hours when it ships.
                                </p>
                             </div>
                        </div>

                    </div>
                    <div className='flex   justify-around'>
                    <button className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 ' onClick={onPrevious}>
            <span className='font-medium text-lg font-sans leading-[23px]  text-white'>Previous Step</span></button>
          <button className='rounded-[8px] py-[8px] px-[16px] bg-customborderColor hover:bg-gray-300 transition-colors duration-300'>
            <span className='font-medium text-lg font-sans leading-[23px]  text-ptagcolor'>Continue Shopping</span></button>
          <button  className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 '> 
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'> Download Receipt  </span></button>
          
        </div>
        </div>
      
  )
}

export default FinishPage




