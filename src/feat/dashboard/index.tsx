"use client";

import { useEffect, useState } from "react";
import SummaryCard from "@/components/SummaryCard";
import OrdersTable from "@/components/OrdersTable";
import { fetchOrders } from "@/lib/api";

export default function DashboardContainer() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders()
      .then((res) => {
        if (res.error) setError(res.error);
        else setData(res);
      })
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="p-6 text-center">Loading...</p>;

  if (error)
    return <p className="p-6 text-center text-red-500">{error}</p>;

  if (!data)
    return <p className="p-6 text-center">No Data</p>;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Order Dashboard</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Orders"
          value={data.summary.totalOrders}
        />
        <SummaryCard
          title="Avg Order Value"
          value={`$${data.summary.avgOrderValue}`}
        />
        <SummaryCard
          title="Shipped Orders"
          value={data.summary.shippedOrders}
        />
      </div>

      {/* Table */}
      <OrdersTable orders={data.items} />
    </div>
  );
}