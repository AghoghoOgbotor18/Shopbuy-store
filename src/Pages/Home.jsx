import React, { useState } from "react";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../Features/Products/ProductSlice";

//Categories Buttons
const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Office Accessories"
];

const Home = () => {
    
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.product.selectedCategory);

    return(
        <div>
            <div className="bg flex flex-col gap-8 relative justify-center pl-10 p-5">
                <div className="bg-black/70 absolute top-0 left-0 w-full h-[80vh]"></div>
                <h2 className="text-4xl text-center md:text-left md:text-6xl font-bold text-white z-10 leading-5.5 md:leading-9">Discover, Shop and Love <br/><br/> What You Buy</h2>
                <p className="text-center text-lg md:text-left md:w-[70%] lg:w-[50%] text-white z-10">Find everything you need, from fashion to tech - all in one place. Quality products, unbeatable prices, and fast delivery right to your door.</p>
                <button className="z-10 bg-gradient-to-r from-purple-600 to-pink-600 border-0 w-[150px] py-3 font-bold px-6 rounded"><a href="#item" className="text-white">Shop Now</a></button>
            </div>
            <div className="container mx-auto my-10 px-4">
                <div className=" container mx-auto flex flex-wrap gap-4" id="items">
                    {categories.map((cat) => {
                        const isActive = cat === selectedCategory;
                        return (
                            <button
                            key={cat}
                            onClick={() => dispatch(setSelectedCategory(cat))}
                            className={`py-2 md:py-2 px-4 rounded-md transition-all ease-in 
                                ${isActive 
                                ? "bg-zinc-400 scale-105" : "bg-gray-300  hover:bg-zinc-400"}`
                            }
                            >
                            {cat}
                            </button>
                        );
                    })}
                </div>
                <ProductGrid />
            </div>

            <Footer />
        </div>
    )
}

export default Home