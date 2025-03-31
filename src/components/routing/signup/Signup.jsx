import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [obj, setObj] = useState({
    uid: "",
    name: "",
    mob: "",
    add: "",
    eB: "",
    since: "",
    sl: "",
    city: "",
    tarea: "",
    pincode: "",
    floor: "",
    dos: "",
    ppic: null,
    owner: "",
  });

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  function doFileChange(event) {
    setObj({ ...obj, ["ppic"]: event.target.files[0] })
    prev.src = URL.createObjectURL(event.target.files[0]);
  }

  async function doSave() {
    const url = "https://vigilant-vibrancy-production.up.railway.app/user/saveuser";
    const fd = new FormData();

    for (let prop in obj) {
      fd.append(prop, obj[prop]);
    }
    let resp = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });

    if (resp.data.status === true) {
      alert(resp.data.msg);
    } else {
      alert(resp.data.msg);
    }
  }
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full h-[175vh] bg-[#282D2D]">

      {/* Dark Mode Toggle */}
      <div className="flex flex-col items-end justify-start overflow-hidden  xl:max-w-2xl ">
        <div className="flex">
          <h3 className="text-white">Dark Mode : &nbsp;</h3>
          <label className=" relative items-center mr-5 mt-3 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
          </label>
        </div>
      </div>

      {/* Main Form */}
      <div
        className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"}  p-5 sm:p-10 rounded-md`}
      >
        <h1
          className={`text-center text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}
        >
          Personal Information
        </h1>

        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            {/* First Row - Two Textboxes */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="uid"
                placeholder="Enter your Email Id"
                onChange={doUpdate}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent  placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="name"
                placeholder="Enter your Name"
                onChange={doUpdate}
              />
            </div>

            {/* Second Row - Two Textboxes */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="mob"
                placeholder="Enter your Mobile No."
                onChange={doUpdate}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="add"
                placeholder="Enter your Address"
                onChange={doUpdate}
              />
            </div>

            {/* Business Info Section */}
            <h1 className={`text-center text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              Current Business Info (optional)
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="eB"
                placeholder="Existing Business"
                onChange={doUpdate}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="since"
                placeholder="Since (Year)"
                onChange={doUpdate}
              />
            </div>

            {/* Site Info Section */}
            <h1 className={`text-center text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              Site Info
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="sl"
                placeholder="Site Location"
                onChange={doUpdate}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="city"
                placeholder="City"
                onChange={doUpdate}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text" name="tarea"
                placeholder="Total area"
                onChange={doUpdate}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text"
                placeholder="Pincode" name="pincode"
                onChange={doUpdate}
              />
            </div>

            {/* Date of Application */}
            <div className="flex flex-col">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="text"
                placeholder="floor" name="floor"
                onChange={doUpdate}
              />
              <label className="text-sm text-gray-700">Date of Application</label>
              <input
                className={`w-full px-5 py-3 mt-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                  }`}
                type="date"
                name="dos"
                onChange={doUpdate}
              />


            </div>

            {/* File Upload Section */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex-1">
                <label className="text-sm text-gray-700">Site Picture</label>
                <input
                  className="w-full px-2 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="file"
                  name="ppic"
                  onChange={doFileChange}
                />
              </div>
              <div className="flex-1 flex justify-center items-center mt-2 sm:mt-0">
                <img
                  src=""
                  id="prev"
                  className="max-w-full max-h-[100px] object-cover"
                  alt="Preview"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 py-5">
              <div>
                Ownership &nbsp;<input
                  className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white align-top checked:border-4 checked:border-blue-600"
                  type="radio"
                  name="owner" value="Owner"
                  id="radioidthree" onChange={doUpdate}
                />
                <label className="text-gray-800" htmlFor="radioidthree">
                  Owner
                </label>
              </div>
              <div>
                <input
                  className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white  align-top checked:border-4 checked:border-blue-600  disabled:border-blue-400"
                  type="radio"
                  name="owner" value="Rented" onChange={doUpdate}
                  id="radioidfour"
                />
                <label className="text-gray-800" htmlFor="radioidfour">
                  Rented
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">


            {/* Terms and Conditions */}
            <div className="flex justify-start items-center gap-3 mb-4">
              <label className="text-sm text-gray-700 flex items-center">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                &nbsp; I agree to the Terms and Conditions.
              </label>
            </div>

            {/* Save Button */}
            <input type="button" value="Save"
              className="tracking-wide font-semibold bg-[#E9522C] text-gray-100 py-4 w-full rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
              onClick={doSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
