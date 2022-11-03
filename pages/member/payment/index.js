import { useEffect } from "react";

const Payment = () => {
    useEffect(()=>{
        async function makeForm() {
          const Script = document.createElement("script");
          const Form = document.getElementById('rzp_payment_form');
          Script.setAttribute('src',"https://checkout.razorpay.com/v1/payment-button.js" )
          Script.setAttribute('data-payment_button_id',"pl_KbdFppFpEuSFvJ")
          Form.appendChild(Script); 
        }
        makeForm()},[])
  return (
    <div className=''>
        <h1>  I am the payment page</h1>

        <form id="rzp_payment_form"></form>

    </div>
  )
}

export default Payment

