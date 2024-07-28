export default function Page() {
    return (
        <div className="contact-1 content-area-5">
            <div className="container">
                <div className="main-title text-center">
                    <h1 className="mb-10">Get In Touch</h1>
                    <div className="title-border">
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="row g-0">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-pad2">
                            <div className="contact-form contact-pad">
                                <h3>Send us a Message</h3>
                                <form id="contact_form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group name">
                                                <input type="text" name="name" className="form-control"
                                                       placeholder="Name" aria-label="Full Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group email">
                                                <input type="email" name="email" className="form-control"
                                                       placeholder="Email Address" aria-label="Email Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group subject">
                                                <input type="text" name="subject" className="form-control"
                                                       placeholder="Subject" aria-label="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group number">
                                                <input type="text" name="phone" className="form-control"
                                                       placeholder="Phone" aria-label="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group message">
                                                <textarea className="form-control" name="message"
                                                          placeholder="Write message"
                                                          aria-label="Write message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send-btn text-center">
                                                <button type="submit" className="btn-6">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-pad2">
                            <div className="contact-details">
                                <h3>Opening Hours</h3>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Office Address</h4>
                                        <p>8 The Green Ste 8545 Dover, DE 19901</p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Phone Number</h4>
                                        <p>
                                            <a href="tel:+1-302-503-0000">+1-302-503-0000</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="ci-box d-flex">
                                    <div className="icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="detail align-self-center">
                                        <h4>Email Address</h4>
                                        <p>
                                            <a href="mailto:info@autoxv.com">info@autoxv.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
