import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import mumbai from "../images/mubai.jpg";
import goa from "../images/goa1.webp";
import chennai from "../images/Chennai.jpg";
import bangalore from "../images/bangalore.jpg";
import delhi from "../images/delhi.jpeg";
import kochi from "../images/88.jpg";
import flight1 from "../images/flight1.png";
import flight2 from "../images/flight2.png";
import flight3 from "../images/flight3.png";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});




function LandingScreen() {
  return (
    <div className="row landing">
      <div className="col-md-12 text-center" id="land">
        <h2 data-aos="zoom-in" style={{ color: "white",textShadow:" 2px 2px 4px #000000" ,fontSize: "60px", }}>
          SUNSET SHORES
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "white",textShadow:" 2px 2px 4px #000000"  }}>
          Choose us once, and you will choose us always.<br /><br />stay. float. refresh
        </h1>
        <p data-aos="zoom-in" style={{ color: "white",textShadow:" 2px 2px 4px #000000" ,fontSize: "60px",}}>We’re excited to invite you to explore our exclusive hotel booking platform, <br/>where your perfect stay 
          awaits! Whether you’re looking for a luxury retreat,<br/> a cozy getaway, or a business stopover, we’ve got the perfect 
          options tailored just for you.</p>
        <Link to="/home">
          <button className="btn btn-primary landingBtn" >Start Booking</button>
        </Link><br /><br /><br /><br /><br />
        <div className="more">
          <a href="#explore" style={{ color: "white",textShadow:" 2px 2px 4px #000000", fontSize:"19px" }}>Explore More<p><i class="arrow down"></i></p></a>
        </div>
      </div>

      <div className="col-md-12 text-center" id="explore">
        <div className="bass">
        <h3 >Top destinations in india</h3>

        <div class="scroll-container">
         <span className="container-1">
          <a href="/home"><img src={mumbai} alt="mumbai" width="600" height="400" /></a>
          <div class="top-left">MUMBAI</div>
          <div class="top-left-1">4177 accommodations</div>
          </span>
          <span className="container-1">
          <a href="/home"><img src={delhi} alt="delhi" width="600" height="400" /></a>
          <div class="top-left">DELHI</div>
          <div class="top-left-1">12786 accommodations</div>
          </span>
          <span className="container-1">
          <a href="/home"><img src={bangalore}alt="bangalore" width="600" height="400" /></a>
          <div class="top-left">BANGALORE</div>
          <div class="top-left-1">5378 accommodations</div>
          </span>
          <span className="container-1">
          <a href="/home"><img src={chennai} alt="chennai" width="600" height="400" /></a>
          <div class="top-left">CHENNAI</div>
          <div class="top-left-1">2676 accommodations</div>
          </span>
          <span className="container-1">
          <img src={goa} alt="goa" width="600" height="400" />
          <div class="top-left">GOA</div>
          <div class="top-left-1">9254 accommodations</div>
          </span>
          <span className="container-1">
          <img src={kochi} alt="kochi" width="600" height="400" />
          <div class="top-left">KOCHI</div>
          <div class="top-left-1">2165 accommodations</div>
          </span>
          </div>
        </div>

        <div className="col-md-12 text-center" id="flight">

        
          <h3 >Flights & Activities Promotions</h3>
          <div className="scroll-container">
           <a href="https://www.agoda.com/en-in/activities?cid=1915785"> <img src={flight1} alt="flight1" width="500" height="250"/></a>
            <a href="https://www.agoda.com/en-in/flights?cid=1904213"><img src={flight2} alt="flight2" width="500" height="250"/></a>
            <a href="https://www.agoda.com/en-in/flights?cid=1904159"><img src={flight3} alt="flight3" width="500" height="250"/></a>
          </div>
          
        </div>

        <div className="abt">
         <div className="abt-1">
          <p><b>Help</b></p>
          <p>help center</p>
          <p>FAQs</p>
          <p>privacy policy</p>
          <p>cookies policy</p>
          <p>terms of use</p>
          <p>content guide and reporting</p>
          <p>digital service</p>
         </div>
         <div className="abt-1">
          <p><b>Company</b></p>
          <p>about us</p>
          <p>careers</p>
          <p>blog</p>
         </div>
         <div className="abt-1">
         <p><b>Destinations</b></p>
         <p>countries/tourist</p>
         </div>
         <div className="abt-1">
         <p><b>Parterns with Us</b></p>
         <p>prem portal partner</p>
         <p>lokesh resource</p>
         <p>advertise on sunset shores</p>
         </div>
         <div className="abt-1">
         <p><b>Get the App on</b></p>
         <p>App store</p>
         <p>Google playstore</p>
         </div>
         </div>
         <div>
        </div>

      </div>

    </div>
  );
}

export default LandingScreen;
