import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useResturentMenu from "../utils/useResturentMenu"


let ResturentMenu=()=>{

    const {resId}=useParams()
    // const param=useParams()
    // console.log(param)
    // console.log(resId)

    //custom hooks
    const resInfo=useResturentMenu(resId)

    if(resInfo===null) return<Shimmer/>
    let {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    // console.log(name,cuisines,costForTwoMenu)
let{itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
console.log(itemCards)
    return  (
        <div>
         {/* <h2>{resInfo?.cards[0]?.card?.card?.info?.name}</h2> */}
            <h2>{name}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>

          <ol>
            {itemCards.map((ele,i)=>{
               return <li key={ele.card.info.id}>{ele.card.info.name}{"  Rs "}{ele.card.info.price/100 ||ele.card.info.defaultPrice/100}</li>
            })}
          </ol>
        </div>
    )
}

export default ResturentMenu