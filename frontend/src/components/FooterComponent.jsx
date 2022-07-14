import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: "6rem"}}>
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-4">
                <h5 className="text-white mb-4">Get In Touch</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <h5 className="text-white mb-4">Quick Link</h5>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Career</a>
            </div>
            <div className="col-md-6 col-lg-4">
                <h5 className="text-white mb-4">Popular Link</h5>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Career</a>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
      
      Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer