import React from "react";
import { CircleCheck } from "lucide-react";

export type SuccessMessageProps = {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
};

const SuccessMessage: React.FC = () => {
  const successMessages: SuccessMessageProps[] = [
    {
      title: "SUCCESS!",
      message: "Your order has been confirmed.",
      buttonText: "View Details",
      onButtonClick: () => alert("Viewing details for message 1..."),
    },
    {
      title: "DONE!",
      message: "Your profile has been updated.",
      buttonText: "Go to Profile",
      onButtonClick: () => alert("Navigating to profile..."),
    },
    {
      title: "SUBMITTED!",
      message: "Your form has been submitted successfully.",
      buttonText: "Close",
      onButtonClick: () => alert("Closing form..."),
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {successMessages.map((msg, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl w-80 sm:w-96 text-center transition-all duration-300"
        >
          <CircleCheck className="w-20 h-20 mb-4 text-green-500 animate-pulse" />
          <h2 className="text-3xl font-bold mb-2 text-green-500">{msg.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{msg.message}</p>
          <button
            onClick={msg.onButtonClick}
            className="px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 bg-green-500 hover:bg-green-600"
          >
            {msg.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SuccessMessage;
