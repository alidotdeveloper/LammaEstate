
import React from "react";
import DropDown from "./Dropdown";
import { CiSearch } from "react-icons/ci";

function Filter() {
  return (
    <>
      <div className="flex flex-col mx-2 sm:mx-16">
        <div className="flex-col ">
          <div className="text-2xl  mb-2 ">
            <h1>Search Results For</h1>
          </div>
          
          <form className="w-full">
          <div className="w-full">
            <div>
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-black "
              >
                Location
              </label>
              <div class="relative mb-6 ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none mb-9"></div>
                <input
                  type="text"
                  id="input-group-1"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                  placeholder="City Location"
                />
              </div>
            </div>
            <div className="flex w-full ">
            <DropDown name= "Type"   />
            <DropDown name= "Property"  />
            <div className="mr-2">
            <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-black "
              >
                Min Price   
              </label>
              <input type="text" placeholder= "any" className="p-2 border border-solid"></input>
              

            </div>
            <div className="mr-2">
            <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-black "
              >
                Min Price   
              </label>
              <input type="text" placeholder= "any" className="p-2 border border-solid"></input>
              

            </div>
            <div className="mr-2">
            <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-black "
              >
            Bedroom 
              </label>
              <input type="text" placeholder= "any" className="p-2 border border-solid"></input>
              
             
            </div>
            
            <div className="flex justify-center">
            <button className=" pt-2 ">
                <CiSearch color="#fece51" size={"28px"} />
              </button>
              <div>
             
            </div>
              </div>
            </div>
            </div>
           
           
          </form>
        </div>
      </div>
    </>
  );
}

export default Filter;
