import React, { useEffect, useState } from "react";

export default function TransactionTable({ transactions }) {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-600">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {[
              "ID",
              "Transaction ID",
              "Code",
              "Amount",
              "Account No.",
              "Customer",
              "Phone",
              "Status",
              "Narrative",
              "Payment",
              "Credit Ref",
              "Currency",
              "Date",
              "Created",
              "Updated",
            ].map((head, i) => (
              <th key={i} className="px-4 py-2">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{t.id}</td>
              <td className="px-4 py-2">{t.transaction_id}</td>
              <td className="px-4 py-2">{t.transaction_code}</td>
              <td className="px-4 py-2">{t.amount}</td>
              <td className="px-4 py-2">{t.account_number}</td>
              <td className="px-4 py-2">{t.customer_name}</td>
              <td className="px-4 py-2">{t.phone_number}</td>
              <td className="px-4 py-2">{t.status}</td>
              <td className="px-4 py-2">{t.narrative}</td>
              <td className="px-4 py-2">{t.payment_details}</td>
              <td className="px-4 py-2">{t.credit_reference}</td>
              <td className="px-4 py-2">{t.currency}</td>
              <td className="px-4 py-2">{t.transaction_date}</td>
              <td className="px-4 py-2">{t.created_at}</td>
              <td className="px-4 py-2">{t.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
