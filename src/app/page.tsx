import UseAccountfirst from '../app/Component/UseAccountfirst' 
import PersonalInfo from '../app/Component/PersonalInfo'
import PaymentPage from '../app/Component/PaymentPage'
import  '../app/Component/UserAcStyle.css'



export default function Home() {
  return (
    <div className='h-auto w-screen custom-gradient'>
    <UseAccountfirst/>
    <PersonalInfo/>
    <PaymentPage/>
    </div>
 
  );
}
