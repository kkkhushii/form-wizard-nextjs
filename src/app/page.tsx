'use client'


import UseAccountfirst from '../app/Component/UseAccountfirst' 
import PersonalInfo from '../app/Component/PersonalInfo'
import PaymentPage from '../app/Component/PaymentPage'
import FinishPage from '../app/Component/FinishPage'
import  '../app/Component/UserAcStyle.css'
import { useState } from 'react';


export default function Home() {
  const [step, setStep] = useState(1);
  const [currentComponent, setCurrentComponent] = useState('UseAccountfirst');

  const handleImageClick = (targetComponent) => {
    setCurrentComponent(targetComponent);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  
  return (
    <div className='h-screen flex justify-center items-center  custom-gradient'>
    {/* <div className='h-screen flex justify-center items-center '> */}

    
      {step === 1 && <UseAccountfirst onNext={handleNext} />}
      {step === 2 && <PersonalInfo onPrevious={handlePrevious} onNext={handleNext}  />}
      {step === 3 && <PaymentPage onPrevious={handlePrevious} onNext={handleNext}  />}
      {step === 4 && <FinishPage onPrevious={handlePrevious}  />}  


      {/* {currentComponent === 'UseAccountfirst' && <UseAccountfirst onClick={handleImageClick} />}
      {currentComponent === 'PersonalInfo' && <PersonalInfo onClick={handleImageClick} />}
      {currentComponent === 'PaymentPage' && <PaymentPage onClick={handleImageClick} />}
      {currentComponent === 'FinishPage' && <FinishPage onClick={handleImageClick} />} */}
    </div>
 
  );
}
