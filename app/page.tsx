// pages/index.js
"use client";

import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <DatePicker />
    </div>
  );
}
