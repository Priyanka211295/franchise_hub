import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Small from './Small';
import Today from '../routing/today/Today';
import SalesHistory from '../routing/saleHis/SalesHistory';
import Setting from '../routing/Setting/Setting';
import Charts from '../routing/Charts/Charts';
import { isAuthenticated } from '../../auth';

function Big() {
  // Check authentication
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Small />
      <div className="flex-1 p-6">
        <center>
          <h1 className="text-2xl font-bold mb-6">Welcome to Dashboard!</h1>
        </center>
        <Routes>
          <Route path="today" element={<Today />} />
          <Route path="saleHis" element={<SalesHistory />} />
          <Route path="setting" element={<Setting />} />
          <Route path="charts" element={<Charts />} />
        </Routes>
      </div>
    </div>
  );
}

export default Big;


