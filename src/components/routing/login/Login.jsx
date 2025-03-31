import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [obj, setObj] = useState({ uid: "", pwd: "" });
  const navigate = useNavigate();

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  async function doSave() {
    try {
      let url = "https://vigilant-vibrancy-production.up.railway.app/franchisees/checkuser";
      let resp = await axios.post(url, obj, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (resp.data.status) {
        localStorage.setItem('uid', obj.uid);
        alert("Login successful");
        navigate('/dashboard');
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-white w-8/12 shadow-3xl rounded-xl p-12">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); doSave(); }}>
          <input
            type="text"
            name="uid"
            onChange={doUpdate}
            placeholder="Username"
            className="w-full p-2 border rounded my-2"
            required
          />
          <input
            type="password"
            name="pwd"
            onChange={doUpdate}
            placeholder="Password"
            className="w-full p-2 border rounded my-2"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
