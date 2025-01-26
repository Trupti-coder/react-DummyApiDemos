import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartApi(){

    let[cartIds,setCartIds]=useState([]);
    let[cartDetails,setCartDetails]=useState([]);
    let[selectedCartIds,setSelectedCartIds]=useState();

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
    },[selectedCartIds]);

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
        {
            <table border='2'>
                <tr>
                    <th>Peoduct Id</th>
                    <th>title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                </tr>
                {
                    cartDetails.products.map((product)=>{
                        return(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><img src="">{product.thumbnail}</img></td>

                            </tr>
                        )
                    })
                }

            </table>
        }
        </>
    );
}
export default CartApi;