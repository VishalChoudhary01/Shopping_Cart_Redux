import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from "../features/Cart/CartSlice";
import { RiCloseLargeLine } from "react-icons/ri";
import { LuPlusCircle } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
const Cart = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const increaseQuantityHandler = (id) => {
        dispatch(increaseItemQuantity(id));
    };

    const decreaseQuantityHandler = (id) => {
        dispatch(decreaseItemQuantity(id));
    };

    const removeItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <>
            {isOpen && (
                <section
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
                    onClick={onClose}
                >
                    <section
                        className={`fixed top-0 right-0 lg:w-1/4 w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                            isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                        onClick={(e) => e.stopPropagation()} // Prevent click propagation to close the modal unintentionally
                    >
                        <section className="p-4">
                            <button onClick={onClose} className="text-red-500 w-full flex justify-end text-2xl"><RiCloseLargeLine/></button>
                            <h1 className="text-2xl font-bold">Cart</h1>
                            {cartItems.length === 0 ? (
                                <section className="w-full text-center">
                                    <p className="mt-4 font-semibold text-[1.2em] text-gray-500">Your Cart is Empty</p>
                                </section>
                            ) : (
                                <ul className="list-disc mt-4 w-full">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="flex items-center justify-between py-2 border-b">
                                            <section className="w-[70%]">
                                                <h3 className="text-[0.8em] font-bold">{item.name}</h3>
                                                <section className="">
                                            <p className="text-[0.8em] font-medium text-gray-600"><span>₹</span>{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(item.price)} X {item.quantity} = <span>₹</span> <span>{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(item.totalPrice)}</span></p> 
                                                </section>
                                            </section>
                                            <section className="flex w-[30%] gap-x-3 items-center">
                                                <section className="flex w-full justify-end">
                                                <button
                                                    className="text-lg text-gray-500 hover:text-xl transition-all"
                                                    onClick={() => increaseQuantityHandler(item.id)}
                                                >
                                                    <LuPlusCircle/>
                                                </button>
                                                <span className="mx-2 font-semibold text-gray-800">{item.quantity}</span>
                                                <button
                                                    className=" text-base hover:text-lg text-gray-500 transition-all"
                                                    onClick={() => decreaseQuantityHandler(item.id)}
                                                >
                                                    <GrSubtractCircle/>
                                                </button>
                                                </section>
                                            
                                                <button
                                                    className="  text-red-500 text-xl  rounded"
                                                    onClick={() => removeItemHandler(item.id)}
                                                >
                                                    <MdDelete/>
                                                </button>
                                            </section>
                                        </li>
                                    ))}
                                    <section className="mt-4 text-gray-600 text-[1.1em] font-medium">
                                        Total Quantity: <span className="ml-1 font-semibold text-gray-900">{totalQuantity}</span> 
                                    </section>
                                    <section className="text-[0.9em] text-gray-700 font-semibold">
                                        Grand Total: <span className="text-[0.8em]">₹</span> <span>{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(totalPrice)}</span>
                                    </section>
                                </ul>
                            )}
                        </section>
                    </section>
                </section>
            )}
        </>
    );
};

export default Cart;
