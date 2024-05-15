'use client'

import Image from 'next/image'


function Example({ onNext ,onSetImage   }) {

  return (

    <div className="w-full max-w-[1080px] border rounded-[24px] mt-8 p-[40px] drop-shadow-[rgba(47, 115, 242, 0.15) mt-3 flex flex-col gap-[24px] bg-white">
     
      <div className='flex flex-col gap-[4px]'>
        <h2 className='font-bold text-center text-[26px] font-sans leading-[33px] text-customColor'>Sign Up Your User Account</h2>
        <p className='font-sans font-normal text-[16px] text-center text-ptagcolor'>Fill all form field to go to next step</p>
      </div>
      <div className='flex justify-between items-center gap-2 cursor-pointer'>
        <div className=' flex flex-col gap-[8px]  justify-center items-center'>
          <div className='bg-customBtn2Color rounded-full  h-[50px] w-[50px] flex justify-center items-center' >
            <Image src='/icons/lockicon.svg' width={0} height={0} className="h-[30px] w-[25px]" alt='account logo'  onClick={() => onSetImage(1)}/>
          </div>
          <p className='font-sans font-medium text-[16px] text-tabTextColor'>Account</p>
          <div className='border-b-[3px] w-8 border-blue-400'> </div>
        </div>
        <div className=' flex flex-col justify-center items-center gap-[8px]'>
          <div className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'  >
            <Image src='/icons/personalicon(1).svg' width={0} height={0} className="h-[30px] w-[25px]" alt='user logo' onClick={() => onSetImage(2)}></Image>
          </div>
          <p className='font-sans font-medium text-[16px] text-tabTextColor'>Personal</p>
        </div>
        <div className=' flex flex-col justify-center items-center  gap-[8px] '>
          <div className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center' >
            <Image src='/icons/visaicon.svg' width={0} height={0} className="h-[30px] w-[25px]" alt='payment logo' onClick={() => onSetImage(3)}></Image>
          </div>
          <p className='font-sans font-medium text-[16px] text-tabTextColor'>Payment</p>
        </div>
        <div className=' flex flex-col  justify-center items-center gap-[8px]'>
          <div className='bg-customborderColor rounded-full  h-[50px] w-[50px] flex justify-center items-center'>
            <Image src='/icons/iconcheck.svg' width={0} height={0} className="h-[30px] w-[25px]" alt='finsih logo' onClick={() => onSetImage(4)}></Image>
          </div>
          <p className='font-sans font-medium text-[16px] text-tabTextColor'>Finish</p>
        </div>
      </div>
    

      <div className='flex flex-col gap-[24px] '>
        <div>
          <h2 className='font-medium font-sans text-[20px] text-tabTextColor'>Account Information</h2>
        </div>
        <form>
        <div className="grid grid-cols-1 gap-[20px]">

          <input type='email' placeholder='Email Id' className="py-[8px] px-[16px] border-b border-customborderColor-300   focus:border-slate-500   focus:outline-none" required/>
          <input type='text' placeholder='Username' className=" py-[8px] px-[16px] border-b border-customborderColor-300 focus:border-slate-500  focus:outline-none"  required/>
          <input type='password' placeholder='Password' className=" py-[8px] px-[16px] border-b border-customborderColor-300  focus:border-slate-500 focus:outline-none" required />
          <input type='password' placeholder='Confirm Password' className=" py-[8px] px-[16px] border-b border-customborderColor-300  focus:border-slate-500 focus:outline-none"  required/> 
        
        </div>
        </form>
      </div>
      <div className='flex justify-center'>
        <button className='rounded-[8px] py-[8px] px-[16px] bg-customBtn2Color hover:bg-blue-600  transition-colors duration-300'  onClick={onNext}>
          <span className='font-sans font-medium  text-lg leading-[23px] text-white'> Next Step </span>
        </button>

      </div>
    </div>
  )
}

export default Example
{/* <div className={`w-[64px] h-[87px] gap-2 border-b-2 ${activeItem === 'account' ? 'border-blue-400' : 'border-transparent'}`} onClick={() => setActiveItem('account')}> */ }
