import React from 'react'
import "./Card.css"
import Mobilepic from "./mobilepic.webp"
import Mobilepic1 from "./mobilepic1.webp"
import Mobilepic3 from "./mobile3.webp"
import Mobilepic4 from "./mobile4.webp"
import { Link } from 'react-router-dom'
import Cars1 from "./cars1.webp"
import Cars2 from "./cars2.webp"
import Cars3 from "./cars4.webp"

export default function Card() {
    return (
      <>
       <div className='mobile-see-more container'>
            <h4 className='mobile-heading'>Cars</h4>
            <Link to="/cars" className='view-btn'>View more</Link>
          </div>
        <div className='all-card-container'>
         
            <div className="card card1" >
  <img src={Cars1} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 13 Lacs</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text"><strong>Potohar jimny jeep sj410</strong> <br />
    Gulberg Greens, Islamabad
</p>
  <small className="update-time"> 1 day ago</small>
  </div>
</div>
     <div className="card card1" >
  <img src={Cars2} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 26 Lacs</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text"><strong>Vitz 2014 Reg 2017 </strong> <br />
    Bahadurabad, Karachi
</p>
  <small className="update-time">12 days ago</small>
  </div>
  </div>
          <div className="card card1" >
  <img src={Cars3} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong>Rs 62.30 Lacs</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text"><strong>HONDA CIVIC 2020 MODEL</strong><br />
    Satellite Town, Rahimyar Khan
</p>
  <small className="update-time"> 30 days ago</small>
  </div>
</div>
     <div className="card card1" >
  <img src={Cars1} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong>Rs 15 Lacs</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text"><strong>Mhran VXR FOR SELL </strong> <br />
    Alipur - Muzaffargarh Road
</p>
  <small className="update-time">20 days ago</small>
  </div>
    </div>
      
        </div>

         <div className='mobile-see-more container mobile-main-container'>
            <h4 className='mobile-heading'>Mobile phone</h4>
            <Link to="/mobile" className='view-btn'>View more</Link>
          </div>
        <div className='all-card-container'>
         
            <div className="card card1" >
  <img src={Mobilepic} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 70,000</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text">Apple iPhone XS Max – 64GB | PTA Approved
</p>
  <small className="update-time"> 30 mins ago</small>
  </div>
</div>
     <div className="card card1" >
  <img src={Mobilepic1} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 170,000</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text">Apple iPhone 11 Max – 128GB | PTA Approved
</p>
  <small className="update-time">12 days ago</small>
  </div>
  </div>
          <div className="card card1" >
  <img src={Mobilepic3} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 40,000</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text">Oppo F15 8– 128GB | PTA Approved
</p>
  <small className="update-time"> 30 days ago</small>
  </div>
</div>
     <div className="card card1" >
  <img src={Mobilepic4} className="card-img-top" alt="..."/>
  <div className="card-body">
   <div className='price'>
 <p>   <strong> Rs 110,000</strong> </p>
 <p>🤍</p>
   </div>

    <p className="card-text">Apple iPhone 13  – 128GB |NON PTA 
</p>
  <small className="update-time">20 days ago</small>
  </div>
    </div>
      
        </div>


        </>
    )
}
