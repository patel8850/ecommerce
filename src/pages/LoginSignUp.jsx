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
    <div className="w-full h-[80vh] bg-purple-100 pt-5">
      <div className="w-[580px] h-[600px] bg-white m-auto p-10 text-2xl">
        <h2 className="font-bold mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="h-[60px] w-full border p-3 mb-4"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />
          <input
            className="h-[60px] w-full border p-3 mb-4"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            className="h-[60px] w-full border p-3 mb-4"
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
        <p className="mt-4">
          Already have an account? <span className="text-purple-600">Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSign;
