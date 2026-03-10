import { useNavigate } from "react-router";
export default function ItemsPreview({items, setShowItemPage}){
    let navigate = useNavigate();
    return(
        items.map((item)=>{
          return  <div className="item" id={item.id} key={item.id} onClick={()=>navigate(`/shop/item/${item.id}`)}>
                    <img src={item.images[0]}></img>
                    <p>{item.title}</p>
                 </div>
        })
    )
}


//create a preview and add an eventlistener so that on click the user is redirected to item page with the specified id as params