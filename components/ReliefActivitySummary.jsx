import Image from "next/image";
import { useState } from "react";

export default function ReliefActivitySummary({
  activity,
  image,
  progress = 75,
  goal = 5000,
  initialStatus = "active",
}) {
  const [widgetState, setWidgetState] = useState(initialStatus);

  // Handlers for hover state
  const handleHover = () => setWidgetState("hovered");
  const handleHoverOut = () => setWidgetState(initialStatus);

  // WhatsApp redirect handler
  const handleDonateClick = () => {
    const phoneNumber = "+923367000304";
    const message = `Asslam o Alikum! I want to donate in ${activity}. Please send me the account details for it.`;
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
    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Activity Image */}

      <div className="mb-4">
        <Image
          src={image}
          alt={`${activity} image`}
          className="w-full h-40 object-cover rounded-t-lg"
          width={640} // Specify the width
          height={160} // Specify the height
        />
      </div>

      {/* Activity Title */}
      <h4 className="text-lg font-medium text-gray-800 text-center mb-3">
        {activity}
      </h4>

      {/* Status Badge */}
      <span
        className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[widgetState]}`}
      >
        {statusText}
      </span>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
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
        className={`w-full text-white font-semibold py-2 rounded-lg transition-colors duration-300 ${buttonStyles[widgetState]}`}
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
  );
}
