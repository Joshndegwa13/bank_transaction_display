import React, { useState } from "react";
 
export default function TransactionTable({ transactions }) {

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
 
 

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
 
  // Handling page change

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

  };
 
  return (
<div className="overflow-x-auto bg-white shadow-md rounded-lg">
<table className="min-w-full text-sm text-left text-gray-600">
<thead className="bg-gray-100 text-gray-700">
<tr>

            {[
              "Transaction ID",
              "Transaction Description",
              "Amount",
              "Account No.",
              "Customer Name",
              "Phone No",
              "Status",
              "Narrative",
              "FTCR Narration",
              "Transaction Date",
              "Credit/Debit",

            ].map((head, i) => (
<th key={i} className="px-4 py-2">{head}</th>

            ))}
</tr>
</thead>
<tbody>

          {currentTransactions.map((t) => (
<tr key={t.transaction_id} className="border-b hover:bg-gray-50">
<td className="px-4 py-2">{t.transaction_id}</td>
<td className="px-4 py-2">{t.transaction_description}</td>
<td className="px-4 py-2">{t.amount}</td>
<td className="px-4 py-2">{t.account_number}</td>
<td className="px-4 py-2">{t.customer_name}</td>
<td className="px-4 py-2">{t.phone_number}</td>
<td className="px-4 py-2">{t.status}</td>
<td className="px-4 py-2">{t.narrative}</td>
<td className="px-4 py-2">{t.ftcr_narration}</td>
<td className="px-4 py-2">{t.transaction_date}</td>
<td className="px-4 py-2">{t.creditdebitflag}</td>
</tr>

          ))}
</tbody>
</table>
 
      {/* Pagination controls */}
<div className="flex justify-between items-center p-4">
<button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
>
          Prev
</button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
<button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-gray-200 font-semibold" : ""
              }`}
>
              {i + 1}
</button>
          ))}
</div>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
>
          Next
</button>
</div>
</div>
  );

}

 