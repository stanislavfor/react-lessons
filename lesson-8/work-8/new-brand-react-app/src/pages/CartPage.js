import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import './CartPage.css';

const CartPage = () => {
    const dispatch = useDispatch();
    // const cartItems = useSelector((state) => state.cart.items);
    const cartItems = useSelector((state) => state.cart.items || []);


    const handleQuantityChange = (id, size, quantity) => {
        const parsedQuantity = parseInt(quantity);
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
            dispatch(updateQuantity({ id, size, quantity: parsedQuantity }));
        }
    };

    const handleRemove = (id, size) => {
        dispatch(removeFromCart({ id, size }));
    };

    const getItemTotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <Header />

            <div className="section-container cart-paddind-bottom" style={{  }}>
                <h2 style={{ fontSize: '26px', fontWeight: '500', paddingTop: '0', paddingBottom: '10px' }}>Customer Cart</h2>
                <h3 style={{ fontSize: '20px', fontWeight: '500', paddingTop: '0', paddingBottom: '80px' }}>A shopping cart for your purchases</h3>

                {cartItems.length === 0 ? (
                    <>
                        <p style={{ paddingBottom: '10px'}}>Your cart is currently empty. To see what we have in stock.</p>
                        <p>Add some items to your cart. You can view our full range of products here.</p>
                    </>
                ) : (
                    <>
                        <div className="table-container">
                            <table className="cart-table">
                                <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartItems.map(item => (
                                    <tr key={`${item.id}-${item.size}`}>
                                        <td style={{ minWidth: '200px'}}>{item.title}</td>
                                        <td>{item.size}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.id, item.size, e.target.value)}
                                            />
                                        </td>
                                        <td>${getItemTotal(item.price, item.quantity)}</td>
                                        <td>
                                            <button onClick={() => handleRemove(item.id, item.size)}>✖</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><strong style={{fontSize: '24px' }}>Total: ${totalPrice.toFixed(2)}</strong></th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="cart-total">
                            <strong>Total: ${totalPrice.toFixed(2)}</strong>
                        </div>
                    </>
                )}
            </div>
            <Subscribe />
            <Footer />
        </>
    );
};

export default CartPage;