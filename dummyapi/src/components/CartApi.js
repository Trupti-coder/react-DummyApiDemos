import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartApi(){

    let[cartIds,setCartIds]=useState([]);
    let[cartDetails,setCartDetails]=useState(null);
    let[selectedCartIds,setSelectedCartIds]=useState(null);

    async function getAllCarts(){
        let response=await fetch('https://dummyjson.com/carts');
        let result=await response.json();
        setCartIds(result.carts.map(cart=>cart.id));
       

    }

    async function getAllCartDetails(id){
        let response=await fetch(`https://dummyjson.com/carts/${id}`);
        let result=await response.json();
        setCartDetails(result);

    }

    useEffect(()=>{
        getAllCarts();
    },[]);

    useEffect(()=>{
        if(selectedCartIds!==null){
        getAllCartDetails();
        }
    },[]);

    return(
        <>
        <h3>Cart Ids</h3>
        <ul>
           {
            cartIds.map((id)=>{
                return(
                   <Link to="#" onClick={()=>setSelectedCartIds(id)}> <li key={id}>
                        cartIds:{id}
                    </li>
                    </Link>
                )
            })
           }

        </ul>
        
        </>
    );
}
export default CartApi;