import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link component
import styles from './Cart.module.css';

function Cart() {
    const [cartIds, setCartIds] = useState([]);
    const [cartDetails, setCartDetails] = useState({ products: [] });  // Initialized products array
    const [selectedCartId, setSelectedCartId] = useState(null);

    async function getAllCarts() {
        let response = await fetch('https://dummyjson.com/carts');
        let result = await response.json();
        setCartIds(result.carts.slice(0, 3).map(cart => cart.id));
    }

    async function getCartById(id) {
        let response = await fetch(`https://dummyjson.com/carts/${id}`);
        let result = await response.json();
        setCartDetails(result);
    }

    useEffect(() => {
        getAllCarts();  
    }, []);

    useEffect(() => {
        if (selectedCartId !== null) {
            getCartById(selectedCartId);
        }
    }, [selectedCartId]);

    function funSort() {
        if (cartDetails && cartDetails.products) {
            const sorted = [...cartDetails.products].sort((a, b) => b.price - a.price);
            setCartDetails({ ...cartDetails, products: sorted });
        }
    }

    return (
        <>
            <h3>Cart IDs</h3>
            <ul className={styles.cartIdList}>
                {cartIds.length ? (
                    cartIds.map((id) => (
                        <li key={id} className={styles.cartId}>
                            <Link to="#" onClick={() => setSelectedCartId(id)}>Cart ID: {id}</Link>
                        </li>
                    ))
                ) : (
                    <p></p>
                )}
            </ul>

            {cartDetails && cartDetails.products && (
                <div key={cartDetails.id} className={styles.cartDetails}>
                    <table className={styles.cartTable}>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Title</th>
                                <th onClick={funSort} style={{ cursor: 'pointer' }}>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartDetails.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td><img src={product.thumbnail} alt={product.title} className={styles.img} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Cart;
