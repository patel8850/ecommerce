import React, { useState } from "react";

const LoginSign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}! (demo login)`);
  };

  return (
    <div className=" w-full bg-purple-100 flex items-center justify-center px-3 py-6">

      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg p-5 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-4 text-base sm:text-lg focus:outline-purple-500"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />

          <input
            className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-4 text-base sm:text-lg focus:outline-purple-500"
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />

          <input
            className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-4 text-base sm:text-lg focus:outline-purple-500"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-center text-sm sm:text-base">
          Already have an account?
          <span className="text-purple-600 ml-1 cursor-pointer hover:underline">
            Login here
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginSign;
