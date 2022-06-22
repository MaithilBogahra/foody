import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Contact(props) {


    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        subject: yup.string().required(),
        message: yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { errors, handleChange,handleSubmit,handleBlur,touched } = formik;
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <h1 className="display-5 mb-3">Contact Us</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                                <h5 className="text-white">Call Us</h5>
                                <p className="mb-5"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                                <h5 className="text-white">Email Us</h5>
                                <p className="mb-5"><i className="fa fa-envelope me-3" />info@example.com</p>
                                <h5 className="text-white">Office Address</h5>
                                <p className="mb-5"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                                <h5 className="text-white">Follow Us</h5>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-youtube" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-0" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <Formik values={formik}>
                                <Form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Your Name" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                />
                                                {errors.name && touched.name ? 
                                                <p>{errors.name}</p>
                                                :
                                                ""
                                                }
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                 type="email" 
                                                 className="form-control" 
                                                 id="email" 
                                                 placeholder="Your Email"
                                                 onChange={handleChange}
                                                onBlur={handleBlur}
                                                  />
                                                   {errors.email && touched.email ? 
                                                <p>{errors.email}</p>
                                                :
                                                ""
                                                }
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject"
                                                 placeholder="Subject"
                                                 onChange={handleChange}
                                                onBlur={handleBlur}
                                                  />
                                                   {errors.subject&& touched.subject ? 
                                                <p>{errors.subject}</p>
                                                :
                                                ""
                                                }
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                 className="form-control" 
                                                 placeholder="Leave a message here" 
                                                 id="message" 
                                                 style={{ height: 200 }} 
                                                 defaultValue={""} 
                                                 onChange={handleChange}
                                                onBlur={handleBlur}
                                                 />
                                                  {errors.message && touched.message ? 
                                                <p>{errors.message}</p>
                                                :
                                                ""
                                                }
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Google Map Start */}
            <div className="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{ marginBottom: '-6px' }}>
                <iframe className="w-100" style={{ height: 450 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            {/* Google Map End */}
        </div>

    );
}

export default Contact;