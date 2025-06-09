import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [mood, setMood] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await axios.get("https://your-backend-url.com/api/logs");
      setLogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!mood) return;
    try {
      await axios.post("https://your-backend-url.com/api/logs", { mood });
      setMood("");
      fetchLogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold mb-4">DopaClean Tracker</h1>
      <input
        type="text"
        className="border p-2 w-full rounded-xl mb-4"
        placeholder="Hoe voel je je vandaag?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
      >
        Opslaan
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Jouw logs</h2>
        <ul className="space-y-2">
          {logs.map((log, i) => (
            <li key={i} className="bg-gray-100 p-3 rounded-xl">
              {log.date}: {log.mood}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
