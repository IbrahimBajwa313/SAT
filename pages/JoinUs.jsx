import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Popup from "@/components/Popup";

const JoinUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setPopup({ message: "Your message has been sent!", type: "success" });

      setFormData({
        name: "",
        phone: "",
        city: "",
        message: "",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Email send error:", error);
      setPopup({ message: "Failed to send message.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-white min-h-screen items-center justify-center">
      {popup.message && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ message: "", type: "" })}
        />
      )}

      <div className="w-full max-w-lg rounded-lg p-8 shadow-xl ">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Join Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded bg-gray-200 p-2 text-gray-800 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="mb-2 block text-gray-800">
              Phone:
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded bg-gray-200 p-2 text-gray-800 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="mb-2 block text-gray-800">
              City:
            </label>
            <input
              type="city"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full rounded bg-gray-200 p-2 text-gray-800 focus:outline-none"
            />
          </div>

          {/* Message Area */}
          <div className="mb-6">
            <label htmlFor="city" className="mb-2 block text-gray-800">
              Message:
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded bg-gray-200 p-2 text-gray-800 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded px-4 py-2 text-white transition-colors duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
