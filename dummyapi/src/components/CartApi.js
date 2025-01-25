import { useEffect, useState } from "react";

function CartApi(){

    let[cartIds,setCartIds]=useState([]);

    async function getAllCarts(){
        let response=await fetch('https://dummyjson.com/carts');
        let result=await response.json();
        setCartIds(result.carts);
        console.log(cartIds);

    }

    useEffect(()=>{
        getAllCarts();
    },[]);

    return(
        <>
        
        </>
    );
}
export default CartApi;