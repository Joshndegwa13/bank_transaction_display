import React from "react";
// converting the transaction into CSV and triggering download
export default function ExportButton({ transactions }) {
  const exportToCSV = () => {
    const headers = Object.keys(transactions[0]).join(",");
    const rows = transactions
      .map((t) => Object.values(t).map((val) => `"${val}"`).join(","))
      .join("\n");

    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportToCSV}
      className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-md shadow hover:opacity-90"
    >
      Export to CSV
    </button>
  );
}
