import React from "react";

const Checkout = () => {
  return (
    <div className="overflow-x-hidden flex flex-col bg-gradient-to-br from-purple-700 to-purple-500 text-white p-5">
      <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 top-48 -left-16 z-0"></div>
      <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 top-[500px] -right-16 z-0"></div>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-2/5">
          <h1 className="text-4xl font-bold text-purple-200">Checkout</h1>
          <div className="flex items-center justify-between p-5 h-20 w-full border border-purple-300 rounded-2xl font-semibold mt-7 bg-purple-700 bg-opacity-50 backdrop-blur">
            <p className="text-xl text-black">1. Shipping Information</p>
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 35 L50 65 L75 35"
                  fill="none"
                  stroke="#000"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col p-5 mt-7 border border-purple-300 rounded-2xl bg-purple-700 bg-opacity-50 backdrop-blur relative">
            <div className="flex items-center justify-between w-full">
              <p className="text-xl text-black font-bold">1. Payment</p>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 65 L50 35 L75 65"
                    fill="none"
                    stroke="#000"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mt-5">
              <p className="text-white font-light">Payment Method</p>
              <div className="flex space-x-2">
                <img src="https://placehold.co/50x30" alt="Mastercard" />
                <img src="https://placehold.co/50x30" alt="Visa" />
                <img src="https://placehold.co/50x30" alt="Mastercard" />
                <img src="https://placehold.co/50x30" alt="Visa" />
                <img src="https://placehold.co/50x30" alt="Mastercard" />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-black">Cardholder Name</p>
              <input
                placeholder="Cardholder Name"
                value="John Doe"
                className="p-5 w-full border border-purple-300 rounded-lg bg-purple-400 bg-opacity-70 backdrop-blur text-white mt-1"
              />
            </div>
            <div className="mt-5">
              <p className="text-black">Card Number</p>
              <input
                placeholder="Card Number"
                value="1234 5678 9101 9876"
                className="p-5 w-full border border-purple-300 rounded-lg bg-purple-400 bg-opacity-70 backdrop-blur text-white mt-1"
              />
            </div>
            <div className="flex justify-between w-full gap-3 mt-5">
              <select className="p-5 w-1/2 border border-purple-300 rounded-lg bg-purple-400 bg-opacity-70 backdrop-blur text-white mt-1">
                <option value="MM/YY">MM/YY</option>
              </select>
              <input
                placeholder="CVC"
                value="CVC"
                className="p-5 w-1/2 border border-purple-300 rounded-lg bg-purple-400 bg-opacity-70 backdrop-blur text-white mt-1"
              />
            </div>
          </div>
          <button className="w-full p-5 text-white bg-purple-600 text-center border border-purple-300 rounded-lg mt-5 text-xl">
            Pay Now
          </button>
        </div>
        <div className="w-full md:w-2/5 mt-10 md:mt-[0px] md:ml-10">
          <div className="flex flex-col p-5 border border-purple-300 rounded-2xl bg-purple-700 bg-opacity-50 backdrop-blur relative">
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 25 L65 50 L35 75"
                  fill="none"
                  stroke="#000"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65 25 L35 50 L65 75"
                  fill="none"
                  stroke="#000"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">Ellin Wright</h3>
              <div className="flex justify-center my-2">
                <span className="text-yellow-400 text-2xl">&#9733;</span>
                <span className="text-yellow-400 text-2xl">&#9733;</span>
                <span className="text-yellow-400 text-2xl">&#9733;</span>
                <span className="text-yellow-400 text-2xl">&#9733;</span>
                <span className="text-yellow-400 text-2xl">&#9734;</span>
              </div>
              <p className="text-black">
                Fantastic service. Friendly, quick and professional. I have no
                hesitation in recommending this company. Thank you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 mt-7 border border-purple-300 rounded-2xl bg-purple-700 bg-opacity-50 backdrop-blur">
            <div className="flex items-center justify-between w-full">
              <p className="text-xl text-black font-light">Order Summary</p>
            </div>
            <div className="flex items-center justify-between w-full mt-5">
              <p className="text-lg text-black font-light">Today's Cost</p>
              <p className="text-lg text-black font-light">$200</p>
            </div>
            <div className="w-full h-px bg-black my-2"></div>
            <div className="flex items-center justify-between w-full">
              <p className="text-lg text-black font-light">Total</p>
              <p className="text-lg text-black font-light">$9900</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-around items-center mb-10">
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Technical Support"
                  className="w-24 h-24 rounded-full mb-3"
                />
                <p className="text-center">Technical Support</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Secure Checkout"
                  className="w-24 h-24 rounded-full mb-3"
                />
                <p className="text-center">Secure Checkout</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Safe Browsing"
                  className="w-24 h-24 rounded-full mb-3"
                />
                <p className="text-center">Safe Browsing</p>
              </div>
            </div>
            <div className="text-center text-sm font-light">
              <p>
                bsbbhelpline.com | bghelper.com | bbbcshelp.com |
                bbghelpdesk.com will be displayed on your bank statement as a
                charge from BENSET LIMITED
              </p>
              <p className="mt-5">
                You will be billed by BENSET LIMITED, an e-commerce merchant
                located in the Cyprus.
              </p>
              <p className="mt-5">
                By completing this purchase, you consent to a 2-day trial
                membership with bebudget.com for €2, and you acknowledge that
                unless you cancel within due time, You will be enrolled in the
                full 10-day membership at the price of €39 every 10 days. If the
                trial is not cancelled, you will be charged €39 every 10 days
                until the membership is canceled.
              </p>
              <p className="mt-5">
                All purchases are covered by a 14-day full refund guarantee. The
                decision to reimburse a charge does not insure the obligation to
                reimburse other subsequent expenses. Any charge refunded by
                bebudget.com for any reason, will be refunded by the payment
                method used for the original transaction. bebudget.com will not
                credit any cash charges. Any request for refund must be made by
                contacting customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
