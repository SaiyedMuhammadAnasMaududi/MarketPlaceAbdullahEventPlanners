// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Topheader from "./components/topheader";
// import Header from "./components/header";
// import Belowheader from "./components/belowheader";
// import Footer from "./components/footer";
// // Import CartProvider
// import Cart from "./components/Cart";
// import { CartProvider } from "./context/CartContext";

// const geistSans = localFont({
//   src: "/fonts/GeistVF.woff",  // Updated path from './fonts/...' to '/fonts/...'
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff",  // Updated path from './fonts/...' to '/fonts/...'
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* Wrap the entire layout inside CartProvider */}
       
//           <Cart/>
//           <Header />
//           <Belowheader /> <CartProvider>
//           <hr className="border-[1px] border-[#f0f2f3]" />
//           {children}
//           <hr className="border-[1px] border-[#f0f2f3]" /></CartProvider>
//           <Footer />
        
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";


// Import CartProvider


import Topheader from "../components/topheader";
import Header from "../components/header";
import Belowheader from "../components/belowheader";
import Footer from "../components/footer";
import { CartProvider } from "../context/CartContext";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",  // Updated path from './fonts/...' to '/fonts/...'
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",  // Updated path from './fonts/...' to '/fonts/...'
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the entire layout inside CartProvider */}
        <CartProvider>
          
          <Header />
          <Belowheader />
          <hr className="border-[1px] border-[#f0f2f3]" />
          {children}
          <hr className="border-[1px] border-[#f0f2f3]" />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

