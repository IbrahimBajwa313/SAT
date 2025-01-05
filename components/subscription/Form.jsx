import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="form">
      <div className="mb-8 text-center flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-bold text-[#22C55E] ">
          Subscription Form
        </h2>
        <p className="text-gray-600 font-light">Fill the form to Subscribe</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto w-[100%]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
               Phone Number
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              How much you can monthly donate
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white p-3 rounded-lg hover:bg-[#1da44e] transition"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Submitted successfully. <br /> We will get back to you.
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
