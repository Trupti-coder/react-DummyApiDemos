import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product(){
    let[data,setData]=useState([]);
    let[currency,setCurrency]=useState('INR');
    let[convertedData,setConvertedData]=useState([]);
    let[cart,setCart]=useState([]);
    
    const currencyRates = {

        'INR': 1, 
        'USD': 0.0116, // Approximation for 1 INR = 0.0116 USD (1 USD ≈ 86.1881 INR)
        'CAD': 0.0167  // Approximation for 1 INR = 0.0167 CAD (1 CAD ≈ 60.0123 INR)
    };

    
    async function getAllProduct(){
        let response=await fetch("https://dummyjson.com/products");
        let result=await response.json();
        setData(result.products);
        setConvertedData(convertPrice(result.products,currencyRates.INR));
    }

    useEffect(()=>{
        getAllProduct();
    },[]);

    function funAddCart(product){
        setCart([...cart,product]);
       


    }

    function funSelect(event){
        const selectedCurrency=event.target.value;
        setCurrency(selectedCurrency);
        setConvertedData(convertPrice(data,currencyRates[selectedCurrency]));
    }

    function convertPrice(products,rate){
        return products.map(product=>({
            ...product,
            price:(product.price*rate).toFixed(2)
        }))

    }

    return(
        <>
        Select currency:<select value={currency} onChange={funSelect}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
        </select>

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
                convertedData.map((x)=>{
                    return(
                        <tr key={x.id}>
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