import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { format } from "date-fns";

const Charts = () => {
    const [uid, setUid] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
      const storedUid = localStorage.getItem("uid");
      if (storedUid) {
          setUid(storedUid);
      }
  }, []);
  
  useEffect(() => {
      if (uid && startDate && endDate) {
          fetchSalesData();
      }
  }, [uid, startDate, endDate]);
  
    const fetchSalesData = async () => {
      if (!uid) {
          console.warn("UID not set yet. Waiting before fetching sales data.");
          return;
      }
  
      if (!startDate || !endDate) {
          alert("Please select a start and end date.");
          return;
      }
  
      try {
          const response = await axios.get("https://franchise-production-454a.up.railway.app/franData/sales", {
              params: { uid, startDate, endDate },
          });
  
          console.log("Fetched Sales Data:", response.data); // Debug API response
  
          if (Array.isArray(response.data) && response.data.length > 0) {
              const formattedData = response.data.map(item => ({
                  date: item.date, // Use the date directly from backend
                  sale: item.sale || 0, 
                  cust: item.cust || 0
              }));
  
              console.log("Formatted Data for Chart:", formattedData); // Debug formatted data
  
              setSalesData(formattedData);
          } else {
              setSalesData([]);
              console.warn("No sales data found for this UID and date range.");
          }
      } catch (error) {
          console.error("Error fetching sales data:", error);
          setSalesData([]);
      }
  };
  
  
    return (
        <div>
          <br></br>
            <i><u><h2>Sales Data Chart</h2></u></i>
            <div className="text-center">
              <label>Start Date: </label>
                <input
                    type="date"
                    value={startDate} className="border border-gray-300 rounded-md p-2"
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label className="ml-8">End Date: </label>
                <input
                    type="date"
                    value={endDate}  className="border border-gray-300 rounded-md p-2"
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <br></br><br></br>
            <ResponsiveContainer width="100%" height={400}>
                {salesData.length > 0 ? (
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray=" 3" />
                        
                        <XAxis  dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sale" stroke="#8884d8" />
                    </LineChart>
                ) 
                : (
                    <center>
                    <p>No sales data available</p>
                    </center>
                )
                }
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;
