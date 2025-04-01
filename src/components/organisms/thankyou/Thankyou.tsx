import { ThankYou } from "@/assets/images";
import React from "react";

const Thankyou: React.FC = () => {
  return (
    <div className="flex flex-col  text-center py-20 px-6">
      <div className="flex flex-col items-center">
        <img
          src={ThankYou}
          alt="Thank you check icon"
          className="w-20 h-20 mb-6"
        />

        <h1 className="text-2xl font-bold text-marine-blue mb-3">Thank you!</h1>
      </div>

      <p className="max-w-lg mx-auto text-center text-lg text-gray-500 leading-relaxed break-words">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thankyou;
