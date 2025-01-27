import { useState } from "react";

function Product(){
    let[data,setData]=useState([]);
    async function getAllProduct(){
        let response=await fetch("");
        let result=await response.json();
        setData(result.products)
    }
    return(
        <>
        </>
    );
}
export default Product;