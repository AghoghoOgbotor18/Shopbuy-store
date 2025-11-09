import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa"
import { useState } from "react";
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Features/Products/ProductSlice";

const Navbar = () => {
    //we want that when user clicks on the user icon, it should display "sign up and my account"
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.product.searchTerm);

    //user toggle
    const handleUser = () => {
        setIsOpen(!isOpen);
    }

    //cart
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)


    return(
        <header className="bg-white shadow-md">
            <>
                <div className="py-4 shadow-md">
                    <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 relative items-center">
                        <div className="flex gap-4">
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/" >About</Link>
                            </li>
                            <li>
                                <Link to="/" >FAQs</Link>
                            </li>
                            <li>
                                <Link to="/" >Contact</Link>
                            </li>
                        </div>

                        <div className={`${isOpen ? "flex flex-col absolute right-2 top-12 z-10 bg-zinc-50 p-4": "hidden"}`}>
                            <li className="py-2">
                                <Link to="/">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/">My Account</Link>
                            </li>
                        </div>
                        <FaRegUser size={30} 
                        className="bg-gray-200  p-2 text-black rounded cursor-pointer" onClick={handleUser}/>
                    </ul>
                </div>
                <nav className="flex justify-between items-center container mx-auto md:py-2 py-2 px-2">
                    <div className="flex items-center">
                        <Link to="/">
                            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold p-3 [border-radius:60%_40%_30%_70%/60%_30%_70%_40%]">ShopBuy</h1>
                        </Link>
                    </div>
                    <form className="w-1/2 sm:block hidden">
                        <input type="text" className="bg-zinc-100 rounded-md focus:outline-0 border-2 border-zinc-200 py-2 px-3 w-full" placeholder="search product"
                        value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
                    </form>
                    <div className="relative">
                        <Link to="/cart">
                            <FiShoppingCart size={42} className="cursor-pointer bg-gray-100 px-3 py-3 rounded-full"/>
                            {itemCount > 0 && <span className="absolute -top-2 right-0 flex bg-blue-600 text-white text-xs rounded-full w-5 h-5 items-center justify-center">{itemCount}</span>}
                        </Link>
                    </div>
                </nav>
            </>
        </header>
    )
}

export default Navbar