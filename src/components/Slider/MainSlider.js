

import React, { useState } from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const MainSlider = () => {
  const data = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3',
    },
    {
      id: 6,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
    },
    {
      id: 7,
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym',
    },
  ];
  const [visibleImages, setVisibleImages] = useState(data.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    updateVisibleImages(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    updateVisibleImages(prevIndex);
  };

  const updateVisibleImages = (index) => {
    const endIndex = index + 4;
    const newVisibleImages = data.slice(index, endIndex);
    setVisibleImages(newVisibleImages);
  };

  return (
    <div className="flex gap-8 justify-center p-2 items-center bg-blue-950">
      <GrFormPrevious
        className="bg-red-400 rounded-lg"
        onClick={handlePrev}
      />
      <div className="flex flex-wrap justify-center gap-4">
        {visibleImages.map((imageObj) => (
          <img
            className="w-64 sm:w-56 md:w-64 lg:w-56 xl:w-64"
            key={imageObj.id}
            src={imageObj.image}
            alt={`Image ${imageObj.id}`}
          />
        ))}
      </div>
      <GrFormNext className="bg-red-400 rounded-lg" onClick={handleNext} />
    </div>
  );
};

export default MainSlider;
















// import React, { useState } from 'react';
// import { GrFormPrevious } from 'react-icons/gr';
// import { GrFormNext } from 'react-icons/gr';



// const MainSlider = () => {
//     const data = [
//         {
//           id: 1,
//           image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
//         },
//         {
//           id: 2,
//           image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
//         },
//         {
//           id: 3,
//           image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
//         },
//         {
//           id: 4,
//           image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
//         },
//         {
//           id: 5,
//           image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
//         },
//         {
//             id: 6,
//             image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
//           },
//           {
//             id: 7,
//             image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
//           },
//       ];
//     const [visibleImages, setVisibleImages] = useState(data.slice(0, 4));
//     const [currentIndex, setCurrentIndex] = useState(0);


  



//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % data.length;
//     setCurrentIndex(nextIndex);
//     updateVisibleImages(nextIndex);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + data.length) % data.length;
//     setCurrentIndex(prevIndex);
//     updateVisibleImages(prevIndex);
//   };

//   const updateVisibleImages = (index) => {
//     const endIndex = index + 4;
//     const newVisibleImages = data.slice(index, endIndex);
//     setVisibleImages(newVisibleImages);
//   };

//   return (
//     <div className='flex gap-8 justify-center p-2 items-center bg-blue-950'>
//       {/* <button onClick={handlePrev}>Previous</button> */}
//       <GrFormPrevious className='bg-red-400 rounded-lg ' onClick={handlePrev}/>
//       {visibleImages.map((imageObj) => (
//         <img className='w-[200px]' key={imageObj.id} src={imageObj.image} alt={`Image ${imageObj.id}`} />
//       ))}
//       <GrFormNext className='bg-red-400 rounded-lg' onClick={handleNext}/>
//       {/* <button onClick={handleNext}>Next</button> */}
//     </div>
//   );
// };

// export default MainSlider;







// // import React, { useRef } from 'react'

// // const MainSlider = () => {
// //     const sliderContainer = useRef(null);
// //    const cardRef = useRef(null)

// //    const PrevBtn=(sliderContainer,cardRef)=>{
// //     if(sliderContainer && cardRef){
// //         sliderContainer.current.scrollLeft=sliderContainer.current.scrollLeft-sliderContainer.current.clientWidth
// //     }
// //    }

// //     let data=[
// //         {
// //             id:1,
// //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
// //         },
// //         {
// //             id:2,
// //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
// //         },
// //         {
// //             id:3,
// //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
// //         },
// //         {
// //             id:4,
// //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
// //         },
// //         {
// //             id:5,
// //             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
// //         },
// //     ]



// //   return (
// //     <div className='bg-blue-100 p-5 flex gap-5'>
// //     {/* <button >prev</button> */}
// //     {data.map((ele)=>{
// //         return (
// //             <div>
// //                 <img src={ele.image} alt="" />
// //             </div>
// //         )
// //     })}
// //     {/* <button>next</button> */}

// //     </div>
// //   )
// // }

// // export default MainSlider