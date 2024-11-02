import React from "react";

const InterestedInSponsoring = () => {
  return (
    <div className="flex min-h-[700px] w-full items-center justify-center p-6 md:p-12 bg-[rgba(255,255,255,1)]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
        <div className="flex flex-col max-w-md space-y-6 font-['Jost']"> 
          <div 
            className="text-2xl md:text-[2.5rem] font-bold text-[rgba(9,94,174,1)] leading-tight text-center md:text-left" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            INTERESTED IN
            <br />
            SPONSORING?
          </div>
          <div className="space-y-4">
            <p className="text-[rgba(54,106,207,1)] text-base md:text-lg text-center md:text-left">
              Over the past 7 years, our sponsors have made it <br className="hidden md:block" /> possible for 2700+
              developers, designers, <br className="hidden md:block" /> product managers, and dreamers to turn their <br className="hidden md:block" /> 
              ideas into a reality.
            </p>
            <p className="text-[rgba(54,106,207,1)] text-base md:text-lg text-center md:text-left">
              uOttaHack would not be possible without the <br className="hidden md:block" /> support and generosity
              of our amazing sponsors. <br className="hidden md:block" /> Join us in person for a weekend of fun,
              creativity, <br className="hidden md:block" /> and innovation!
            </p>
          </div>
          <button className="bg-[rgba(9,94,174,1)] hover:bg-[rgba(9,94,174,0.9)] text-white py-3 px-16 rounded text-lg w-fit mx-auto md:mx-0">
            Get in touch!
          </button>
        </div>

        <div className="w-full md:w-[600px] h-[250px] md:h-[380px] bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Video Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default InterestedInSponsoring;