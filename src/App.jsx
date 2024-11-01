import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import PurchaseHistory from "./PurchaseHistory";
import "./app.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent.";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FacebookLoginComponent";

function App() {
  const Carts = useSelector((state)=> state.cart);
  const totalItems = Carts.reduce((sum, item)=> sum + item.quantity,0);


  

  return (
    <>
     <h1 style={{background:"white", color:"green"}}>WELCOME</h1> 
     
     <GoogleOAuthProvider clientId="616647690231-mbtelovc6i2df7gcro705e1hlm1p2aap.apps.googleusercontent.com">
     <GoogleLoginComponent/>
     <FacebookLoginComponent/>
     </GoogleOAuthProvider>
     
     
     
         <Router>
         <nav className="navbar">
  <Link to="/home" className="nav-button">
  <i className="fas fa-home"></i> Home
</Link> 

<Link to="/Veg" className="nav-button">
  <i className="fas fa-leaf"></i> Veg
</Link>

<Link to="/NonVeg" className="nav-button">
  <i className="fas fa-drumstick-bite"></i> NonVeg
</Link>

<Link to="/ContactUs" className="nav-button">
  <i className="fas fa-phone-alt"></i> Contact Us
</Link>

<Link to="/AboutUs" className="nav-button">
  <i className="fas fa-info-circle"></i> About Us
</Link>

<Link to="/PurchaseHistory" className="nav-button">
  <i className="fas fa-history"></i> Purchase History
</Link>

<Link to="/Cart" className="nav-button">
  <i className="fas fa-shopping-cart"></i> Cart({totalItems})
</Link>

     </nav>


   

         <Routes>
          <Route path="/home" element={<Home/>}></Route>
       <Route path="/Veg" element={<Veg/>}></Route>
       <Route path="/NonVeg" element={<NonVeg/>}></Route>
       <Route path="/ContactUs" element={<ContactUs/>}></Route>
       <Route path="/AboutUs" element={<AboutUs/>}></Route>
       <Route path="/PurchaseHistory" element={<PurchaseHistory/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>


         </Routes>

         </Router> 
    
        
      
     
    </>
  )
}

export default App;
