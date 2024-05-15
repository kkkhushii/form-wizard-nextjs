import React ,{useState} from 'react'
import Image from 'next/image'


function PaymentPage({ onPrevious, onNext,onSetImage }) {


  
  return (
  
    <div className="w-full max-w-[1080px]    sm:h-auto   border rounded-[24px] mt-8 p-[20px] md:p-[30px] lg:p-[40px]  drop-shadow-[rgba(47, 115, 242, 0.15) mt-3 flex flex-col gap-[20px] bg-white">
   
          <div className='flex flex-col gap-[4px]'>
          <h2 className='font-bold text-center lg:text-[26px] md:text-[20px] font-sans leading-[33px] text-customColor sm:text-[16px]'>Sign Up Your User Account</h2>
          <p className='font-sans font-normal lg:text-[16px] md:text-[16px]  sm:text-[16px] text-[14px] text-center text-ptagcolor'>Fill all form field to go to next step</p>
          </div>
             <div className='flex justify-between items-center gap-2'>
                    <div className=' flex flex-col gap-[8px] justify-center items-center cursor-pointer'>
                    <div  className='bg-customborderColor rounded-full  sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px]  lg:w-[50px] h-[44px] w-[44px] flex justify-center items-center'>
                            <Image src='/icons/lockicon(1).svg'  width={0} height={0}  className="h-[20px] w-[15px]  sm:h-[25px] sm:w-[20px]  md:h-[25px]  md:w-[20px] lg:h-[25px] lg:w-[20px]"  alt='account logo' onClick={() => onSetImage(1)}></Image>
                          </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Account</p>
                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center '>
                    <div  className='bg-customborderColor rounded-full sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px]  lg:w-[50px] h-[44px] w-[44px] flex justify-center items-center'>
                      <Image src='/icons/personalicon(1).svg'  width={0} height={0}  className="h-[22px] w-[17px]  sm:h-[25px] sm:w-[20px]  md:h-[25px]  md:w-[20px] lg:h-[25px] lg:w-[20px]"   alt='user logo' onClick={() => onSetImage(2)}></Image>
                      </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Personal</p>
                    </div>
                    <div className='flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customBtn2Color rounded-full  sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px]  lg:w-[50px] h-[44px] w-[44px] flex justify-center items-center'>
                    <Image src='/icons/visaicon(1).svg' width={0} height={0}  className="h-[22px] w-[17px]  sm:h-[25px] sm:w-[20px]  md:h-[25px]  md:w-[20px] lg:h-[25px] lg:w-[20px]"   alt='payment logo' onClick={() => onSetImage(3)}></Image>
                    </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Payment</p>
                    <div className='border-b-[3px] w-8 border-blue-400'> </div>

                    </div>
                    <div className='  flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customborderColor rounded-full  sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px]  lg:w-[50px] h-[44px] w-[44px] flex justify-center items-center'>
                        <Image src='/icons/iconcheck.svg' width={0} height={0}  className="h-[22px] w-[17px]  sm:h-[25px] sm:w-[20px]  md:h-[25px]  md:w-[20px] lg:h-[25px] lg:w-[20px]"   alt='finsih logo' onClick={() => onSetImage(4)}></Image>
                        </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Finish</p>
                    </div>
                    </div>
             
              <div  className='flex flex-col lg:gap-[24px] sm:gap-[20px] md:gap-[24px] gap-[12px]'>
                 
                     <h2 className='font-medium font-sans sm:text-[20px] md:text-[20px]  lg:text-[20px] text-[19px]  text-tabTextColor leading-[26px]  '>Card Information</h2>
              
                    <div className='flex gap-[20px] flex-col'>
                      
                              <p className=' font-sans   text-base font-medium leading-[20px] text-tabTextColor'>Card Type</p>
                      
                    {/* <div className='flex sm:flex-nowrap md:flex-nowrap lg:flex-nowrap flex-wrap sm:gap-[24px] md:gap-[24px] lg:gap-[24px] gap-[18px]'>
                            <div className='rounded-[8px] py-[2px] sm:py-[4px]  md:py-[4px]  lg:py-[4px]  px-[0px]  shadow-shadowMd bg-white w-full flex  justify-center'>
                                 <Image src='/icons/card.svg' width={208} height={72}  className='rounded-[8px]  sm:flex-1  md:flex-1  lg:flex-1' alt='card logo'></Image>
                                 </div>
                                 <div className=' rounded-[8px] py-[4px] px-[12px]  sm:py-[4px]  md:py-[4px]  lg:py-[4px] shadow-shadowMd  bg-white  w-full   flex  justify-center '>
                                 <Image src='/icons/card (1).svg' width={208} height={72}  className='rounded-[8px] sm:flex-1  md:flex-1  lg:flex-1' alt='card logo'></Image>
                                 </div>
                                 <div className='rounded-[8px] py-[4px] px-[12px] sm:py-[4px]  md:py-[4px]  lg:py-[4px] shadow-shadowMd   bg-white   w-full flex  justify-center '>
                                 <Image src='/icons/card(2).svg' width={208} height={72}  className='rounded-[8px] sm:flex-1  md:flex-1  lg:flex-1' alt='card logo'></Image>
                                 </div>

                                 <div className=' rounded-[8px] p-[20px]  sm:py-[4px]  md:py-[4px]  lg:py-[4px] shadow-shadowMd bg-white sm:flex-1  md:flex-1  lg:flex-1   w-full flex  justify-center items-center '>
                                  <a  href='#' className='rounded-[8px] '>See All</a>
                                 </div>
                    </div> */}
                    <div className='flex flex-col lg:flex-row flex-wrap lg:flex-nowrap md:flex-row   md:flex-wrap gap-[24px]'>
    <div className='rounded-[8px] py-[2px] sm:py-[4px] md:py-[4px] lg:py-[4px] px-[0px] shadow-shadowMd bg-white flex justify-center lg:w-1/4 '>
        <Image src='/icons/card.svg' width={208} height={72} className='rounded-[8px]' alt='card logo' />
    </div>
    <div className='rounded-[8px] py-[4px] px-[12px] sm:py-[4px] md:py-[4px] lg:py-[4px] shadow-shadowMd bg-white flex justify-center lg:w-1/4 '>
        <Image src='/icons/card (1).svg' width={208} height={72} className='rounded-[8px]' alt='card logo' />
    </div>
    <div className='rounded-[8px] py-[4px] px-[12px] sm:py-[4px] md:py-[4px] lg:py-[4px] shadow-shadowMd bg-white flex justify-center lg:w-1/4 '>
        <Image src='/icons/card(2).svg' width={208} height={72} className='rounded-[8px]' alt='card logo' />
    </div>
    {/* <div className='rounded-[8px] p-[20px] sm:py-[4px] md:py-[4px]  lg:py-[4px] shadow-shadowMd bg-white  w-full flex justify-center items-center  '>
        <a href='#' className='rounded-[8px] '>See All</a>
    </div> */}
    <div className=' rounded-[8px] p-[20px]    md:py-[4px]  lg:py-[4px] shadow-shadowMd bg-white sm:flex-1  md:flex-1  lg:flex-1  flex  justify-center items-center '>
                                  <a  href='#' className='rounded-[8px] '>See All</a>
                                 </div>
</div>
                    
                 </div>
                 <div className='flex flex-col gap-[16px] sm:gap-[24px] md:gap-[24px] lg:gap-[24px]' >
                            <div className=' flex flex-col gap-[4px] sm:gap-[8px] md:gap-[8px] lg:gap-[8px]'>
                                    <p className=' font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Name of card
                                    </p>
                                    <input type='text' placeholder='Name Of Card' className=' text-sm py-[4px] px-[6px] sm:py-[8px] sm:px-[12px] md:py-[8px] md:px-[12px] lg:py-[8px] lg:px-[12px] bg-white border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none'/>
                            </div>
                            <div className='flex flex-col gap-[4px] sm:gap-[8px] md:gap-[8px] lg:gap-[8px]'>
                                    <p className='font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Card number
                                    </p>
                                    <input type='text' placeholder='Card number' className='text-sm py-[4px] px-[6px] sm:py-[8px] sm:px-[12px] md:py-[8px] md:px-[12px] lg:py-[8px] lg:px-[12px] bg-white border-b border-customborderColor-300  focus:border-slate-500 focus:outline-none '/>
                            </div>
                            <div className=' flex flex-col sm:flex-row md:flex-row lg:flex-row  gap-[16px] sm:gap-[24px] md:gap-[24px] lg:gap-[24px] '>
                                <div className=' flex flex-col  w-full  gap-[4px] sm:gap-[8px] md:gap-[8px] lg:gap-[8px]'>
                                  <p className='  font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                  Expiration date
                                    </p>
                                    <input type='date' placeholder='mm/yy'  className='text-sm py-[4px] px-[6px] sm:py-[8px] sm:px-[12px] md:py-[8px] md:px-[12px] lg:py-[8px] lg:px-[12px] bg-white border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none'/>   
                                </div>
                                <div className='flex flex-col  w-full  gap-[4px] sm:gap-[8px] md:gap-[8px] lg:gap-[8px]'>
                                  <p className=' font-sans font-medium text-base leading-[20px] text-tabTextColor '>
                                    Cvv
                                    </p>
                                    <input type='text' placeholder='cvv' className='text-sm w-full py-[4px] px-[6px] sm:py-[8px] sm:px-[12px] md:py-[8px] md:px-[12px] lg:py-[8px] lg:px-[12px] bg-white border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none'/>   
                                </div>
                            </div>
                           
                            <div className='flex justify-between'>
          <button className='rounded-[8px] py-[8px] px-[16px] bg-customborderColor hover:bg-gray-300 transition-colors duration-300'  onClick={onPrevious}>
            <span className='font-medium text-lg font-sans leading-[23px]  text-ptagcolor'>Previous Step </span></button>
          <button  className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 ' onClick={onNext}> 
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'> Next Step  </span></button>
        </div>
                 </div>
      
         
  </div>

  
        </div>
    
  )
}

export default PaymentPage
