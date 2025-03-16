import React from 'react';
// import { IoBarChartSharp } from "react-icons";
// import { IoBarChartSharp } from "react-icons/io5";
// import { IoBriefcaseSharp } from "react-icons";
function Franchise_dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <!-- sidebar --> */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 gap-10 rounded-2xl">
            <div>
              <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Dashboard
              </a>
            </div>
            <div className="flex flex-col flex-1 gap-3">
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl  cursor-pointer ">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
             </svg>
            <input type="button" value="Today's Sale" className="bg-transparent text-gray-100 cursor-pointer" />
            </label>

              {/* <IoBarChartSharp value="hi">hiii</IoBarChartSharp> */}
              <label className="flex items-center px-4 py-2 mt-2 text-gray-100  hover:bg-opacity-25 rounded-2xl cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style={{ marginRight: '8px' }}>
    <path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
  </svg>
  <input type="button" value="Sales History" className="bg-transparent text-gray-100 cursor-pointer" />
</label>

<label className="flex items-center px-4 py-2 mt-2 text-gray-100  hover:bg-opacity-25 rounded-2xl cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
  </svg>
  <input type="button" value="Charts" className="bg-transparent text-gray-100 cursor-pointer" />
</label>

<label className="flex items-center px-4 py-2 mt-2 text-gray-100  hover:bg-opacity-25 rounded-2xl cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.5 10.5 0 0 0 12 1.5zm0 18a7.5 7.5 0 1 1 7.5-7.5a7.5 7.5 0 0 1-7.5 7.5zm0-13.5a6 6 0 1 0 6 6a6 6 0 0 0-6-6zm0 10.5a4.5 4.5 0 1 1 4.5-4.5a4.5 4.5 0 0 1-4.5 4.5z" />
  </svg>
  <input type="button" value="Settings" className="bg-transparent text-gray-100 cursor-pointer " />
</label>
 
              {/* <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20m5-9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-2 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M9 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2" />
                </svg>
                Comments
              </a> */}
            </div>
          </nav>
        </div>
      </div>

      {/* <!-- Main content --> */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            {/* Removed search input box */}
          </div>
          {/* <!-- notification --> */}
          <div className="flex items-center space-x-4 mr-4">
            {/* <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z" />
                <path fill="currentColor" fillRule="evenodd" d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.876 8.876 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25" clipRule="evenodd" />
                <path fill="currentColor" d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072" />
              </svg>
            </a> */}
            {/* <!-- parametre --> */}
            {/* <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
              </svg>
            </a> */}
            {/* <!-- logout --> */}
            <a href="#"  className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
              </svg>
              <span className="font-bold">Logout</span>
            </a>
          </div>
        </div>

        {/* <div className="p-4"> */}
          {/* <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1> */}
          {/* <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Franchise_dashboard;
