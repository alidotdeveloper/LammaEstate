import React, { useContext, useState } from "react";

import { AuthContext } from "../Context/Auth";
import axios from "axios";

function Sidebar({ setmodel, userData }) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const[loading, setLoading] = useState('');
  const [values, setvalues] = useState({
    username: userData ? userData.username : "",
    email: userData ? userData.email : "",
  });
  const [image, setImage] = useState("");
  const handleclose = () => {
    setmodel(false);
  };
  const token = localStorage.getItem("token");
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (userData) {
      try {
        const res = await axios.put(
          `http://localhost:3000/api/user/${userInfo._id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 200) {
          console.log(res.data.data);
          setUserInfo(res.data.data);
          setmodel(false);
          
        }
      } catch (error) {
        console.log("error while getting post", err);
      }finally{
        setLoading(false)
      }
    } else {
      const formData = new FormData(e.target);

      if (image) {
        formData.append("postImage", image);
      }
      

      try {
        const res = await axios.post(
          `http://localhost:3000/api/post/add`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res) {
          console.log(res.data.data);
          setmodel(false);
          setUserInfo(res.data.data);
        }
      } catch (error) {
        console.log("error while getting post", error);
      }finally{
        setLoading(false)
      }
    }
  };

  return (
    <>
      {userData ? (
        <div
          id="crud-modal"
          tabindex="-1"
          aria-hidden="true"
          class=" flex overflow-y-auto overflow-x-hidden fixed top-10 right-50 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-[#696a6b] bg-opacity-35 "
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
                  Update Profile
                </h3>
                <button
                  type="button"
                  onClick={handleclose}
                  class="text-black bg-transparentrounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <form
                class="p-4 md:p-5"
                onSubmit={handlesubmit}
                action="POST"
                enctype="multipart/form-data"
              >
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      username
                    </label>
                    <input
                      type="text"
                      name="username"
                      defaultValue={userData ? userData.username : ""}
                      onChange={(e) =>
                        setvalues({ ...values, username: e.target.value })
                      }
                      id="title"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Title "
                      required=""
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={userData ? userData.email : ""}
                      onChange={(e) =>
                        setvalues({ ...values, email: e.target.value })
                      }
                      id="name"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Description"
                      required=""
                    />
                  </div>
                  {/* <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium  dark:text-black"
                  >
                    Uploads
                  </label>
                  {editPost ? (
                    <>
                      <img src={editPost?.image} className="p-2" />{" "}
                      <input
                        type="file"
                        name="postImage"
                        id="file"
                        onChange={(e) =>
                          setvalues({ ...values, postImage: e.target.files[0] })
                        }
                        defaultValue={editPost ? editPost.file : ""}
                        class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                        required=""
                      />
                    </>
                  ) : (
                    <input
                      type="file"
                      name="postImage"
                      id="file"
                      onChange={(e) =>
                        setvalues({ ...values, postImage: e.target.files[0] })
                      }
                      defaultValue={editPost ? editPost.file : ""}
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      required=""
                    />
                  )}
                </div> */}
                </div>
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {loading ? "Updating User..." : "Update User"}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="crud-modal"
          tabindex="-1"
          aria-hidden="true"
          class=" flex overflow-y-auto overflow-x-hidden fixed top-10 right-50 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-[#696a6b] bg-opacity-35 "
        >
          <div class="relative p-4 w-full max-w-6xl max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
                  Add Post
                </h3>
                <button
                  type="button"
                  onClick={handleclose}
                  class="text-black bg-transparentrounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <form
                class="p-4 md:p-5"
                onSubmit={handlesubmit}
                action="POST"
                enctype="multipart/form-data"
              >
                <div class="grid gap-4 mb-4 grid-cols-4">
                  <div class="col-span-5">
                    <label
                      for="title"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Title "
                      required=""
                    />
                  </div>

                  <div class="col-span-5">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Descriptrion
                    </label>
                    <textarea
                      type="description"
                      name="description"
                      id="name"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Description"
                      required=""
                    />
                  </div>
                  <div class="col-span-5">
                    <label
                      for="title"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Price
                    </label>
                    <input
                      type="Number"
                      name="price"
                      id="price"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="price "
                      required=""
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="address"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="City "
                      required=""
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="address"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="adress"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Address "
                      required=""
                    />
                  </div>
                  <div class="col-span-1">
                    <label
                      for="address"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Bathroom
                    </label>
                    <input
                      type="text"
                      name="bathroom"
                      id="bathroom"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="bathroom"
                      required="bathroom"
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="address"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      Bedroom
                    </label>
                    <input
                      type="text"
                      name="bedroom"
                      id="bedroom"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Bedroom"
                      required=""
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="latitude"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      latitude
                    </label>
                    <input
                      type="string"
                      name="latitude"
                      id="latitude"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Latitude"
                      required=""
                    />
                  </div>
                  <div class="col-span-1">
                    <label
                      for="latitude"
                      class="block mb-2 text-sm font-medium  dark:text-black"
                    >
                      longitute
                    </label>
                    <input
                      type="string"
                      name="longitute"
                      id="longitute"
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      placeholder="Longitute"
                      required=""
                    />
                  </div>
                  <div class="col-span-1">
                    <label class="block mb-2 text-sm font-medium  dark:text-black">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      name="postImage"
                      id="postImage"
                      onChange={(e) =>
                        setImage({ ...image, image: e.target.files[0] })
                      }
                      class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                      required=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {loading ? "Adding Post..." : "Add Post"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
