

import React from 'react'
import {useState} from "react"
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
// IoIosArrowDown
// IoIosArrowUp
const Section=({description,title,isVisible,setIsVisible,setIsVisiblet})=>{

  // console.log("isvis",isVisible)
  // console.log("setvis",setIsVisible)

  // let [isVisible,setIsVisible]=useState(false)
  return (
    //my thinking
    <div>

      {/* <h1 className='' style={{marginLeft:"8px"}}>I want to partner my restaurant with Swiggy</h1> */}
    <div className='border p-2 m-2 flex justify-between'>
    <div className='m-5 flex'>

    </div>
    <div>

 
    {isVisible?
      <div className=' flex'>
    <h2>{description}</h2>
    <button  onClick={()=>setIsVisiblet(false)} className='  px-2'><IoIosArrowUp/></button>
    </div>
    :
    <button onClick={()=>setIsVisible(true)} className=' px-2'><IoIosArrowDown/></button>
   
    
  
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
    <div className='flex justify-center m-8 text-lg font-bold text-blue-700   '>
    Help & Support
Let's take a step ahead and help you better.
    </div>
    <h1 className='font-bold'>After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</h1>
      <Section title="card3" 
            isVisible={isVisibleSelection=="card3"}
            setIsVisible={()=>setVisibleIsSelecton("card3")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}
      description="After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."/>
    <h1 className='font-bold' style={{marginLeft:"8px"}}>I want to partner my restaurant with Swiggy</h1>

      <Section title="card1"
      isVisible={isVisibleSelection=="card1"}
      setIsVisible={()=>setVisibleIsSelecton("card1")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}

      description="-  Copies of the below documents are mandatory
-  FSSAI Licence OR FSSAI Acknowledgement
-  Pan Card
-  GSTIN Certificate
-  Cancelled Cheque OR bank Passbook
-  Menu"/>
     <h1 className='font-bold'>What are the mandatory documents needed to list my restaurant on Swiggy?</h1>
      <Section title="card2"
         isVisible={isVisibleSelection=="card2"}

         setIsVisible={()=>setVisibleIsSelecton("card2")}
      setIsVisiblet={()=>setVisibleIsSelecton(false)}
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Voluptas, quae voluptate? Consequuntur quisquam unde debitis eaque placeat autem culpa totam! 
      Molestias porro labore autem vitae accusantium provident iure, voluptate voluptatem"/>
     
    
    
    </div>
  )
}



export default About