import React from "react";
import { FiArrowDownLeft, FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../Features/Cart/cartSlice";


const ProductDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => 
        state.product.items.find((p) => p.id === parseInt(id))
    );

    if(!product){
        <div className ="container mx-auto px-4 py-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/" className="text-blue-600 hover:text-blue-800">Return to Home</Link>
            </div>
        </div>
    }
    console.log(product);

    return(
        <div className="overflow-x-hidden container mx-auto px-4 py-8">
            <div>
                <Link to="/" className="mb-8 text-sm flex items-center gap-1"><FiArrowLeft/>Back to Products</Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className=" container mx-auto shadow-md p-4 rounded w-[300px]">
                        <img src={product.images} alt={product.title} className="rounded"/>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <div className="mb-6">
                            <span className="text-xl font-bold">&#8358;{product.price}</span>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold mb-1">Category</h3>
                            <span className="inline-block bg-zinc-100 p-1 px-2 rounded text-sm">{product.category}</span>
                        </div>
                        <button className="w-full md:w-1/3 bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300 cursor-pointer" onClick={() => dispatch(addToCart(product))}><FiShoppingCart />Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
