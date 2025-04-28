import React from 'react';

const steps = [
  { number: 1, text: "Submit Intake Form", width: 231, height: 157 },
  { number: 2, text: "We do the search and curation for list of jobs", width: 267, height: 184 },
  { number: 3, text: "You approve, we do the tedious part (applying)", width: 282, height: 184 },
  { number: 4, text: "You get the interviews", width: 260, height: 157 },
];

const Work = () => {
  return (
    <div className=" bg-white min-h-screen flex flex-col">
      {/* Title Container */}
      <div className="text-[#0649E7] p-10">
        <h2 className="text-4xl font-medium mb-16 ml-40">
          How we work?
        </h2>
      </div>
      
      {/* Steps Container */}
      <div className="mt-20 flex justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-[${step.width}px] h-[${step.height}px] flex flex-col items-center`}
          >
            {/* Number Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500">
              <span className="text-black font-bold text-4xl">{step.number}</span>
            </div>
            
            {/* Line */}
            <div className="w-24 h-0.5 bg-blue-500 mt-1.5"></div>
            
            {/* Text */}
            <p className="text-center text-blue-500 mt-2.5 text-lg">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;