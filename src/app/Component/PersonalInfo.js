import React from 'react'
import Image from 'next/image'


function PersonalInfo({ onPrevious, onNext,onSetImage}) {
 
  return (
    
    <div className="w-full max-w-[1080px]  border rounded-[24px] h-fit mt-[100px] mb-[10px]  p-[40px] drop-shadow-[rgba(47, 115, 242, 0.15)  flex flex-col gap-[24px] bg-white">
          <div className='flex flex-col gap-[4px]'>
          <h2 className='font-bold text-center text-[26px] font-sans leading-[33px] text-customColor'>Sign Up Your User Account</h2>
          <p className='font-sans font-normal text-[16px] text-center text-ptagcolor'>Fill all form field to go to next step</p>
          </div>
             <div className='flex justify-between items-center gap-2 cursor-pointer'>
                    <div className='flex flex-col gap-[8px] justify-center items-center'>
                         <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center' >
                            <Image src='/icons/lockicon(1).svg'  width={0} height={0}  className="h-[25px] w-[20px]"  alt='account logo'  onClick={() => onSetImage(1)}></Image>
                          </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Account</p>
                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customBtn2Color rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                        <Image src='/icons/personalicon.svg' width={0} height={0}  className="h-[30px] w-[25px]" alt='user logo'  onClick={() => onSetImage(2)}></Image>
                        </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Personal</p>
                    <div className='border-b-[3px] w-8 border-blue-400'> </div>

                    </div>
                    <div className=' flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                    <Image src='/icons/visaicon.svg' width={0} height={0}  className="h-[30px] w-[25px]"   alt='payment logo'  onClick={() => onSetImage(3)} ></Image>
                    </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Payment</p>
                    </div>
                    <div className='flex flex-col  gap-[8px] justify-center items-center'>
                    <div  className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
                        <Image src='/icons/iconcheck.svg' width={0} height={0}  className="h-[30px] w-[25px]"   alt='finsih logo' onClick={() => onSetImage(4)}></Image>
                        </div>
                       <p className='font-sans font-medium text-[16px] text-tabTextColor'>Finish</p>
                    </div>
                    </div>
             
              <div className=' flex flex-col gap-[24px] text-ptagcolor'>
            <div>
                <h2 className='font-medium font-sans text-[20px] text-tabTextColor'>Personal Information</h2>
           </div>
           <form  onSubmit={onNext}>
          <div  className="flex flex-col gap-[20px] ">
           
              
          
        <input type='text' placeholder='Full Name' className=" py-[8px] px-[16px] border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none"  required/>
        <input type='email' placeholder='Email Id' className="py-[8px] px-[16px]   border-b border-customborderColor-300 focus:border-slate-500 focus:outline-none" required />
        <input type='text' placeholder='Contact Number' className=" py-[8px] px-[16px]  border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none" />
        <div className="flex flex-col gap-4  py-0 px-[16px] font-normal text-[16px]"  style={{ color: 'rgba(84, 117, 147, 1)' }}>
        <p className="">Select Gender:</p>
        <div className='flex flex-row gap-[24px] '>
        <div className=' flex  gap-[8px]'>
            <input type="radio" id="male" name="gender" value="male"/>
             <label className='' htmlFor="male">Male</label>
         </div>
      <div className='flex gap-[8px]'>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
       </div>
  </div>
  
</div>

    </div>
        <div className='flex justify-between mt-6'>
          <button className='rounded-[8px] py-[8px] px-[16px] bg-customborderColor hover:bg-gray-300 transition-colors duration-300' onClick={onPrevious}>
            <span className='font-medium text-lg font-sans leading-[23px]  text-ptagcolor' >Previous Step </span></button>
          <button  className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600 transition-colors duration-300 '> 
          <span className='font-medium text-lg font-sans leading-[23px]  text-white'> Next Step  </span></button>
        </div>
        </form>
        
  </div>
        </div>
      
  )
}

export default PersonalInfo
