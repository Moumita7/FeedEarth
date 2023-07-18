import { useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import MainSlider from "./Slider/MainSlider";
import "./simmer.css";
import Footer from "./Footer";

const Body = () => {
  const [restaurantList, setResturentList] = useState([]);
  const [filterRestaurant, setFilterResturent] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(true); // Introducing loading state
  const [error, setError] = useState(null); // Introducing error state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5135084&lng=88.402884&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      let json = await data.json();
      setFilterResturent(json?.data?.cards[2]?.data?.data?.cards);
      setResturentList(json?.data?.cards[2]?.data?.data?.cards);
      setLoading(false); // Data fetched successfully, set loading to false
    } catch (error) {
      setError(error.message);
      setLoading(false); // Error occurred, set loading to false
    }
  };
////

  const handleToggle = () => {
    setToggle(!toggle);
  };

   
  const onlineStatus = useOnlineStatus();
   
  if (onlineStatus === false)
    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="">Whoops!</h1>
          <p className="text-red-600">No internet Connection Found. </p>
          <p>Check your connection or try again</p>
        </div>
      </div>
    );

   

  return (
    <div className="  ">
      <div className=" w-[100%]">
        <div className="w-[100%] flex justify-center items-center bg-blue-950 ">
          <MainSlider />
        </div>
        <div className="flex w-full border items-center justify-center  bg-red-200 my-2 ">
          <div className="flex justify-center m-2 bg-red-400">
            <input
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              type="text"
              className="border border-solid border-black"
            />
            <button
              style={{
                color: "white",
                borderRadius: "5px",
                padding: "5px 15px 5px 15px",
              }}
              className="px-3  bg-red-500 caret-white rounded-sm"
              onClick={() => {
                let filterData = restaurantList.filter((res) =>
                  res.data.name.toLowerCase().includes(searchVal.toLowerCase())
                );
              
                setFilterResturent(filterData);
              }}
            >
              search
            </button>
          </div>

          <div>
            <button
              style={{
                color: "white",
                borderRadius: "10px",
                padding: "5px 15px 5px 15px",
              }}
              className="px-3  bg-red-500 caret-white rounded-sm"
              onClick={() => {
                setFilterResturent(
                  restaurantList.sort(
                    (a, b) => a.data.deliveryTime - b.data.deliveryTime
                  )
                );
                handleToggle();

                //    console.log("frai",filterRestaurant)
              }}
            >
              devivary
            </button>
          </div>

          <div>
            <button
              style={{
                color: "white",
                borderRadius: "10px",
                padding: "5px 15px 5px 15px",
              }}
              className="px-3  bg-red-500 caret-white rounded-sm m-5"
              onClick={() => {
                setFilterResturent(
                  restaurantList.sort(
                    (a, b) => b.data.costForTwo - a.data.costForTwo
                  )
                );

                handleToggle();
              }}
            >
              Cost:High to low
            </button>
          </div>

          <div>
            <button
              style={{
                color: "white",
                borderRadius: "10px",
                padding: "5px 15px 5px 15px",
              }}
              className="px-3  bg-red-500 caret-white rounded-sm"
              onClick={() => {
                let filterDA = restaurantList.filter(
                  (res) => res.data.avgRating > 4.3
                );
                setFilterResturent(filterDA);

                console.log(filterDA);
                handleToggle();
              }}
            >
              Top Rated Resturents
            </button>
          </div>
          <div>
            <button
              style={{
                color: "white",
                borderRadius: "10px",
                padding: "5px 15px 5px 15px",
              }}
              className="px-3  bg-red-500 caret-white rounded-sm m-5"
              onClick={() => {
                // console.log("ok")
                setFilterResturent(
                  restaurantList.sort(
                    (a, b) => a.data.costForTwo - b.data.costForTwo
                  )
                );
                handleToggle();
                //    setFilterResturent(restaurantList.filter((res)=>res.data.costForTwo>3500))

                //    console.log("frppp",restaurantList)
                //    console.log("frpppff",filterRestaurant)
              }}
            >
              Cost: Low To High
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <div> */}

        {filterRestaurant.length == 0 ? (
          <Shimmer />
        ) : (
          filterRestaurant.map((resturent) => (
            <Link
              key={resturent.data.id}
              to={"/resturent/" + resturent.data.id}
            >
              <ResturentCard resData={resturent} />
            </Link>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
};
export default Body;
