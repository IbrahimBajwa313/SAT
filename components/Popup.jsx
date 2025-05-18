import React, { useEffect } from "react";

const Popup = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000); // auto close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg px-6 py-3 shadow-lg transition-all duration-300
      ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {message}
    </div>
  );
};

export default Popup;
