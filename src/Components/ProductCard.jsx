import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    
    return (
        <Link to={`/product/${product.id}`}>
            <div className="shadow-lg bg-gray-100  cursor-pointer p-4 rounded-md">
                <img src={product.images} alt={product.title} className="rounded-md h-[300px] w-full"/>
                <div className="py-3">
                    <h2 className="text-lg font-semibold pb-2">{product.title.substring(0,20) + "..."}</h2>
                    <p className="text-sm text-zinc-500 border-b-2 border-b-zinc-200 pb-4">{product.description.substring(0,50) + "..."}</p>
                    <div className="flex justify-between mt-4 items-center">
                        <p className="text-lg font-semibold">&#8358;{product.price}</p>
                        <p className="hover:font-semibold">View Details</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}
export default ProductCard