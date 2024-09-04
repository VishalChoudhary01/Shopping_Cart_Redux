// ProductCard.js
import Button from "./Button";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/Cart/CartSlice";
import products from "../Context/products";
import { useCallback } from "react";

const ProductCard = ({ onAddToCart }) => {
    const dispatch = useDispatch();

    const addToCartHandler = useCallback((product) => {
        dispatch(addItemToCart(product));
        if (onAddToCart) {
            onAddToCart(); // Trigger any additional animation or effect
        }
    }, [dispatch, onAddToCart]);

    return (
        <>
            {products.map((product) => (
                <section key={product.id} className="lg:w-[185px] sm:h-[280px] md:w-[170px] md:h-[250px] sm:w-[160px] mb-4 min-w-[100px] lg:h-[260px] min-h-[240px] flex rounded-md border-b-2 border-r-2 border-l border-t border-gray-600 shadow-lg transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl">
                    <section className="w-full h-full rounded flex items-center flex-col p-1">
                        <section className="bg-stone-700 rounded-md w-full h-[70%] hover:bg-stone-800"></section>
                        <section className="w-full h-[30%] flex flex-col items-center justify-center">
                            <p className="flex items-center justify-center font-semibold text-[0.6em] gap-x-1 pb-1">
                                <span>{product.name.slice(0, 25)}</span>
                                <span className="flex items-center font-bold text-gray-600">
                                    <span>₹</span>
                                    <span>{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(product.price)}</span>
                                </span>
                            </p>
                            <p>
                                <Button
                                    buttonStyle="bg-gray-900 text-white text-[0.7em] flex items-center gap-x-2 rounded-md transition-transform duration-300 transform hover:scale-105 active:bg-blue-800 active:scale-95"
                                    buttonEvent={() => addToCartHandler(product)}
                                    buttonContent={
                                        <>
                                            <span>ADD TO CART</span>
                                            <span>
                                                <IoCart className="text-lg" />
                                            </span>
                                        </>
                                    }
                                />
                            </p>
                        </section>
                    </section>
                </section>
            ))}
        </>
    );
};

export default ProductCard;
