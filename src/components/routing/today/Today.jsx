import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Today = () => {
  const [obj, setObj] = useState({ uid: "", dos: "", sale: "", cust: "" });

  // Load UID from localStorage on component mount
  useEffect(() => {
    const storedUid = localStorage.getItem("uid");
    if (storedUid) {
      setObj((prev) => ({ ...prev, uid: storedUid }));
    }
  }, []);

  // Handle input changes
  function doUpdate(event) {
    const { name, value } = event.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  }

  // Save today's sales data
  async function doSave() {
    let url = "https://vigilant-vibrancy-production.up.railway.app/franData/save";

    const formData = new URLSearchParams();
    Object.entries(obj).forEach(([key, value]) => formData.append(key, value));

    try {
      let resp = await axios.post(url, formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      alert(resp.data.msg);
    } catch (error) {
      console.error("Error", error);
      alert("Failed. Please try again.");
    }
  }

  return (

    <div className="max-w-sm mx-auto p-4 bg-white shadow rounded-lg mt-11">

      <h2 className="text-xl font-bold mb-4">Today's Sales</h2>

      <label className="block mb-2">Email Id</label>
      <input type="text" name="uid" value={obj.uid} readOnly className="w-full p-2 border rounded-lg mb-3 bg-gray-200" />

      <label className="block mb-2">Date:</label>
      <input type="date" name="dos" onChange={doUpdate} className="w-full p-2 border rounded-lg mb-3" />

      <label className="block mb-2">Total Sales:</label>
      <input type="number" name="sale" onChange={doUpdate} className="w-full p-2 border rounded-lg mb-3" />

      <label className="block mb-2">Total Customers Visited:</label>
      <input type="number" name="cust" onChange={doUpdate} className="w-full p-2 border rounded-lg mb-3" />

      <input type="button" value="Save" onClick={doSave} className="w-full bg-blue-600 text-white p-2 rounded-lg" />
    </div>
  );
};

export default Today;

