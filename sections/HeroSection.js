"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function HeroSection() {
  return (
    <div className="flex overflow-hidden relative mt-[50px]">
      <div className="w-[60%]">
        <h1 className="font-bold leading-[110px] text-green-950 text-[80px] font-hind">
          কি ? বাসাবাড়ি খুঁজতে প্যারা নিচ্ছেন ?
        </h1>
        <p className="font-[400] font-hind mt-[20px] text-[25px] text-black">
          এবার আপনার ফ্ল্যাট খুঁজে দিচ্ছি আমরা, আর প্যারা নিতে হবেনা। এখনি
          রেজিস্ট্রেশন করে ফেলুন । এরপর আপনার পছন্দের ফ্ল্যাটের বিবরণ দিয়ে ফেলুন
          আমাদের সাইটে, আমরা আপনার পছন্দমত বাসা বের করে আপনাকে জানিয়ে দিব সব
          ডিটেইলস সহ।
        </p>
      </div>
      <div className="scale-[2.2] w-[40%]">
        <Player
          autoplay
          loop
          src="https://lottie.host/d72728d0-1783-45b5-82be-ca2e0429b425/eceQHLfBnn.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    </div>
  );
}

export default HeroSection;
