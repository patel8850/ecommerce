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
    <div className="w-full min-h-screen bg-purple-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md sm:max-w-lg md:w-[580px] bg-white p-6 sm:p-10 text-xl sm:text-2xl rounded-2xl shadow-md">
        <h2 className="font-bold mb-5 text-center sm:text-left">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="h-[55px] sm:h-[60px] w-full border p-3 mb-4 rounded-md"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />
          <input
            className="h-[55px] sm:h-[60px] w-full border p-3 mb-4 rounded-md"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            className="h-[55px] sm:h-[60px] w-full border p-3 mb-4 rounded-md"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white w-full py-3 rounded-md hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-center sm:text-left text-base sm:text-lg">
          Already have an account?{" "}
          <span className="text-purple-600 cursor-pointer hover:underline">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSign;
