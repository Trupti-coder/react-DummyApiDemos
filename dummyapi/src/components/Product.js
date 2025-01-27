import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    function funAddCart(){

    }

    return(
        <>
        <table border='2'>
            <tr>
                <th>Product Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Action</th>
                
            </tr>
            {
                data.map((x)=>{
                    return(
                        <tr key={x.id }>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td>{x.rating}</td>
                            <td><img src={x.thumbnail} alt=''></img></td>
                            <td><Link to="#" onClick={funAddCart}>AddToCart</Link></td>

                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default Product;