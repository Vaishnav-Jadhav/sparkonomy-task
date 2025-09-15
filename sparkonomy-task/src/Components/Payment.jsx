import React from "react";

export function Payment() {
  return (
    <section className="w-full px-4 py-6 flex flex-col items-center">
      <p className="text-purple-600 text-sm md:text-base text-center mb-6">
        Or Upload an existing invoice and set payment reminder
      </p>
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4 lg:p-8 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-700 font-medium">Time Period</h3>
          <span className="text-gray-400 text-sm">dd:mm:yyyy - dd:mm:yyyy</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-purple-400 hover:bg-purple-400 hover:text-purple-600 text-sm cursor-pointer">
            1Month
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:border-purple-400 hover:bg-purple-400 hover:text-purple-600 cursor-pointer">
            3Months
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:border-purple-400 hover:bg-purple-400 hover:text-purple-600 cursor-pointer">
            1Year
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 flex items-center justify-center cursor-pointer">
            📅 Custom
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-6">
        <h3 className="text-gray-700 font-medium mb-2">Total Earnings</h3>
        <p className="text-2xl font-bold text-purple-700">$1,25,000</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4">
          <h3 className="text-gray-700 font-medium mb-2">Payment Awaited</h3>
          <p className="text-xl font-bold text-purple-600">$25,000</p>
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4">
          <h3 className="text-gray-700 font-medium mb-2">Payment Overdue</h3>
          <p className="text-xl font-bold text-purple-600">$25,000</p>
        </div>
      </div>
    </section>
  );
}
