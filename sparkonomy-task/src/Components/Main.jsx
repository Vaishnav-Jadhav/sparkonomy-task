import React from "react";

export function Main() {
  return (
    <div className="w-full bg-white">
      <main className="flex flex-col items-center justify-center px-4 py-13">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#e9ecef] rounded-2xl shadow-md p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200">
          <div className="w-16 h-16 flex items-center justify-center border-4 border-purple-400 rounded-full mb-4 cursor-pointer">
            <span className="text-purple-600 text-3xl font-bold">+</span>
          </div>
          <h2 className="text-xl md:text-4xl font-semibold text-purple-600">
            Create New Invoice
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Start by creating and sending new invoice
          </p>
        </div>
      </main>
    </div>
  );
}
