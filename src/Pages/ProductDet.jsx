// import React, { useState } from "react";
import { Link ,useParams} from "react-router-dom";
import { BsArrowLeft ,BsStarHalf, BsStarFill} from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { products } from "../Data/Data";

export default function ProductDet() {
  // const [count,setcount] = useState();

  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );
  return (
    <>
      <Link to="/" className="Back-home">
        <BsArrowLeft /> <p> Back to Home</p>
      </Link>

      <div className="por-detail">
        <div className="image-det">
          <img src={product.image} alt="" />
        </div>
        <div className="pro-content">
          <h3>{product.title}</h3>
          <div className="rating">
            <BsStarFill className="icn" />
            <BsStarFill className="icn" />
            <BsStarFill className="icn" />
            <BsStarFill className="icn" />
            <BsStarHalf style={{ marginRight: "10px" }} className="icn" />
            <span style={{marginLeft:"5px"}}>{product.rating} </span>
          </div>
          <h2>{product.price}</h2>
          <p>{product.subtitle}
          </p>
          <div className="color">
            <h5>Color</h5>
            <div className="color-st">
              {product.color.map((col, index) => (
                <span key={index} className="color-badge">{col}</span>
              ))}
              
            </div>
          </div>
          <div className="color">
            <h5>size</h5>
            <div className="size-st">
              {product.size?.map((siz, index) => (
                <span key={index} className="color-badge">{siz}</span>
              ))}
              
            </div>
          </div>
          
          <div className="quantity">
            <h5>Quantity</h5>
            <div className="quantity-count">
              <button className="count-btn">-</button>
            <div className="count">0</div>
            <button className="count-btn">+</button>
            </div>
          </div>
          <button className="add-cart"> <BiCart size={25}/>Add to Cart</button>
         <div className="last">
           <p>✓ Free shipping on orders over $50</p>
          <p>✓ 30-day money-back guarantee</p>
          <p>✓ 2-year warranty included</p>
         </div>
        </div>
      </div>
    </>
  );
}
