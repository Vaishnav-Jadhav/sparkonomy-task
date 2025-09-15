import React from "react";

const statusStyles = {
  Unpaid: "bg-gray-100 text-gray-600",
  Disputed: "bg-red-100 text-red-600",
  Paid: "bg-green-100 text-green-600",
  Overdue: "bg-pink-100 text-pink-600",
  Awaited: "bg-yellow-50 text-yellow-500",
  Draft: "bg-gray-200 text-gray-500",
};

const invoices = [
  {
    id: 1,
    title: "Client Name",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Update",
    isButton: true,
  },
  {
    id: 2,
    title: "Client Name",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Unpaid",
  },
  {
    id: 3,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Disputed",
  },
  {
    id: 4,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Paid",
  },
  {
    id: 5,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Paid",
  },
  {
    id: 6,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Partially Paid",
  },
  {
    id: 7,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Paid",
  },
  {
    id: 8,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Overdue",
    icon: "🔔",
  },
  {
    id: 9,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Awaited",
  },
  {
    id: 10,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Draft",
    icon: "✏️",
  },
  {
    id: 11,
    title: "Income Trend",
    amount: "₹1,25,000",
    due: "2024-06-15",
    status: "Paid",
  },
];

export function Invoices() {
  return (
    <section className="w-full px-4 py-6">
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4 w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-700 font-semibold">Your Invoices</h3>
          <button className="text-gray-500 text-lg">▾</button>
        </div>

        <div className="space-y-3">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex justify-between items-center bg-white rounded-xl border border-gray-200 px-4 py-3 shadow-sm hover:shadow-md transition">
              <div>
                <h4 className="text-gray-800 font-medium">{invoice.title}</h4>
                <p className="text-sm text-gray-500">
                  {invoice.amount}, Due: {invoice.due}
                </p>
              </div>

              <div>
                {invoice.isButton ? (
                  <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-purple-700 transition">
                    Update Status ▾
                  </button>
                ) : (
                  <span className={`px-3 py-1 text-sm rounded-lg font-medium ${statusStyles[invoice.status]}`}>
                    {invoice.status} {invoice.icon && <span>{invoice.icon}</span>}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
