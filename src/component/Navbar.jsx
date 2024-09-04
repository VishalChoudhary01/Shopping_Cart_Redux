import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/Cart/CartSlice";

const Navbar = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <nav className="sticky top-0 z-30 bg-neutral-100 bg-opacity-65 backdrop-blur-md w-full border-b border-gray-700 flex items-center justify-between py-3 lg:px-6 md:px-4 px-2">
                <h1 className="lg:text-[1.8em] md:text-[1.4em] text-[1.2em] font-bold font-[Libre Baskerville] italic">
                    Digi <span className="text-green-500 font-extrabold">Market</span>
                </h1>
                <section className="flex items-center justify-center gap-x-8 hover:text-red-600 hover:font-bold transition-all">
                    <h1
                        className="relative flex justify-center items-center gap-x-3 px-4 cursor-pointer"
                        onClick={openCart}
                    >
                        <FaShoppingCart className="relative lg:text-[1.6em] md:text-[1.3em] text-[1em]" />
                        {totalItems > 0 && (
                            <span className="absolute top-[2px] right-[-10px] text-white text-[0.8em] bg-gray-800 font-bold rounded-full w-6 h-6 flex items-center justify-center p-2">
                                {totalItems}
                            </span>
                        )}
                        <span className="text-gray-900 lg:text-[1.6em] md:text-[1.3em] text-[1em] font-medium hover:text-red-600 transition-all">Cart</span>
                    </h1>
                </section>
            </nav>
            <Cart isOpen={isCartOpen} onClose={closeCart} />
        </>
    );
};

export default Navbar;
