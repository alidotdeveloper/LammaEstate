import React, { useContext } from "react";
import PIN from "../assets/images/pin.png";
import USER from "../assets/images/user.png";
import UTILITY from "../assets/images/settings.png";
import PET from "../assets/images/pawprint.png";
import BED from "../assets/images/bed.png";
import BATH from "../assets/images/bath.png";
import INCREASE from "../assets/images/increase.png";

import FEE from "../assets/images/assets.png";
import Map from "../Components/Map";
import { AuthContext } from "../Context/Auth";

function Single() {
  const { postInfo, userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container mx-auto flex flex-wrap lg:flex-nowrap space-x-6">
        <div class="lg:w-3/5 w-full flex flex-col space-y-4">
          <div class="flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-full w-full lg:h-full h-5/6 object-cover object-center rounded p-1"
              src={postInfo.image}
            />
           
          </div>

          <div class="mt-6 lg:mt-10">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="flex-col">
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 w-4/5">
                    {postInfo.title}
                  </h1>
                  <div class="flex items-center mb-4">
                    <img src={PIN} class="p-2" width={35} height={35} />
                    <span class="text-gray-600 ">{postInfo.address}</span>
                  </div>

                  <div className="flex">
                    <p class="bg-yellow-300 px-3  ">${postInfo.price}</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div className="flex flex-col">
                <img src={USER} width={40} height={40} />
                <p class="pt-1 text-center">{userInfo.username}</p>
                </div>
              </div>
            </div>

            <div class="flex justify-between items-center mt-4">
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:w-2/5 w-full p-5 bg-yellow-100 flex flex-col space-y-8">
          <h2 class="font-medium text-2xl text-black">General</h2>
          <div class="bg-white p-5 w-full">
            <div class="flex items-center mb-4">
              <img src={UTILITY} class="w-8 h-8 mr-2" />
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Utilities</h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <img src={PET} class="w-8 h-8 mr-2" />
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Pet Policy</h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
            <div class="flex items-center">
              <img src={FEE} class="w-8 h-8 mr-2" />
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Property Fees</h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
          </div>

          <h2 class="font-medium text-2xl  text-black">Room Sizes</h2>
          <div class="flex flex-3">
            <div class="bg-white p-2 m-2 flex  items-center ">
              <img src={INCREASE} class="w-5 h-5 mr-2" />
              <div className="flex flex-row ">
                <h2 class="text-gray-900 text-lg font-bold   ">Square </h2>
                <p class=" font-small pt-1 pl-1"> 80 sqft</p>
              </div>
            </div>
            <div class="bg-white p-2 m-2 flex items-center   ">
              <img src={BED} class="w-5 h-5 mr-2" />
              <div className=" flex flex-row">
                <p class="mt-1 text-md font-small  pt-1">{postInfo.bedroom}</p>
                <h2 class="text-gray-900 text-lg font-bold p-1">Beds</h2>
              </div>
            </div>
            <div class="bg-white p-2 m-2 flex items-center ">
              <img src={BATH} class="w-5 h-5 mr-2" />
              <div className=" flex flex-row">
                <p class="mt-1 font-small pt-1">{postInfo.bathroom}</p>
                <h2 class="text-gray-900 text-lg font-bold p-1">Bathroom</h2>
              </div>
            </div>
          </div>

          <h2 class="font-medium text-2xl py-2 text-black">Location</h2>
          <div class="w-full h-64 bg-gray-200 rounded overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default Single;
