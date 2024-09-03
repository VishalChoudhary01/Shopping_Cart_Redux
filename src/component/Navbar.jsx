import { useCallback, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/Cart/CartSlice";

const Navbar = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isCartAnimation, setCartAnimation] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


    return (
        <>
            <nav className="w-full border-b border-gray-700 mb-4 flex items-center justify-between py-3">
                <h1 className="text-[1.8em] font-bold font-[Libre Baskerville] italic">
                    Digi <span className="text-green-500 font-extrabold">Market</span>
                </h1>
                <section className="flex items-center justify-center gap-x-8">
                    <h1
                        className={`relative flex justify-center items-center gap-x-3 px-4 cursor-pointer ${isCartAnimation ? 'animate-cart' : ''}`}
                        onClick={openCart}
                    >
                        <FaShoppingCart className="relative" />
                        {totalItems > 0 && (
                            <span className="absolute top-[2px] right-[-10px] text-white text-lg bg-gray-800 font-bold rounded-full w-5 h-5 flex items-center justify-center p-2">
                                {totalItems}
                            </span>
                        )}
                        <span>Cart</span>
                    </h1>
                </section>
            </nav>
            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Navbar;
