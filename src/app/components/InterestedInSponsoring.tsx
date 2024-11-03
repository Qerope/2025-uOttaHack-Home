import React from "react";

const InterestedInSponsoring = () => {
  return (
    <main className="w-full min-h-screen bg-[#ffffff]">
      <div className=" absolute z-2 flex h-full w-full items-center  bg-[rgba(255,255,255,1)]">
        <div className="relative w-full">
          <div className="flex flex-col w-full md:flex-row  md:items-center">
            <div className="flex flex-col md:w-1/2  p-[10%] space-y-10 font-['Jost'] text-center md:text-left ">
              <div
                className="   flex flex-col   w-full font-bold text-[rgba(9,94,174,1)]  leading-tighter "
                style={{
                  fontSize: "clamp(2rem, 3vw, 5rem)",
                }}
              >
                <p>INTERESTED IN</p>
                <p>SPONSERING?</p>
              </div>
              <div className="md:space-y-10 pb-10 ">
                <p
                  className="text-[rgba(54,106,207,1)] pb-5 leading-tight font-light text-center md:text-left"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 5rem)" }}
                >
                  Over the past 7 years, our sponsors have made it possible for
                  2700+ developers, designers, product managers, and dreamers to
                  turn their ideas into a reality.
                </p>
                <p
                  className="text-[rgba(54,106,207,1)] text-base font-light  leading-tight text-center md:text-left"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 5rem)" }}
                >
                  uOttaHack would not be possible without the support and
                  generosity of our amazing sponsors. Join us in person for a
                  weekend of fun, creativity, and innovation!
                </p>
                <button className="bg-[rgba(9,94,174,1)] hover:bg-[rgba(9,94,174,0.9)] text-white  rounded-xl text-3xl w-fit mt-10 md:mt-0">
                  Get in touch!
                </button>
              </div>
            </div>
            <div className="md:w-1/2  m-1 md:m-10">
              <div className="w-full bg-blue-400 p-1 md:p-1 h-full rounded-lg flex md:items-center md:justify-center">
                <div className="relative w-full h-[30vh] md:h-[60vh]">
                  <iframe
                    className=" w-full h-full"
                    src="https://www.youtube.com/embed/8A1UI3aGjSE"
                    title="uOttaHack 6 Recap"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InterestedInSponsoring;
