import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [obj, setObj] = useState({
    uid: "",
    pwd: ""
  });

  const navigate = useNavigate();

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  async function doSave() {
    const validCredentials = {
      uid: "admin123",
      pwd: "admin@123"
    };
    if (obj.uid !== validCredentials.uid || obj.pwd !== validCredentials.pwd) {
      alert("Invalid credentials. Access denied!");
      return;
    }
    try {
      let url = "https://vigilant-vibrancy-production.up.railway.app/admin/login";
      let resp = await axios.post(url, obj, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      console.log(resp.data);
      alert("Login Successfull");
      navigate('/application')
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div>
      <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section class="flex w-[30rem] flex-col space-y-10">
          <div class="text-center text-4xl font-medium">Log In</div>
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" name="uid" placeholder="Email or Username" onChange={doUpdate} class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" name="pwd" placeholder="Password" onChange={doUpdate} class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>
          <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" onClick={doSave}>LOG IN</button>
        </section>
      </main>
    </div>
  )
}

export default Adminlogin;
