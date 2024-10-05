import React, { useEffect, useState } from "react";
import { listData } from "../lib/dummyData";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import Map from "../Components/Map";
import axios from "axios";

function List() {
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

  return (
    <>
      <div className="container mx-auto  py-24 flex   max-w-screen-xl  md:py-10 ">
        <div className="flex-2 pr-3 ">
          <div className="space-y-4">
            <Filter />
            {listData.map((d, index) => {
              return (
                <Card
                 post={d}
                  CardName={d.title}
                  cardLocation={d.address}
                  Price={d.price}
                  bathDesc={d.bathroom}
                  BedDesc={d.bedroom}
                  img={d.image}
                  id={d.id}
                  a={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-3 w-full  h-screen mx-2">
          <Map />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default List;
