import React from "react";
import Leftbox from "../../Components/leftbox.component/leftbox.component";
import { useNavigate } from "react-router-dom";
import Rightbox from "../../Components/rightbox.component/rightbox";
import Boxcomponent from "../../Components/Boxcomponent/Boxcomponent";
import "./Home.css"
import Footer from "../../Components/Footer.component/Footer";

export default function Home() {
  const navigate=useNavigate();
  const gotocheckout=()=>{
    navigate('./menu')
  }
 
  return (
    <>
    <div className="image-container1">
      <div className="text">
        <h1 className="tag">Craving to grab a slice..?</h1>
        <button className="order-button" onClick={gotocheckout}>Order Now</button>
      </div>
      

     
    </div>
    <div className="reasons-container">
      <div className="reason 1"> <b>Fresh, high-quality ingredients:</b><br/><br/> We use only the freshest, highest-quality ingredients in our pizzas. From our homemade dough to our locally-sourced toppings, you can taste the difference in every bite.</div>
      <div className="reason 2"><b>Wide variety of options</b><br/><br/>: We offer a wide variety of pizza options to suit every taste and dietary preference. Whether you're a meat lover, vegetarian, or gluten-free, we've got you covered.</div>
      <div className="reason 3"><b>Your wishes our duty</b><br/><br/>Overall, our pizza app offers a delicious, convenient, and customizable pizza experience with high-quality ingredients and excellent customer service. Give us a try, and we're confident you'll love our pizzas!</div>

    </div>
    <Footer/>
    

    
    
    
    
    
    
    </>
  )
}
