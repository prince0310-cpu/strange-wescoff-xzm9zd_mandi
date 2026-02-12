import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = {
  Tomato: [
    { day: "Mon", price: 1800 },
    { day: "Tue", price: 2000 },
    { day: "Wed", price: 1900 },
    { day: "Thu", price: 2200 },
    { day: "Fri", price: 2100 },
    { day: "Sat", price: 2300 },
    { day: "Sun", price: 2400 },
  ],
  Potato: [
    { day: "Mon", price: 1500 },
    { day: "Tue", price: 1600 },
    { day: "Wed", price: 1550 },
    { day: "Thu", price: 1700 },
    { day: "Fri", price: 1650 },
    { day: "Sat", price: 1750 },
    { day: "Sun", price: 1800 },
  ],
  Onion: [
    { day: "Mon", price: 1200 },
    { day: "Tue", price: 1250 },
    { day: "Wed", price: 1300 },
    { day: "Thu", price: 1280 },
    { day: "Fri", price: 1350 },
    { day: "Sat", price: 1400 },
    { day: "Sun", price: 1500 },
  ],
  Cauliflower: [
    { day: "Mon", price: 1000 },
    { day: "Tue", price: 1100 },
    { day: "Wed", price: 1050 },
    { day: "Thu", price: 1200 },
    { day: "Fri", price: 1150 },
    { day: "Sat", price: 1300 },
    { day: "Sun", price: 1400 },
  ],
};

const commodities = [
  { name: "Tomato", today: 2400, yesterday: 2300 },
  { name: "Potato", today: 1800, yesterday: 1750 },
  { name: "Onion", today: 1500, yesterday: 1400 },
  { name: "Cauliflower", today: 1400, yesterday: 1300 },
];

function App() {
  const [selected, setSelected] = useState("Tomato");

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🥕 Smart Mandi Dashboard</h1>

      {/* Cards */}
      {commodities.map((item, index) => {
        const diff = item.today - item.yesterday;
        const color = diff > 0 ? "green" : diff < 0 ? "red" : "gray";

        return (
          <div
            key={index}
            onClick={() => setSelected(item.name)}
            style={{
              background: "#1e293b",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "10px",
              cursor: "pointer",
              border: selected === item.name ? "2px solid #22c55e" : "none",
            }}
          >
            <h2>{item.name}</h2>
            <h3>₹ {item.today}</h3>
            <p style={{ color }}>
              {diff > 0 ? "▲" : diff < 0 ? "▼" : "▬"} ₹ {Math.abs(diff)} from
              yesterday
            </p>
          </div>
        );
      })}

      {/* Dynamic Graph */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <h2>📈 7 Day Trend ({selected})</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData[selected]}>
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
