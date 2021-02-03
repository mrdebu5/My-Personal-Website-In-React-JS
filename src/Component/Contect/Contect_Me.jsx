import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import Roll from 'react-reveal/Roll';
import RubberBand from 'react-reveal/RubberBand';
const Contact_Me = () => {
  return (
    <MDBContainer>
            <section className="contact-section my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
            <Roll left cascade>
            Let's connect to each other!
            </Roll>
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
            <Roll cascade>
            I am happy to give you a Support and make your day, just tell me what is your
            thougths to deal with me.
            </Roll>
            </p>
            <RubberBand>
                <MDBRow>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                        <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                        <h4 className="font-weight-bold">Marketing</h4>
                        <p className="grey-text">
                        I can help you to improve your SEO reagrading to your site, as well as i can
                        create and improve functionlity of your site.
                        </p>
                        <MDBBtn color="primary" size="sm">
                        Learn more
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                        <MDBIcon icon="cogs" size="2x" className="pink-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                        <h4 className="font-weight-bold">Customization</h4>
                        <p className="grey-text">
                        I can Customize your site or develop new site according to you,
                        what ever you like to make Customization i'll be do for you in
                        sort time.
                        </p>
                        <MDBBtn color="pink" size="sm">
                        Learn more
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                        <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                        <h4 className="font-weight-bold">Support</h4>
                        <p className="grey-text">
                        From to you this bond will always atteched to you once you 
                        are connected with us,to Support you i will give you the best response.
                        </p>
                        <MDBBtn color="purple" size="sm">
                        Learn more
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBCol>
                </MDBRow>
                <MDBCard>
                    <MDBRow>
                    <MDBCol lg="8">
                        <MDBCardBody className="form">
                        <h3 className="mt-4">
                            <MDBIcon icon="envelope" className="pr-2" />
                            Write to me:
                        </h3>
                        <MDBRow>
                            <MDBCol md="6">
                            <div className="md-form mb-0">
                                <MDBInput
                                type="text"
                                id="form-contact-name"
                                label="Your name"
                                />
                            </div>
                            </MDBCol>
                            <MDBCol md="6">
                            <div className="md-form mb-0">
                                <MDBInput
                                type="text"
                                id="form-contact-email"
                                label="Your email"
                                />
                            </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                            <div className="md-form mb-0">
                                <MDBInput
                                type="text"
                                id="form-contact-phone"
                                label="Your phone"
                                />
                            </div>
                            </MDBCol>
                            <MDBCol md="6">
                            <div className="md-form mb-0">
                                <MDBInput
                                type="text"
                                id="form-contact-company"
                                label="Your company"
                                />
                            </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                            <div className="md-form mb-0">
                                <MDBInput
                                type="textarea"
                                id="form-contact-message"
                                label="Your message"
                                />
                                <MDBBtn rounded color="blue" onClick={()=>alert("I'll be connect to you soon!")} >
                                <MDBIcon icon="paper-plane" />
                                </MDBBtn>
                            </div>
                            </MDBCol>
                        </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol lg="4">
                        <MDBCardBody className="contact text-center h-100 white-text">
                        <h3 style={{color:"black"}} className="my-4 pb-2">Contact information</h3>
                        <ul className="text-lg-left list-unstyled ml-4">
                            <li>
                            <p style={{color:"black"}}>
                                <MDBIcon icon="map-marker-alt" className="pr-2" />
                                Ahmedabad, 380001 India.
                            </p>
                            </li>
                            <li>
                            <p style={{color:"black"}}>
                                <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
                            </p>
                            </li>
                            <li>
                            <p style={{color:"black"}}>
                                <MDBIcon icon="envelope" className="pr-2" />
                                Dclanghanoja@gmail.com
                            </p>
                            </li>
                        </ul>
                        <hr className="hr-light my-4" />
                        <ul className="list-inline text-center list-unstyled">
                            <li className="list-inline-item">
                            <a href="https://github.com/mrdebu5" rel="noreferrer" target="_blank" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="github" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://in.linkedin.com/in/devang-langhanoja-29961719b" rel="noreferrer" target="_blank" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="linkedin-in" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://www.instagram.com/mr_debu_5/" target="_blank" rel="noreferrer" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="instagram" />
                            </a>
                            </li>
                        </ul>
                        </MDBCardBody>
                    </MDBCol>
                    </MDBRow>
            </MDBCard>
            </RubberBand>
        </section>
    </MDBContainer>
  );
}

export default Contact_Me;
