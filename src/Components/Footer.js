import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <>
        <div className='footer'>
            <div className="footer-section">
                <h4>Popular Categories</h4>
                <p>Cars</p>
                <p>Flats for rent</p>
                <p>Mobile Phones</p>
                <p>Jobs</p>
            </div>

            <div className="footer-section">
                <h4>Trending Searches</h4>
                <p>Bikes</p>
                <p>Watches</p>
                <p>Books</p>
                <p>Dogs</p>
            </div>

            <div className="footer-section">
                <h4>About Us</h4>
                <p>About Dubizzle Group</p>
                <p>OLX Blog</p>
                <p>Contact Us</p>
                <p>OLX for Businesses</p>
            </div>

            <div className="footer-section">
                <h4>OLX</h4>
                <p>Help</p>
                <p>Sitemap</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
            </div>

            <div className="footer-section follow">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  
                <div className='footericon'>   <a href="/"> <i className="fa-brands fa-facebook"></i></a></div>
                <div className='footericon'><a href="/">    <i className="fa-brands fa-youtube"></i></a></div>
                  <div className='footericon'><a href="/">  <i className="fa-brands fa-instagram"></i></a></div>
          <div className='footericon'>   <a href="/"> <i class="fa-brands fa-square-twitter"></i></a></div>
                </div>
                <div className='top-btn'>  <a href='/' className="back-top"><i class="fa-solid fa-angle-up"></i> Back to top</a></div>
            </div>
          
        </div>

        <div className='last-footer'>
<p><strong>Classifieds in Pakistan </strong><span>.© 2006 – 2025 OLX</span></p>
        </div>
        </>
    )
}
