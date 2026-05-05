"use client";

import { useState } from "react";

export default function OrdersTable({ orders }: any) {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = orders.filter((o: any) =>
    o.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="bg-white p-4 rounded-2xl shadow border">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="border px-4 py-2 rounded"
        >
          Sort Price {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Shipping</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center p-4">
                No orders found
              </td>
            </tr>
          ) : (
            sorted.map((order: any) => (
              <tr key={order.id} className="text-center border-t">
                <td>{order.id}</td>
                <td>{order.title}</td>
                <td>${order.price}</td>
                <td>${order.shippingCost}</td>
                <td>
                  <span
                    className={
                      order.status === "Shipped"
                        ? "text-green-600"
                        : order.status === "Processing"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                  >
                    {order.status}
                  </span>
                </td>
                <td>${order.totalCost}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}