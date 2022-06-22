import React from 'react';

function Product(props) {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Products</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Product Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                                <h1 className="display-5 mb-3">Our Products</h1>
                                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href>Browse More Products</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href>Browse More Products</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>Fresh Tomato</a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">$29.00</span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href><i className="fa fa-eye text-primary me-2" />View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href>Browse More Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product End */}
            {/* Firm Visit Start */}
            <div className="container-fluid bg-primary bg-icon mt-5 py-6">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
                            <p className="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        </div>
                        <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href>Visit Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Firm Visit End */}
        </div>

    );
}

export default Product;