import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Veg()
{
    const dispatch = useDispatch()
const vegproducts =useSelector((state)=>state.products.Veg);
const items =vegproducts.map((product,index)=>(
    <li key={index} className="veg-product-item">
         <span className="product-name">{product.name}</span>
         <span className="product-price">${product.price}</span>

        {product.name}:${product.price}

        <button onClick={()=>dispatch( addToCart(product))} className="add-to-cart-button">Add to cart</button></li>

));

    return(
        <>
        
          <div className="veg-container">
        <h1 className="veg-header">veg product</h1>
        <ul className="veg-product-list">{items}</ul>
        </div>
        </>
    )
}
export default Veg;