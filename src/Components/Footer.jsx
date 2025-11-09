import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";
const Footer = () => {

    return(
        <footer className="bg-slate-900 shadow-md">
            <div className="container mx-auto px-4">
                <div className="min-h-16">
                    <div className="flex justify-between items-center flex-col md:flex-row py-10">
                        <h2 className="text-2xl pb-3 font-bold text-white">Subscribe Our Newsletter</h2>
                        <form className="md:w-1/2 w-full md:mt-0 relative">
                            <input type="email" placeholder="Enter Your Email" className="py-3 px-4 shadow-md rounded w-full text-white outline-1 outline-white"/>
                            <button className="bg-gray-200 py-2 px-4 rounded-full absolute right-3 top-1">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 text-white py-8 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
                        <div>
                            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-extrabold p-3 inline [border-radius:60%_40%_30%_70%/60%_30%_70%_40%]">ShopBuy</h1>
                            <p className="pt-5">ShopBuy is your one-stop online store for quality fashion, electronics, home essentials, and accessories. We bring you affordable prices, fast delivery, and a smooth shopping experience from the comfort of your home.
                                Discover, shop, and enjoy because at ShopBuy, style meets convenience.</p>
                            <div className="flex gap-3 items-center my-2">
                                <FaFacebook size={25}/>
                                <FaYoutube size={25}/>
                                <FaInstagram size={25} />
                                <FaLinkedin size={25}/>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-4">Pages</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-4">Category</h2>
                            <ul>
                                <li>
                                    <Link to="/">Electronics</Link>
                                </li>
                                <li>
                                    <Link to="/">Fashion</Link>
                                </li>
                                <li>
                                    <Link to="/">Office Accessories</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-4">Contact</h2>
                            <p>70 Adebayo Street, LagosState, Nigeria</p>
                            <p>+234 816 897 3060</p>
                            <p>aghoghoogbotor@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center py-4 text-white">
                <p>Copyright &copy; 2025 Sylvia Charles</p>
            </div>
        </footer>
    )
}

export default Footer