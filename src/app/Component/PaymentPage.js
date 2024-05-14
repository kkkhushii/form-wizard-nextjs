import React from 'react'
import Image from 'next/image'


function PaymentPage() {
  return (
    <div className="flex justify-center items-center">
    <div className="w-full max-w-[1080px] border rounded-[24px] mt-8 p-[40px] drop-shadow-[rgba(47, 115, 242, 0.15) mt-3 flex flex-col gap-[24px] bg-white">
          <div className='flex flex-col gap-[4px]'>
          <h2 className='font-bold text-center text-[26px] font-sans leading-[33px] text-customColor'>Sign Up Your User Account</h2>
          <p className='font-sans font-normal text-[16px] text-center text-ptagcolor'>Fill all form field to go to next step</p>
          </div>
             <div className='flex justify-between items-center gap-2'>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center'>
                        <Image src='/icons/Account.svg' width={50} height={50}  alt='account logo'></Image>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Account</p>
                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center '>
                        <Image src='/icons/Personal.svg' width={50} height={50}  alt='user logo'></Image>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Personal</p>
                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center'>
                    <Image src='/icons/Payment Icon(1).svg' width={50} height={50}  alt='payment logo'></Image>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Payment</p>
                    <div className='border-b-[3px] w-8 border-blue-400'> </div>

                    </div>
                    <div className='  flex flex-col  gap-[8px] justify-center items-center'>
                        <Image src='/icons/Finish.svg' width={50} height={50}  alt='finsih logo'></Image>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Finish</p>
                    </div>
                    </div>
             
              <div  className='flex flex-col gap-[24px]'>
                 
                     <h2 className='font-medium font-sans text-[20px] text-tabTextColor leading-[26px] '>Card Information</h2>
              
                    <div className='flex gap-[20px] flex-col'>
                      
                              <p className=' font-sans text-base font-medium leading-[20px] text-tabTextColor'>Card Type</p>
                      
                    <div className=' flex gap-[24px]'>
                            {/* <div className=' rounded-[8px] py-[4px] px-[0px] shadow-[0px 4px 8px 0px rgba(47, 115, 242, 0.15)]  shadow bg-white'> */}
                            <div className=' rounded-[8px] py-[4px] px-[0px] shadow-shadowMd bg-white'>

                                 <Image src='/icons/card.svg' width={208} height={72}  className='rounded-[8px]' alt='card logo'></Image>
                                 </div>
                                 <div className=' rounded-[8px] py-[4px] px-[12px] shadow-shadowMd  bg-white'>
                                 <Image src='/icons/card (1).svg' width={208} height={72}  className='rounded-[8px]' alt='card logo'></Image>
                                 </div>
                                 <div className='rounded-[8px] py-[4px] px-[12px] shadow-shadowMd   bg-white'>
                                 <Image src='/icons/card(2).svg' width={208} height={72}  className='rounded-[8px]' alt='card logo'></Image>
                                 </div>

                                 <div className=' rounded-[8px] py-[4px] px-[12px] shadow-shadowMd  bg-white'>
                                 <Image src='/icons/card(4).svg' width={208} height={72}  className='rounded-[8px]' alt='card logo'></Image>
                                 {/* <p className='w-[50px] h-[50px] rounded-[8px]'>See All</p> */}
                                 </div>
                    </div>
                    
                 </div>
                 <div className='flex flex-col gap-[24px]' >
                            <div className=' flex flex-col gap-[8px]'>
                                    <p className=' font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Name of card
                                    </p>
                                    <input type='text' placeholder='Name Of Card' className='py-[8px] px-[12px] bg-white border-b border-customborderColor-300  focus:outline-none'/>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                    <p className='font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Card number
                                    </p>
                                    <input type='text' placeholder='Name Of Card' className='py-[8px] px-[12px] bg-white border-b border-customborderColor-300 focus:outline-none '/>
                            </div>
                            <div className=' flex flex-col gap-[8px]'>
                                    <p className=' font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Card number
                                    </p>
                                    <input type='text' placeholder='Name Of Card' className='py-[8px] px-[12px] bg-white border-b border-customborderColor-300 focus:outline-none'/>
                            </div>
                            <div className=' flex flex-row gap-[24px]'>
                                <div className=' flex flex-col gap-[8px]'>
                                  <p className='  font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                  Expiration date
                                    </p>
                                    <input type='text' placeholder='mm/yy' className='w-[488px] py-[8px] px-[12px] bg-white border-b border-customborderColor-300  focus:outline-none'/>   
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                  <p className=' font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                 CVV
                                    </p>
                                    <input type='text' placeholder='cvv' className=' py-[8px] px-[12px] bg-white border-b border-customborderColor-300  focus:outline-none'/>   
                                </div>
                            </div>
                           
                            <div className='flex justify-between'>
          <button className='rounded-[8px] py-[8px] px-[16px] bg-customborderColor'>
            <span className='font-medium text-lg font-sans leading-[23px]  text-ptagcolor'>Previous Step </span></button>
          <button  className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color'> 
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'> Next Step  </span></button>
        </div>
                 </div>
      
         
  </div>

  
        </div>
      </div>
  )
}

export default PaymentPage
