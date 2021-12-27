import React, {useState, useLayoutEffect, useEffect} from 'react'
import Base from './Base'
import Card from './Card'
import { getProducts } from './helper/CoreApiCalls'



export default function Home() {

const [products, setProducts] = useState([])
const [error, setError] = useState(false)

const loadAllProducts = () =>{
    getProducts()
    .then((data) => {
        if(data?.error){
            setError(data?.error)
        }else{
            setProducts(data)
        }
    });
 }
    
useLayoutEffect(() => {
  loadAllProducts()
}, [])

return (
    <Base title="Home Page" description="Welcome to Tshirt store">
      <div className="row col-10">
        {products && products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card product={product}/>
            </div>
          );
        })}
      </div>
    </Base>
  );
}

