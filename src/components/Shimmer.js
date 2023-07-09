// import "./simmer.css"
// let Shimmer=()=>{
//     return (
//         <div className="shimmer-container">
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//             <div className="shimmer-cards"></div>
//         </div>
//     )

// }

// export default Shimmer


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 py-2 m-auto ">
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    {/* <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/>
    <ShimmerCard/> */}

    </div>
  )
}

export default Shimmer