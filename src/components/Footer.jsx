import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className="relative w-full mt-20">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
          alt="Join Us Banner"
          className="w-[130%]  object-contain"
        />

        <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center text-white px-6 py-10 bg-black/50">
          <div className="text-center lg:text-left space-y-4 max-w-sm">
            <h1 className="text-3xl font-bold uppercase">Have Fun</h1>
            <p>Learn more about job opportunities</p>
            <button className="border-2 border-white rounded-[50px] p-3 w-[250px]">
              JOIN US
            </button>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-x-6 space-y-2 max-w-xl mt-10 lg:mt-0">
            <p>Our Teams</p>
            <p>Game Design</p>
            <p>Art & Animation</p>
            <p>Brand Management</p>
            <p>Production</p>
            <p>Quality Assurance</p>
            <p>Customer Support</p>
            <p>Studio Operations</p>
            <p>Programming</p>
            <p>Finance & Accounting</p>
            <p>Human Resources</p>
          </div>
        </div>
      </div>

      <footer className="relative bg-black text-white px-6 py-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-between max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="uppercase text-xl font-bold">Follow Us</div>
            <div className="flex gap-3">
              <FaFacebook className="text-3xl border-2 p-1.5 rounded-full border-white" />
              <FaTwitterSquare className="text-3xl border-2 p-1.5 rounded-full border-white" />
              <FaYoutube className="text-3xl border-2 p-1.5 rounded-full border-white" />
              <TiSocialLinkedin className="text-3xl border-2 p-1.5 rounded-full border-white" />
              <FaInstagram className="text-3xl border-2 p-1.5 rounded-full border-white" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xl">Popular Games</div>
            <div className="text-gray-300">Call of Duty</div>
            <div className="text-gray-300">Tony Hawk Pro Skater</div>
            <div className="text-gray-300">Crash Bandicoot</div>
            <div className="text-gray-300">Spyro</div>
            <div className="text-gray-300">Sekiro</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xl">Company</div>
            <div className="text-gray-300">Press</div>
            <div className="text-gray-300">Research</div>
            <div className="text-gray-300">Activision Blizzard</div>
            <div className="text-gray-300">Contact Us</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xl">Legal</div>
            <div className="text-gray-300">Terms of Use</div>
            <div className="text-gray-300">Privacy Policy</div>
            <div className="text-gray-300">Cookie Policy</div>
            <div className="text-gray-300">Cookie Settings</div>
            <div className="text-gray-300">Online Safety</div>
            <div className="text-gray-300">Applicant Privacy Policy</div>
            <div className="text-gray-300">Your Privacy Choices</div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 space-y-2">
          <img
            className="w-40 sm:w-52"
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo.svg"
            alt="Activision Logo"
          />
          <div className="text-sm text-gray-400 text-center">
            © 2025 Activision Publishing, Inc.
          </div>
        </div>

        <img
          className="absolute bottom-0 left-0 w-full"
          src="./imgs/rainbow-lines.svg"
          alt=""
        />
      </footer>
    </>
  );
}

export default Footer;
