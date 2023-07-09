

import React from 'react'
import {useState} from "react"
const Section=({description,title,isVisible,setIsVisible,setIsVisiblet})=>{

  // console.log("isvis",isVisible)
  // console.log("setvis",setIsVisible)

  // let [isVisible,setIsVisible]=useState(false)
  return (
    //my thinking
    <div>
      <h1 className='' style={{marginLeft:"8px"}}>hi</h1>
    <div className='border p-2 m-2 flex justify-between'>
    <div className='m-5 flex'>

    </div>
    <div>

 
    {isVisible?
      <div className='border flex'>
    <h2>{description}</h2>
    <button  onClick={()=>setIsVisiblet(false)} className='border border-black bg-orange-400 px-2'>Hide</button>
    </div>:
    <button onClick={()=>setIsVisible(true)} className='border border-black bg-orange-400 px-2'>Show</button>
    
  
    }
    </div>
</div>
</div>
  )}



const About = () => {
  let [isVisibleSelection,setVisibleIsSelecton]=useState("")
  console.log("isVisibleSelection",isVisibleSelection)
  return (
    // <div>This is gosary page in this file i useing lazy loading</div>
    <div>
    <div>
    Help & Support
Let's take a step ahead and help you better.
    </div>
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



export default About