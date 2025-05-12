import React from "react";
import Image from "next/image";
import { useState } from "react";
import ResponsiveCarousel from "./ResponsiveCarousel";

const ReliefActivityFull = ({
  title,
  description,
  images,
  progress,
  goal,
  initialStatus,
}) => {
  const [widgetState, setWidgetState] = useState(initialStatus);

  // Handlers for hover state
  const handleHover = () => setWidgetState("hovered");
  const handleHoverOut = () => setWidgetState(initialStatus);

  // WhatsApp redirect handler
  const handleDonateClick = () => {
    const phoneNumber = "+923367000304";
    const message = `Asslam o Alikum! I want to donate in ${title}. Please send me the account details for it.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Dynamic styles based on widget state
  const statusStyles = {
    active: "bg-green-100 text-green-800",
    urgent: "bg-red-100 text-red-800 animate-pulse",
    goalReached: "bg-blue-100 text-blue-800",
    closed: "bg-gray-100 text-gray-800",
    hovered: "bg-green-100 text-green-800",
  };

  const progressStyles = {
    active: "bg-green-600",
    urgent: "bg-red-600 animate-pulse",
    goalReached: "bg-blue-600",
    closed: "bg-gray-600",
    hovered: "bg-green-600",
  };

  const buttonStyles = {
    active: "bg-green-600 hover:bg-green-700",
    urgent: "bg-red-600 hover:bg-red-700",
    goalReached: "bg-blue-600 cursor-not-allowed",
    closed: "bg-gray-600 cursor-not-allowed",
    hovered: "bg-green-600 hover:bg-green-700",
  };

  // Dynamic content based on state
  const currentProgress = widgetState === "goalReached" ? 100 : progress;
  const isButtonDisabled = ["goalReached", "closed"].includes(widgetState);
  const buttonText = widgetState === "goalReached" ? "Goal Met" : "Donate Now";
  const statusText =
    widgetState === "urgent"
      ? "Urgent"
      : widgetState === "goalReached"
      ? "Goal Reached"
      : widgetState === "closed"
      ? "Closed"
      : "Active";
  const tooltipText = `Helped ${Math.floor(
    currentProgress * 4
  )} families so far.`;

  return (
    <div className="mx-4 sm:mx-8 lg:mx-auto flex  mb-4 sm:mb-8 max-w-[1000px] flex-col-reverse rounded-lg shadow-md bg-white p-4 md:flex-row">
      <div id="content" className="py-4 px-2 sm:p-8 basis-[60%]">
        {/* Activity Title */}
        <h3 className="text-2xl uppercase font-semibold text-gray-800 text-center mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-800">{description}</p>

        {/* Status Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[widgetState]}`}
        >
          {statusText}
        </span>

        {/* Progress Bar */}
        <div className="w-full max-w-[400px] mx-auto bg-gray-200 rounded-full h-2.5 my-4">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${progressStyles[widgetState]}`}
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 text-center mb-4">
          {currentProgress}% of ${goal.toLocaleString()} goal
        </p>

        {/* Donate Button */}
        <button
          onClick={handleDonateClick}
          className={`w-full block max-w-[300px] mx-auto text-white font-semibold py-2 rounded-lg transition-colors duration-300 ${buttonStyles[widgetState]}`}
          disabled={isButtonDisabled}
        >
          {buttonText}
        </button>

        {/* Tooltip on Hover */}
        {widgetState === "hovered" && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white text-sm p-4 rounded-2xl flex items-center justify-center transition-opacity duration-300">
            {tooltipText}
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="basis-[40%]">
        <ResponsiveCarousel images={images} />
      </div>
    </div>
  );
};

export default ReliefActivityFull;
