import React from "react";

import liquidLogo from "../assets/liquidlogo.png"; 
export default function Header() {
  return (
<header className="flex items-center justify-center bg-white shadow-md relative h-20 border-b border-gray-200">

<img
    src={liquidLogo}
    alt="Company Logo"
    className="h-18 w-auto object-contain absolute left-4 bg-white p-1 rounded"

  />
 
<h1 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
    Bank Transactions
</h1>
</header>
 
  );

}

 