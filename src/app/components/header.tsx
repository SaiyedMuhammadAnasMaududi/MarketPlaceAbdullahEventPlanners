// import { Inter } from "next/font/google";
// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { CiShoppingCart } from "react-icons/ci";

// const inter = Inter({ subsets: ["latin"] });

// const Header = () => {
//   return (
//     <div className="w-full bg-[#f0f2f3] text-[#272343] shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-auto md:px-16">
//         {/* Logo Section */}
//         <div className={`${inter.className} flex items-center space-x-2`}>
//           <Image
//             src={`/images/image1.png`}
//             width={40}
//             height={40}
//             alt="logo"
//           />
//           <p className="text-sm sm:text-2xl font-semibold">Abdullah Event Planners</p>
//         </div>

//         {/* Navigation and Cart Section */}
//         <div className="flex items-center space-x-6">
//           <Link href="/Home" passHref>
//             <p className="text-sm sm:text-base font-medium text-[#272343] hover:text-[#029fae] transition duration-200">Home</p>
//           </Link>
//           <Link href="/Home/details" passHref>
//             <p className="text-sm sm:text-base font-medium text-[#272343] hover:text-[#029fae] transition duration-200">Food Info</p>
//           </Link>

//           {/* Cart Section */}
//           <div className="relative flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-md shadow-lg cursor-pointer">
//             <Link href="/Home/cart">
//               <CiShoppingCart className="text-2xl" />
//             </Link>
//             <p className="text-xs sm:text-sm font-medium">Cart</p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full bg-[#f0f2f3] text-[#272343] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center py-4 px-4 md:px-16">
        
        {/* Logo Section */}
        <div className={`${inter.className} flex items-center space-x-2`}>
          <Image
            src="/images/image1.png"
            width={40}
            height={40}
            alt="logo"
          />
          <p className="text-sm sm:text-2xl font-semibold">
            Abdullah Event Planners
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
          <Link href="/Home" passHref>
            <p className="text-sm sm:text-base font-medium hover:text-[#029fae] transition duration-200">Home</p>
          </Link>
          <Link href="/Home/details" passHref>
            <p className="text-sm sm:text-base font-medium hover:text-[#029fae] transition duration-200">Food Info</p>
          </Link>
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Cart: Always visible */}
          <div className="relative flex items-center space-x-2 bg-white text-black py-2 px-3 sm:px-4 rounded-md shadow-lg cursor-pointer">
            <Link href="/Home/cart">
              <CiShoppingCart className="text-xl sm:text-2xl" />
            </Link>
            <p className="text-xs sm:text-sm font-medium">Cart</p>
          </div>

          {/* Hamburger for ≤420px */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          {/* Sidebar */}
          <div
            className="w-64 h-full bg-white text-[#272343] p-6 shadow-lg animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setSidebarOpen(false)}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link href="/Home" onClick={() => setSidebarOpen(false)}>
                <p className="text-base font-medium hover:text-[#029fae] transition">Home</p>
              </Link>
              <Link href="/Home/details" onClick={() => setSidebarOpen(false)}>
                <p className="text-base font-medium hover:text-[#029fae] transition">Food Info</p>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Simple slide-in animation */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;
