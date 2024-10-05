import React, { useEffect, useState } from "react";
import USER from "../assets/images/user.png";

import Card from "../Components/Card";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

function Profile() {
  const { userInfo } = useContext(AuthContext);
  const [model, setmodel] = useState(false);
  const [userData, setUserData] = useState(null);
  console.log(model);
console.log(userInfo);

const [listData, setListData] = useState([]);
useEffect(() => {
  getPosts();
}, []);
const getPosts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/post/get");
    if (res.status === 200) {
      console.log(res);
      setListData(res.data.posts);
    }
    if (res.status === 404) {
      console.log("error while fetching posts");
    }
  } catch (error) {
    console.log("server error ", error);
  }
};

  const handleProfile = () => {
    setUserData(userInfo)
    setmodel(true)
  };
  const handleAdd = ()=>{
    setUserData('')
    setmodel(true)
  }
  const handleDelete = async(id)=>{
    console.log(id)
    try {
      const res = await axios.delete(`http://localhost:3000/api/post/${id}`);
      if (res.status === 200) {
        console.log(res);
        console.log("deleted successfully")
        getPosts();
        
      }
      if (res.status === 404) {
        console.log("error while fetching posts");
      }
    } catch (error) {
      console.log("server error ", error);
    }
  };

  
  return (
    <>
      {model ? (
        <Sidebar userData= {userData} setmodel ={setmodel} />
      ) : (
        <div className="container mx-auto  py-18 flex   max-w-screen-xl  md:py-10">
          <div className="flex w-10/12">
            <div className="flex flex-col pb-5 ">
              <div className="flex  justify-between p-5 flex-col lg:flex-row  w-10/12 ">
                <div className="flex-row ">
                  <h1 className="text-2xl font-medium mb-5  ">
                    User Information
                  </h1>
                  <div className=" flex flex-col mb-5">
                    <div className="flex p-2 ">
                      <span className="font-medium text-1.5xl ">Avatar:</span>
                      <img
                        className="mx-2"
                        src={USER}
                        width={25}
                        height={25}
                      ></img>
                    </div>
                    <div className="flex p-2 ">
                      <p className="font-medium text-1.5xl ">Username:</p>
                      <p className="mx-2 font-bold "> {userInfo.username}</p>
                    </div>
                    <div className="flex p-2 ">
                      <p className="font-medium text-1.5xl ">Email:</p>
                      <p className="mx-2 font-bold"> {userInfo.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <button
                    className="bg-[#FECE51] px-3 py-3"
                    onClick={ handleProfile}
                  >
                    Update profile
                  </button>
                </div>
              </div>
              <div className="flex ">
                <div className="flex-col w-5/6 p-5  ">
                  <div className="flex justify-between ">
                    <div className="flex-row">
                      <span className="text-2xl font-medium m-2 ">My List</span>
                    </div>
                    <div className="flex-row  items-start hidden lg:block     ">
                      <button className="bg-[#FECE51] px-3 py-3  md:px-3 py-3 " onClick={handleAdd}>
                        Add New Post
                      </button>
                    </div>
                  </div>

                  {listData.map((d, index) => {
                    return (
                      <>
                     
                      <div className="flex flex-row border my-5 rounded">
                        <div className="">
                      <Card
                        CardName={d.title}
                        cardLocation={d.address}
                        Price={d.price}
                        bathDesc={d.bathroom}
                        BedDesc={d.bedroom}
                        img={d.image}
                        id={d._id}
                        a={index}
                      />
                      </div>
                      <div className="mt-12 ">
                      <button className=" bg-red-500 text-white mx-2 p-2 flex " onClick={()=>handleDelete(d._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="24" x="0" y="0" viewBox="0 0 427 427.001"  xml:space="preserve"><g><path d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zM114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0 0 78.796 427H268a49.233 49.233 0 0 0 35.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 0 0-11.539-28.031A39.288 39.288 0 0 0 217.797 0H129a39.288 39.288 0 0 0-28.063 11.469A39.289 39.289 0 0 0 89.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 0 1 5.676-13.895A19.26 19.26 0 0 1 129 20h88.797a19.26 19.26 0 0 1 13.926 5.605 19.244 19.244 0 0 1 5.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" fill="#ffffff" opacity="1" data-original="#000000"></path></g></svg>

                      </button>
                      </div>
                      </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
