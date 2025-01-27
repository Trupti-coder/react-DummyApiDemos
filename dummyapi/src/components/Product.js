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
        <table>
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

                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default Product;