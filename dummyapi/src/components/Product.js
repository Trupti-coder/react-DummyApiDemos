import { useEffect, useState } from "react";

function Product(){
    let[data,setData]=useState([]);
    async function getAllProduct(){
        let response=await fetch("https://dummyjson.com/products");
        let result=await response.json();
        setData(result.products)
    }

    useEffect(()=>{
        getAllProduct();
    },[]);

    return(
        <>
       
        </>
    );
}
export default Product;