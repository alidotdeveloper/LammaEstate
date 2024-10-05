import React, { useState } from "react";
import BG from "../assets/images/bg.png";
import Search from "../assets/images/search.png";
import { CiSearch } from "react-icons/ci";
import './Header.css';
function Hero() {
  const [text, setText] = useState("buy");
  return (
    <>
      <section class="text-gray-600 body-font flex ">
        <div class=" mx-auto  px-12 py-14    max-w-screen-xl xl:flex items-end md:py-10 header ">
          <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16   md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:flex-col">
            <h1 class="title-font sm:text-6xl text-4xl md:text-8xl mb-4  text-black font-lg font-semibold xl:text-6xl">
              Find Real Estate & Get Your Dream Place
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex ">
              <button
                onClick={() => setText("buy")}
                class={`inline-flex text-${
                  text === "buy" ? "white" : "black"
                }   bg-${
                  text === "buy" ? "[#fece51]" : "gray-200"
                } border-0 py-2 px-6 focus:outline-none  rounded text-md  text-black`}
              >
                Buy
              </button>
              <button
                onClick={() => setText("rent")}
                class={` inline-flex  text-${
                  text === "rent" ? "white" : "black"
                }  bg-${
                  text === "rent" ? "[#fece51]" : "gray-300"
                } border-0 py-2 px-6 focus:outline-none  rounded text-md `}
              >
                Rent
              </button>
            </div>
            <div className=" border border-solid border-black p-5 flex  ">
              <input
                type="text"
                name="city"
                placeholder="City Location"
                className="p-0.5 text-black"
              />
              <input
                type="text"
                name="city"
                placeholder="Min Price"
                className="p-0.5 text-black"
              />
              <input
                type="text"
                name="city"
                placeholder="Max Price"
                className="p-0.5 text-black"
              />
              <button>
                <CiSearch color="#fece51" size={"28px"} />
              </button>
            </div>
            <div className="flex  py-10">
              <div className="mx-6 ">
                <h1 className="text-black text-3xl font-semi-bold font-md font-bold font-poppins">
                  16+{" "}
                </h1>
                <p>Years of Experience</p>
              </div>
              <div className="mx-6">
                <h1 className="text-black text-3xl font-semi-bold font-md font-bold">
                  200+{" "}
                </h1>
                <p>Award gained</p>
              </div>
              <div className="mx-6">
                <h1 className="text-black text-3xl font-semi-bold font-md font-bold">
                  1200+{" "}
                </h1>
                <p>Property Ready</p>
              </div>
            </div>
          </div>

          <div class="hidden xl:block">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={BG}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
