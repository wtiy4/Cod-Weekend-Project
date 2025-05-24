import React from "react";
import { GoDotFill } from "react-icons/go";
import { RxDot } from "react-icons/rx";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import CardsSection from "./CardsSection";

function FirstPage() {
  return (
    <>
      <div className="relative">
        <div className="video-container relative">
          <video
            src="/imgs/crash.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video w-full"
          ></video>

          <div className="absolute top-[450px] left-[100px] flex gap-4 z-20">
            <button className="bg-blue-400 text-white font-bold py-3 px-5 rounded-full w-[200px] border-2 border-sky-700 cursor-pointer">
              GET NOW
            </button>
            <button className="text-white font-bold py-3 px-5 rounded-full opacity-80 w-[200px] border-2 border-white cursor-pointer">
              VISIT SITE
            </button>
          </div>
        </div>

        <div className="flex text-4xl justify-center mt-[-40px] cursor-pointer gap-8 z-10 relative">
          <RiArrowLeftLine />
          <div className="flex justify-center gap-2">
            <RxDot />
            <RxDot />
            <GoDotFill />
            <RxDot />
            <RxDot />
          </div>
          <RiArrowRightLine />
        </div>

        <section className="min-h-screen bg-[linear-gradient(40%_20%_at_50%_0,_rgba(104,104,104,0.85),_#111111)]">
          <div className="py-20">
            <h2 className="text-center text-4xl text-white">
              LATEST NEWS & ARTICLES
            </h2>

            <div className="w-[90vw] mx-auto flex justify-center items-center">
              <div className="flex w-[90vw] justify-center items-center gap-10 mt-10 border-t border-b border-white">
                <h3 className="text-2xl text-white bg-sky-800 opacity-80 p-6 border-b-4 border-sky-500">
                  ALL NEWS
                </h3>
                <img
                  className="custom-flex w-30"
                  src="./imgs/logo.png"
                  alt=""
                />
                <img
                  className="custom-flex w-30"
                  src="./imgs/cod-logo.svg"
                  alt=""
                />
                <img
                  className="custom-flex w-30"
                  src="./imgs/THPS3+4_Logo.svg"
                  alt=""
                />
                <img
                  className="custom-flex w-30"
                  src="./imgs/crash-bandicoot-logo.png"
                  alt=""
                />
              </div>
            </div>

            <CardsSection />

            <div className="flex justify-center flex-col items-center space-y-6 mt-10">
              <button className="border-2 border-white rounded-[50px] p-3 w-[250px] text-white">
                VIEW ALL
              </button>

              <img
                className="w-[130%] h-[300px] border-t-2 border-b-2 border-[#5A5B5C]"
                src="./imgs/support-banner-v3.jpg"
                alt=""
              />

              <h1 className="text-white text-3xl uppercase">
                We're here to help!
              </h1>
              <p className="text-white text-center max-w-xl">
                Get answers to frequently asked questions, check server status,
                and engage with a support expert
              </p>

              <button className="border-2 border-white rounded-[50px] p-3 w-[250px] text-white">
                VISIT SUPPORT
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FirstPage;
