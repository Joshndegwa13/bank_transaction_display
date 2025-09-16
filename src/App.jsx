import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Notification from "./components/Notifications";
import TransactionTable from "./components/TransactionTable";
import ExportButton from "./components/ExportButton";


export default function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions.json once
  useEffect(() => {
    fetch("/src/data/transactions.json")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const latestTransaction = transactions[transactions.length - 1];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Notification latestTransaction={latestTransaction} />
        {transactions.length > 0 ? (
          <>
            <TransactionTable transactions={transactions} />
            <ExportButton transactions={transactions} />
          </>
        ) : (
          <p className="text-gray-600">Loading transactions...</p>
        )}
      </main>
    </div>
  );
}
