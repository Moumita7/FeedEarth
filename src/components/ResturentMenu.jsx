import {useEffect, useState} from "react"
import { json, useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_API } from "../utils/constants"

let ResturentMenu=()=>{
    let [menu,setMenu]=useState(null)
    // const param=useParams()
    // console.log(param)
    const {resId}=useParams()
    console.log(resId)
    useEffect(()=>{
        getMenu()
    },[])

    let getMenu=async()=>{
        let data=await fetch(MENU_API+resId)
        let json=await data.json()
        console.log("resmenu",json)
        setMenu(json.data)

        //json.data.cards[0].card.card

    }
    if(menu===null) return<Shimmer/>
    let {name,cuisines,costForTwoMessage}=menu?.cards[0]?.card?.card?.info;
    // console.log(name,cuisines,costForTwoMenu)
let{itemCards}=menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
console.log(itemCards)
    return  (
        <div>
         {/* <h2>{menu?.cards[0]?.card?.card?.info?.name}</h2> */}
            <h2>{name}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>

          <ol>
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li>
            <li>{itemCards[3].card.info.name}</li> */}

            {/* <li>mita</li> */}
            {itemCards.map((ele,i)=>{
               return <li key={ele.card.info.id}>{ele.card.info.name}{"  Rs "}{ele.card.info.price/100 ||ele.card.info.defaultPrice/100}</li>
            })}
          </ol>
        </div>
    )
}

export default ResturentMenu