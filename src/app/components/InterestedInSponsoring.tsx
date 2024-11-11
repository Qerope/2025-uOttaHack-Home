import React from "react";
import useInView from "../hooks/useInView";

const InterestedInSponsoring = () => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <section className="w-full min-h-screen  overflow-hidden bg-[#ffffff] ">
      <div className="  z-2 flex h-full w-full items-center  bg-[rgba(255,255,255,1)]">
        <div className="relative w-full">
          <div className="flex flex-col  w-full">
            <div className="w-full">
              <div
                className=" w-full  md:pt-[10%]  pt-28"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 30%, rgba(54, 106, 207, 1) 0%)",
                  backgroundPosition: "bottom",
                  backgroundSize: "50px 4px",
                  backgroundRepeat: "repeat-x",
                }}
              ></div>
            </div>
            <div className="flex flex-col w-full md:flex-row  md:items-center">
              <div className="flex font-jost flex-col md:w-1/2  p-[10%] space-y-10  text-center md:text-left ">
                <div
                  ref={ref}
                  className={`flex flex-col pt-10  md:pt-0  md:p-0 w-full font-bold text-[rgba(9,94,174,1)]  leading-tighter ${
                    isInView
                      ? "  animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-linear"
                      : ""
                  }`}
                  style={{
                    fontSize: "clamp(2rem, 3vw, 5rem)",
                  }}
                >
                  <p>INTERESTED IN</p>
                  <p>SPONSORING?</p>
                </div>
                <div
                  ref={ref}
                  className={` md:space-y-10 pb-10  ${
                    isInView
                      ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                      : ""
                  }`}
                >
                  <p
                    className="text-[rgba(54,106,207,1)] pb-5 leading-tight font-light text-center md:text-left"
                    style={{ fontSize: "clamp(0.7rem, 2vw, 1.3rem)" }}
                  >
                    Over the past 7 years, our sponsors have made it possible
                    for 2700+ developers, designers, product managers, and
                    dreamers to turn their ideas into a reality.
                  </p>
                  <p
                    className="text-[rgba(54,106,207,1)] text-base font-light h-full leading-tight text-center md:text-left"
                    style={{ fontSize: "clamp(0.7rem, 2vw, 1.3rem)" }}
                  >
                    uOttaHack would not be possible without the support and
                    generosity of our amazing sponsors. Join us in person for a
                    weekend of fun, creativity, and innovation!
                  </p>
                  <button
                    className="bg-[#366ACF] hover:bg-[rgba(9,94,174,0.9)] text-white rounded-xl font-jose  justify-center items-center text-sm md:text-2xl w-2/3 mt-10 md:mt-0"
                    onClick={(e) =>
                      (window.location.href = "mailto:sponsorship@uottahack.ca")
                    }
                  >
                    Get in touch!
                  </button>
                </div>
              </div>
              <div className="md:w-1/2  m-1 md:m-10 h-full pb-10">
                <p className="flex w-full justify-end font-light text-md md:text-2xl italic text-[#686868]  font-jost">
                  Want to see a glimpse into uOttaHack?{" "}
                </p>

                <div className="w-full  p-1 md:p-3 bg-[#366ACF] h-full rounded-2xl flex md:items-center md:justify-center">
                  <div className="relative w-full md:w-[60vw] h-[30vh] md:h-[60vh]">
                    <iframe
                      className=" w-full rounded-2xl h-full"
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
      </div>
    </section>
  );
};

export default InterestedInSponsoring;
