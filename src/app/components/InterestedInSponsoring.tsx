import React from "react";

const InterestedInSponsoring = () => {
  return (
    <div className="flex min-h-[700px] w-full items-center justify-center p-12 bg-[rgba(255,255,255,1)]">
      <div className="flex gap-20 items-center">
        <div className="flex flex-col max-w-md space-y-6 font-['Jost']"> 
          <div className="text-[2.5rem] font-bold text-[rgba(9,94,174,1)] leading-tight" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            INTERESTED IN
            <br />
            SPONSORING?
          </div>
          <div className="space-y-4">
            <p className="text-[rgba(54,106,207,1)] text-lg">
              Over the past 7 years, our sponsors have made it <br /> possible for 2700+
              developers, designers, <br /> product managers, and dreamers to turn their <br /> 
              ideas into a reality.
            </p>
            <p className="text-[rgba(54,106,207,1)] text-lg">
              uOttaHack would not be possible without the <br /> support and generosity
              of our amazing sponsors. <br /> Join us in person for a weekend of fun,
              creativity, <br /> and innovation!
            </p>
          </div>
          <button className="bg-[rgba(54,106,207,1)] hover:bg-[rgba(54,106,207,0.9)] text-white py-3 px-16 rounded text-lg w-fit"> {/* Increased padding for a longer button */}
            Get in touch!
          </button>
        </div>

        <div className="w-[600px] h-[380px] bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Video Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default InterestedInSponsoring;
