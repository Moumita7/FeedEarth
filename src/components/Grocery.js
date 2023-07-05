

import React from 'react'
import {useState} from "react"
const Section=({description,title,isVisible,setIsVisible,setIsVisiblet})=>{

  console.log("isvis",isVisible)
  console.log("setvis",setIsVisible)

  // let [isVisible,setIsVisible]=useState(false)
  return (
    //my thinking
    <div className='border border-black p-2 m-2'>
    {isVisible?
    <button onClick={()=>setIsVisible(false)} className='border border-black bg-orange-400 px-2'>Show</button>
    :
    <div>
    <button  onClick={()=>setIsVisiblet(true)} className='border border-black bg-orange-400 px-2'>Hide</button>
    <h2>{description}</h2>
    </div>}
</div>
  )}



  





const Grocery = () => {
  let [isVisibleSelection,setVisibleIsSelecton]=useState("")
  console.log("isVisibleSelection",isVisibleSelection)
  return (
    // <div>This is gosary page in this file i useing lazy loading</div>
    <div>
      <Section title="card1"
      isVisible={isVisibleSelection=="card1"}
      setIsVisible={()=>setVisibleIsSelecton("card1")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}

      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quae voluptate?
       Consequuntur quisquam unde debitis eaque placeat autem culpa totam! Molestias porro labore autem 
       vitae accusantium provident iure, voluptate voluptatem"/>
      <Section title="card2"
         isVisible={isVisibleSelection=="card2"}

         setIsVisible={()=>setVisibleIsSelecton("card2")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}

       


      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Voluptas, quae voluptate? Consequuntur quisquam unde debitis eaque placeat autem culpa totam! 
      Molestias porro labore autem vitae accusantium provident iure, voluptate voluptatem"/>
      <Section title="card3" 
            isVisible={isVisibleSelection=="card3"}

            setIsVisible={()=>setVisibleIsSelecton("card3")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}



      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Voluptas, quae voluptate? Consequuntur quisquam unde debitis eaque placeat autem culpa totam! 
       Molestias porro labore autem vitae accusantium provident iure, voluptate voluptatem"/>
    
    
    </div>
  )
}


//this is not a good code

// const Grocery = () => {
//   let [isSelection,setIsSelecton]=useState({
//     card1:false,
//     card2:false,
//     card3:false,


//   })
//   return (
//     // <div>This is gosary page in this file i useing lazy loading</div>
//     <div>
//       <Section title="card1"
//       isVisible={isSelection.card1}
//       setIsVisible={()=>setIsSelecton({
//             card1:true,
//     card2:false,
//     card3:false,
//            })}
//       description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quae voluptate?
//        Consequuntur quisquam unde debitis eaque placeat autem culpa totam! Molestias porro labore autem 
//        vitae accusantium provident iure, voluptate voluptatem"/>
//       <Section title="card2"
//            isVisible={isSelection.card2}
//            setIsVisible={()=>setIsSelecton({
//             card1:false,
//     card2:true,
//     card3:false,
//            })}


//       description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
//       Voluptas, quae voluptate? Consequuntur quisquam unde debitis eaque placeat autem culpa totam! 
//       Molestias porro labore autem vitae accusantium provident iure, voluptate voluptatem"/>
//       <Section title="card3" 
//          isVisible={isSelection.card3}
//          setIsVisible={()=>setIsSelecton({
//             card1:false,
//     card2:false,
//     card3:true,
//            })}


//       description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//        Voluptas, quae voluptate? Consequuntur quisquam unde debitis eaque placeat autem culpa totam! 
//        Molestias porro labore autem vitae accusantium provident iure, voluptate voluptatem"/>
    
    
//     </div>
//   )
// }

export default Grocery