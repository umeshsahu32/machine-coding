import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <div
          className={`w-2 h-2 border-r-2 border-t-2 border-slate-700 transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-[135deg]" : "rotate-[45deg]"
          } `}
        ></div>
      </button>
      <div
        className={`grid text-sm transition-all duration-300 ease-in-out text-gray-500 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[-0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      title: "Do you prefer Android or iOS",
      answer: "I like to use iOS products",
    },
    {
      id: 2,
      title: "Do you prefer writing CSS or Tailwind?",
      answer: "I like to use Tailwind",
    },
    {
      id: 3,
      title: "Firebase or Supabase?",
      answer: "I am using Supabase!",
    },
  ];

  return (
    <div className="bg-blue-50 flex flex-col items-center gap-10 p-10 min-h-screen">
      <h3 className="text-3xl font-bold text-blue-800">FAQs</h3>
      <div className="bg-gray-300 p-10 rounded-lg w-[50%]">
        {faqs.map((item) => {
          return (
            <Accordion key={item.id} title={item.title} answer={item.answer} />
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
