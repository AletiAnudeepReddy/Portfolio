"use client";
import { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { ConnectPopup } from "@/components/ConnectPopup";

export const ContactSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-16">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 z-0
         text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left
          relative overflow-hidden"
        >
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to Life? Lets connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="text-white hover:scale-105 transition duration-300 bg-gray-900 inline-flex items-center px-6
              h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConnectPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};
