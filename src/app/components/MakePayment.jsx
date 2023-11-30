"use client"
import React from 'react'


const MakePaymentComponent = async () => {
    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();
        if(res){
            console.log("Razorpay SDK loaded");
        }
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
      

        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);


        // trying make payemnts afer server error 
        // const data = await axios.post('/api/razorpay', {
        //     data:100,
        // });
        
        // const orderdata = data.data
        // console.log(orderdata.id);
        // console.log(orderdata.currency);
        // console.log(orderdata.amount);
        // console.log(data.json());
        var options = {
          key: 'rzp_test_v4wZXK8tUjyXFX',
          amount: "10000", 
          currency: 'INR',// Enter the Key ID generated from the Dashboard
          name: "Indradhanu online",
          description: "Thankyou for your test donation",
          order_id: data.id,
          receipt: "receipt1",
          notes:{
            address:"Indradhanu online",
            country:"India"
          },
          // image: "https://manuarora.in/logo.png",
          
          // handler: async  function (response) {
          //   if(!response){
          //       console.log("response is coming")
          //   }
          //   console.log(response.razorpay_order_id);
          //   console.log(response);
          //   // Validate payment at server - using webhooks is a better idea.
          //   alert("Razorpay Response: "+response.razorpay_payment_id);
          //   //alert(response.razorpay_order_id);
          //   //alert(response.razorpay_signature);
          // },
          // callback_url: 'https://localhost:3000/api/paymentverify',
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name:"pradeep das",
            email:"devanshbhagania19@gmail.com",
            contact:'8847064872'
          },
          
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function (response) {
            // console.log(response);
            alert("Payment failed. Please try again. Contact support for help");
          });
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);

          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };

          document.body.appendChild(script);
        });
      }
  return (
    <div className='mx-auto flex p-10'>
        <button className='bg-blue-500 text-white p-2 px-4 mx-auto' onClick={()=>makePayment()}>Pay 100 now</button>
    </div>
  )
}

export default MakePaymentComponent