'use client'


import UseAccountfirst from '../app/Component/UseAccountfirst'
import PersonalInfo from '../app/Component/PersonalInfo'
import PaymentPage from '../app/Component/PaymentPage'
import FinishPage from '../app/Component/FinishPage'
import '../app/Component/UserAcStyle.css'
import { SetStateAction, useState } from 'react';


export default function Home() {
  const [step, setStep] = useState(1);


  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);

  };

  const handleimage = (componentNumber: SetStateAction<number>) => {
    setStep(componentNumber);
  };

  return (
    // <div className='h-screen flex justify-center custom-gradient'>
    <div className=' h-screen flex justify-center custom-gradient overflow-scroll'>



      {step === 1 && <UseAccountfirst onNext={handleNext} onSetImage={handleimage} />}
      {step === 2 && <PersonalInfo onPrevious={handlePrevious} onNext={handleNext} onSetImage={handleimage} />}
      {step === 3 && <PaymentPage onPrevious={handlePrevious} onNext={handleNext} onSetImage={handleimage} />}
      {step === 4 && <FinishPage onPrevious={handlePrevious} onSetImage={handleimage} />}
    </div>

  );
}
