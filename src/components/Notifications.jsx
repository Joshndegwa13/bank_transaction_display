import React from "react";
 
export default function Notification({ latestTransaction }) {

  if (!latestTransaction) return null;
 
  return (
<div
      className="bg-white shadow-md rounded-lg p-4 mb-6 

                 transition-all duration-500 ease-in-out 

                 opacity-0 animate-fadeIn"
>
<h2 className="text-lg font-semibold text-gray-800 mb-2">
        Recent Transaction
</h2>
<p className="text-sm text-gray-600">
<strong>{latestTransaction.customer_name}</strong> made a transaction of{" "}
<span className="font-bold">

          {latestTransaction.amount} {latestTransaction.currency}
</span>
</p>
<p className="text-sm text-gray-500">

        Status: {latestTransaction.status}
</p>
<p className="text-xs text-gray-400">

        Date: {latestTransaction.transaction_date}
</p>
</div>

  );

}

 