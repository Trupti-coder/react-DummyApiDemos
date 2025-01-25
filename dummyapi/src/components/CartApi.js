import { useEffect, useState } from "react";

function CartApi(){

    let[cartIds,setCartIds]=useState([]);

    async function getAllCarts(){
        let response=await fetch('https://dummyjson.com/carts');
        let result=await response.json();
        setCartIds(result.carts.map(cart=>cart.id));
       

    }

    useEffect(()=>{
        getAllCarts();
    },[]);

    return(
        <>
        <h3>Cart Ids</h3>
        <ul>
           {
            cartIds.map((id)=>{
                return(
                    <li key={id}>
                        cartIds:{id}
                    </li>
                )
            })
           }


        </ul>
        </>
    );
}
export default CartApi;