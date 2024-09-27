import React, { useState } from "react";

const FAQ = ({ curData , onToggle, isActive}) => {
  const {answer, question } = curData;

  return (
    <div className="flex flex-col p-5 border-l-2 bg-slate-700 ">
      <div className="flex justify-between max-sm:gap-2 max-sm:flex-col-reverse items-center">
        <p className="text-xl font-bold">{question}</p>
        <button
          className={`button ${isActive && "bg-red-500"}`}
          onClick={onToggle}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <div>
        {isActive && (
          <p className="mt-3 text-lg leading-normal">{answer}</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
