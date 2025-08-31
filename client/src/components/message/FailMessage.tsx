import React from "react";
import { CircleX } from "lucide-react";

export type FailMessageProps = {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
};

const FailMessage: React.FC = () => {
  const failMessages: FailMessageProps[] = [
    {
      title: "FAILED!",
      message: "Your order could not be processed. Please try again.",
      buttonText: "Retry",
      onButtonClick: () => alert("Retrying order..."),
    },
    {
      title: "UPDATE FAILED!",
      message: "Profile update failed. Please check your information.",
      buttonText: "Try Again",
      onButtonClick: () => alert("Retrying profile update..."),
    },
    {
      title: "SUBMISSION FAILED!",
      message: "Form submission failed. Server is currently unavailable.",
      buttonText: "Retry Later",
      onButtonClick: () => alert("Server unavailable, please try later."),
    },
    {
      title: "ERROR!",
      message: "Something went wrong. An unknown error occurred.",
      buttonText: "Report Issue",
      onButtonClick: () => alert("Reporting issue..."),
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {failMessages.map((msg, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl w-80 sm:w-96 text-center transition-all duration-300"
        >
          <CircleX className="w-20 h-20 mb-4 text-red-500 animate-pulse" />
          <h2 className="text-3xl font-bold mb-2 text-red-500">{msg.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{msg.message}</p>
          <button
            onClick={msg.onButtonClick}
            className="px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 bg-red-500 hover:bg-red-600"
          >
            {msg.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FailMessage;
