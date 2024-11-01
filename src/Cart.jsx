import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove } from './store';

function Cart() {
  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const items = cartProducts.length === 0 ? (<p> Your cart is empty</p>): cartProducts.map((product,index) =>
    <li key={index}>
      {product.name} - ${product.price}   Quantity: {product.quantity} 


       <button style={{background:'red'}} onClick={()=>dispatch(decrement(product))}>-</button>
       <button style={{background:'green'}} onClick={()=>dispatch(increment(product))}>+</button>  
        <button style={{background:'pink'}} onClick={()=>dispatch(remove(product))}>Remove</button>
    </li>
  )

  // Take a variable to maintain the discount percentage
  const [discountPercent,setDiscountPercent] = useState(0);



  const[couponCode,setcouponCode] = useState('');
  const[couponCodeDiscountPercantage, setcouponDiscountPercantage] = useState(0);
  const handleApplycouponCode =()=>{
    switch(couponCode){
      case 'RATAN10':
        setcouponDiscountPercantage(10);
        break;

      case 'RATAN20':
        setcouponDiscountPercantage(20);
        break;

      default:
        alert("Invalid coupon code check its onces");
        setcouponDiscountPercantage(0);


    }
  }

  // This is called when we click on discount button
  const handleApplyDiscount = (discountValue) =>{
    setDiscountPercent(discountValue);
  }

  // main  logics to calculate the all amounts
  const calculateTotal= () => {
    // calculate the total
    const total = cartProducts.reduce((sum,item) => sum + item.price * item.quantity,0);
    
    // calculate the discount
    const discountAmount = total * (discountPercent/100);

    // calculate netAmount 
    const netAmount = total - discountAmount;
     const couponcodedisamount = total * (couponCodeDiscountPercantage/100);
     const finalamount = total-discountAmount-couponcodedisamount;
    return{
      total:parseFloat(total.toFixed(2)),
      discountAmount:parseFloat(discountAmount.toFixed(2)),
      netAmount:parseFloat(netAmount.toFixed(2)),
      couponcodedisamount:parseFloat(couponcodedisamount.toFixed(2)),
      finalamount:parseFloat(finalamount.toFixed(2))

    }
  } 
 const {total,discountAmount,netAmount,couponcodedisamount,finalamount} = calculateTotal();


  return (
    <>
     <h1>My Cart</h1>
       <ul>{items}</ul>
       <p>Total before discounts: ${total}</p>
       <button style={{color:"green"}} onClick={() => handleApplyDiscount(10)}>Apply 10% dicount</button>
       <button style={{color:"green"}} onClick={() => handleApplyDiscount(20)}>Apply 20% dicount</button>
       <button style={{color:"green"}} onClick={() => handleApplyDiscount(30)}>Apply 30% dicount</button>
      <br></br> <label>Enter coupon code</label>
      <input type="text" value={couponCode} onChange={(e)=>setcouponCode(e.target.value)} placeholder='Enter a number' />
      <button style={{color:'pink'}} onClick={handleApplycouponCode}>Apply Coupon</button>
       <h4 style={{color:'gold'}}>Discount percent Applied: ${discountPercent}</h4>
       <h4 style={{color:'gold'}}>Discount Amount: ${discountAmount} </h4>
       <h4 style={{color:'gold'}}>Net Amount After discount: ${netAmount}</h4>
       <h4 style={{color:'gold'}}>Couponcode DiscountAmount{couponcodedisamount}</h4>
       <h4 style={{color:'gold'}}>Final Amount After All Discouts{finalamount}</h4>
     
    </>
  )
}

export default Cart;