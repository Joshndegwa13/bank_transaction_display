import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Notification from "./components/Notifications";
import TransactionTable from "./components/TransactionTable";
import ExportButton from "./components/ExportButton";
import SearchBar from "./components/SearchBar";
import FilterControls from "./components/FilterControls";
 
export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // state for search and filters

  const [searchTerm, setSearchTerm] = useState(""); // pure string search
  const [filters, setFilters] = useState({

    startDate: "", 
    endDate: "",   
    time: "",      

  });
 
  useEffect(() => {
    axios

      .get("https://finsync.liquidtelecom.co.ke/api/transactions")
      .then((res) => {
        setTransactions(res.data.data);
        setLoading(false);
      })

      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions.");
        setLoading(false);
      });

  }, []);
 
  const latestTransaction = transactions[0];
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = searchTerm
      ? Object.values(txn).some(
          (val) =>
            val &&
            typeof val === "string" &&
            val.toLowerCase().includes(searchTerm.toLowerCase())

        )

      : true;
    const txnDate = new Date(txn.transaction_date);
    const txnDateStr = txnDate.toISOString().slice(0, 10); // YYYY-MM-DD
 
    // Date range filter
    const matchesStartDate = filters.startDate
      ? txnDateStr >= filters.startDate
      : true;
    const matchesEndDate = filters.endDate
      ? txnDateStr <= filters.endDate
      : true;
 
    // Time filter
    const matchesTime = filters.time
      ? txnDate.toTimeString().slice(0, 5) === filters.time
      : true;

    return (
      matchesSearch &&
      matchesStartDate &&
      matchesEndDate &&
      matchesTime

    );

  });
 
  return (
<div className="min-h-screen bg-gray-50">
<Header />
<main className="container mx-auto px-4 py-6">
<Notification latestTransaction={latestTransaction} />
 
        {transactions.length > 0 && (
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
<SearchBar onSearch={setSearchTerm} />
<FilterControls onFilterChange={setFilters} />
</div>
        )}
        {loading ? (
<p className="text-gray-600">Loading transactions...</p>

        ) : error ? (
<p className="text-red-500">{error}</p>

        ) : (
<>
<TransactionTable transactions={filteredTransactions} />
<ExportButton transactions={filteredTransactions} />
</>
        )}
</main>
</div>
  );

}

 