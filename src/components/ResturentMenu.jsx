import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturentMenu from "../utils/useResturentMenu";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShimmerMenu } from "./ShimmerCard";

let ResturentMenu = () => {
  const dispatch = useDispatch();
  const { resId } = useParams();

  //custom hooks
  const resInfo = useResturentMenu(resId);

  // const handleAddItem = () => {
  //   dispatch(addItem("graphs"));
  // };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (resInfo === null) return <ShimmerMenu />;
  let { name, costForTwoMessage, cloudinaryImageId, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;
  // console.log(name,cuisines,costForTwoMenu)
  let { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
  console.log("it",itemCards);

  if (!itemCards) {
    return <h1>data is not </h1>;
  } else
    return (
      <>
        <div className=" flex gap-8 p-5 justify-between ">
          {/* <h2>{resInfo?.cards[0]?.card?.card?.info?.name}</h2> */}
          <div
            style={{ marginLeft: "15%" }}
            className="shadow-md m-5 p-5 flex justify-center text-center items-center"
          >
            <div>
              <img
                className="m-5"
                style={{ width: "200px" }}
                src={IMG_URL + cloudinaryImageId}
                alt=""
              />
              <h2>{name}</h2>
              <h2>{costForTwoMessage}</h2>
            </div>
          </div>
          <div
            className=" m-5 h-auto p-5 flex  justify-center items-center"
            style={{ marginRight: "15%" }}
          >
            <div className=" shadow-md bg-slate-400 p-5 items-center">
              {/* <h2>{cuisines.join(",")}</h2> */}
              <h2> ⭐ {avgRating}</h2>
              <hr />
              <h2>100+ k Ratings</h2>
            </div>
          </div>
          {/* <div>

      <button
        onClick={() => handleAddItem()}
        style={{ padding: "5px", backgroundColor: "green" }}
      >
        Add
      </button>
      </div> */}
        </div>
        {/* <hr className="border" /> */}
        <div
          className="border"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        ></div>
        <div>
          <h1
            style={{ fontWeight: "bold", fontSize: "30px", marginLeft: "15%" }}
          >
            Recommende ({itemCards.length})
          </h1>

          {itemCards.map((ele, i) => {
            {
              /* console.log("ele",ele) */
            }
            return (
              <div
                key={ele.card.info.id}
                className="flex justify-between  "
                style={{ marginLeft: "15%", marginRight: "15%" }}
              >
                <div className="m-5  w-[20%]" style={{ flex: "2" }}>
                  {/* {ele.card.info.name} */}
                  <h2 className="text-bold ">{ele.card.info.name}</h2>

                  {"  ₹ "}
                  {ele.card.info.price / 100 ||
                    ele.card.info.defaultPrice / 100}
                  <p style={{ fontSize: "11px", color: "gray" }}>
                    {ele.card.info.description}
                  </p>
                </div>
                <div className="  m-5" style={{ position: "relative" }}>
                  <img
                    className="shadow-md"
                    style={{ width: "130px", borderRadius: "5%" }}
                    src={IMG_URL + ele.card.info.imageId}
                    alt="ll"
                  />
                  <button
                    className="shadow-md"
                    onClick={() => handleAddItem(ele.card.info)}
                    style={{
                      position: "absolute",
                      top: "70px",
                      right: "30px",
                      margin: "2px",
                      color: "green.400",
                      backgroundColor: "white",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      borderRadius: "5%",
                    }}
                  >
                    add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
};

export default ResturentMenu;
