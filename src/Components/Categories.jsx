import React, { useState } from 'react'
import { BiCart } from "react-icons/bi";
import { products } from '../Data/Data';
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Categories() {

    const CategList = ["All", "Electronics", "Clothing", "Home", "Sports"];

    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((product) => product.category === activeCategory);

    return (
        <section className="cont-product">
            <div className="grid">

                <div className="catg">
                    <h4>Categories</h4>
                    <ul>
                        {CategList.map((Categ, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveCategory(Categ)}
                                className={activeCategory === Categ ? "active" : ""}
                            >
                                {Categ}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="products">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`/ProductDetail/${product.id}`} style={{textDecoration:"none", color:"black"}}>
                        <div  className="product-card">
                            <div className="image">
                                <img src={product.image} alt="image" />
                            </div>

                            <div className="prod-content">
                                <h4>{product.title}</h4>

                                <div className="rating">
                                    <BsStarFill className='icn' />
                                    <BsStarFill className='icn' />
                                    <BsStarFill className='icn' />
                                    <BsStarFill className='icn' />
                                    <BsStarHalf style={{ marginRight: "10px" }} className='icn' />
                                    <p>{product.rating}</p>
                                </div>

                                <div className="cart">
                                    <span className='money'>{product.price}</span>
                                    <span className='icn-cart'>
                                        <BiCart size={24} />
                                    </span>
                                </div>

                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}