import { NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import shortid from "shortid";
// import crypto from "crypto";
// import Payment from "../../../database/model/Payment"
// import dbConnect from '../../../database/database'
// const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY_ID,
//     key_secret: process.env.RAZORPAY_SECRET,
//   });

// export const POST = async(req,res) => {

//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//   await req.json();
//    const body = razorpay_order_id + "|" + razorpay_payment_id;
// console.log("id==",body)

//  const expectedSignature = crypto
//    .createHmac("sha256", process.env.RAZORPAY_SECRET)
//    .update(body.toString())
//    .digest("hex");

// const isAuthentic = expectedSignature === razorpay_signature;


//  if (isAuthentic) {

//   console.log(Payment)

  

//    return NextResponse.redirect(new URL('/paymentsuccess', req.url));

// } else {
//     return NextResponse.json({
//         message: "fail"
//       }, {
//         status: 400,
//       })

// }


// return NextResponse.json({
//     message: "success"
//   }, {
//     status: 200,
//   })

// }

export const POST = async (req, res) => {
  console.log("payment verify")
  return NextResponse.json({message:"success"});
}