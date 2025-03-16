// import React from 'react';
// import Small from '../axioss/Small';
// // import Small from '../routing/sidebar/Small';
// import { Outlet } from 'react-router-dom';

// function DashboardLayout() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Small />
//       <div className="flex flex-col flex-1 overflow-y-auto p-4">
//         <Outlet /> {/* This ensures the clicked component (e.g., Today) appears here */}
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

import React from 'react';
import Small from '../axioss/Small';
import Today from '../routing/today/Today';

import { Outlet } from 'react-router-dom';
import Big from '../axioss/Big';

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Small />
      <div className="flex flex-col flex-1 overflow-y-auto p-4">
        <h1>jkjj</h1>
        {/* <Big/> */}
      
        {/* <Big/> */}
        <Outlet /> {/* This ensures nested routes (Big, Today, SalesHistory, etc.) render correctly */}
        {/* <Route path="/today" element={<Today />} /> */}
      </div>
    </div>
  );
}

export default DashboardLayout;


