
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
const inter = Inter({ subsets: ["latin"] });
const Loginheader = () => {
  return (
    




    <div className="w-full bg-[#f0f2f3] text-[#272343] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-16">
        {/* Logo Section */}
        <div className={`${inter.className} flex items-center space-x-2`}>
          <Image
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-illustration-catering-logo-design-template-51b30376ece56f6b781a735bb19ac808_screen.jpg?ts=1697531480"
            width={40}
            height={40}
            alt="logo"
          />
          <p className="text-xl sm:text-2xl font-semibold">Abdullah Event Planners</p>
        </div>

      </div>
    </div>




  )
}

export default Loginheader
