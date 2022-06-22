import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    return (
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <small><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                    <small className="ms-4"><i className="fa fa-envelope me-2" />info@example.com</small>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a className="text-body ms-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="text-body ms-3" href><i className="fab fa-twitter" /></a>
                    <a className="text-body ms-3" href><i className="fab fa-linkedin-in" /></a>
                    <a className="text-body ms-3" href><i className="fab fa-instagram" /></a>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink exact className="nav-item nav-link active" to={"/"}>Home</NavLink>
                        <NavLink exact className="nav-item nav-link" to={"/about"}>About Us</NavLink>
                        <NavLink className="nav-item nav-link" to={"/product"}>Products</NavLink>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <NavLink exact className="dropdown-item" to={"/blog"}>Blog Grid</NavLink>
                                <NavLink exact className="dropdown-item" to={"/feature"}>Our Features</NavLink>
                                <NavLink exact className="dropdown-item" to={"/testimonial"}>Testimonial</NavLink>
                                <NavLink exact className="dropdown-item" to={"/error"}>404 Page</NavLink>
                            </div>
                        </div>
                        <NavLink exact className="nav-item nav-link" to={"/contact"}>Contact Us</NavLink>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <a className="btn-sm-square bg-white rounded-circle ms-3" >
                            <small className="fa fa-search text-body" />
                        </a>
                        <NavLink className="btn-sm-square bg-white rounded-circle ms-3" to={"/form"}>
                            <small className="fa fa-user text-body" />
                        </NavLink>
                        <a className="btn-sm-square bg-white rounded-circle ms-3" >
                            <small className="fa fa-shopping-bag text-body" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header;