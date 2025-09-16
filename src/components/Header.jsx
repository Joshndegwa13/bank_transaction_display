import React from "react";

export default function Header() {
  return (
<header className="flex items-center bg-gradient-to-r from-blue-800 to-purple-700 text-white shadow-md">
  <img
    src="https://mybroadband.co.za/news/wp-content/uploads/2021/03/Liquid-Telecom-Logo-Light.jpg"
    alt="Company Logo"
    className="h-25 w-auto object-contain"
  />

  <div className="flex-1 flex justify-center">
    <h1 className="text-lg md:text-2xl font-semibold">Bank Transactions</h1>
  </div>
</header>

  );
}
