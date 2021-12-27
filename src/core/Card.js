import React from 'react'
import ImageHelper from "./helper/ImageHelper"
import {Redirect} from "react-router-dom"
import addItemToCart from './helper/CartHelper'

let isAuthenticated = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
}) => {

    const ProductName = product ? product.name : 'Product Name'
    const ProductDescription = product ? product.description : 'Product Description'
    const ProductPrice = product ? product.price : 'Product Price'

    const AddToCart = () => {
        if(isAuthenticated){
          addItemToCart(product, () => {})
        }
  
    }
  
    return (
        <div className="card text-white bg-dark border border-info col-10">
          <div className="card-header lead">{ProductName}</div>
          <div className="card-body">
            <ImageHelper product={product}/>
            <p className="lead mt-1 pl-1 rounded bg-success font-weight-normal text-wrap">
              {ProductDescription}
            </p>
            <p className="btn btn-success rounded btn-group-lg btn-md px-3">$ {ProductPrice}</p>
            <div className="row">
              <div className="col-12">
                <button
                  onClick={() => {AddToCart()}}
                  className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                  Add to Cart
                </button>
              </div>
              <div className="col-12">
                <button
                  onClick={() => {}}
                  className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  };

export default Card