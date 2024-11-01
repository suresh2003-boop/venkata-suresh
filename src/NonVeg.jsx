import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg()
{
const dispatch = useDispatch()

    const NonVegproducts =useSelector((state)=>state.products.NonVeg);
const item = NonVegproducts.map((product,index)=>(
    <li key={index} className="nonveg-product-item">
         <span className="product-name">{product.name}</span>
         <span className="product-price">${product.price}</span> 
    {product.name}:${product.price} 

    <button onClick={()=>dispatch( addToCart(product))} className="add-to-cart-button">Add to cart</button></li>));

    return(
        <>
          <div className="nonveg-container">
        <h1 className="nonveg-header">Nonveg products</h1>
        <ul className="nonveg-product-list">{item}</ul>
        </div>
        </>
    );
}
export default NonVeg;