import React from 'react';

const steps = [
  { number: 1, text: "Submit Intake Form" },
  { number: 2, text: "We do the search and curation for list of jobs" },
  { number: 3, text: "You approve, we do the tedious part (applying)" },
  { number: 4, text: "You get the interviews" },
];

const Work = () => {
  return (
    <div className="bg-white  p-4 lg:p-10">
      {/* Title Container */}
      <div className="text-[#0649E7]">
        <h2 className="text-4xl font-medium mb-8 text-center">
          How we work?
        </h2>
      </div>
      
      {/* Steps Container */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 mb-4">
                <span className="text-black font-bold text-4xl">{step.number}</span>
              </div>
              
              {/* Line (Using border instead of fixed div) */}
              <div className="w-6 h-px bg-blue-500 mb-4" />
              
              {/* Text */}
              <p className="text-center text-blue-500 text-lg lg:text-xl">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;