import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col gap-1 m-8 md:m-0">
      <Skeleton width={"250px"} height={"155px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"250px"} height={"25px"} />
    </div>
  );
};
export const ShimmerMenu = () => {
  return (
    <div className="w-2/3 my-2 m-9 " style={{ margin: "8%" }}>
      <div className="flex justify-between " style={{ margin: "9%" }}>
        <Skeleton width={"250px"} height={"200px"} />
        <div>
          <Skeleton width={"100px"} height={"100px"} />
        </div>

      </div>
      <div className="border">
{/* <Skeleton  /> */}


</div>
      <div className="my-4" style={{ margin: "8%" }}>
        <Skeleton width={"300px"} height={"35px"} />
      </div>
      <div
        className="flex justify-between mb-4 flex-col md:flex-row "
        style={{ marginLeft: "8%" }}
      >
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
    </div>
  );
};

export default ShimmerCard;
