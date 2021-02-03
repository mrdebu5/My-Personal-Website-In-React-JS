import React from "react";
import {    MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBView, MDBMask, MDBCard } from "mdbreact";
import Zoom from 'react-reveal/Zoom';
const MyProject = () => {
    
  return (
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          My best projects
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          I have created so many project, but here is my top 4 project, we got the best response from folks.
        </p>
          <Zoom left>
          <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/40.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="cyan-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="hospital" className="pr-2" />
                    Health
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Covid-19 tracker</h4>
                <p>
                  This site is built in <b>React</b> Technology. In this site you can see the
                  daily covid case around your area, for fetching the data i use the web APi and
                  display data in the cart so that you can understand easly.
                </p>
                {/* <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn> */}
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="brown-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="camera" className="pr-2" />
                    Travelling
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Resort booking</h4>
                <p>
                  This project is used to create in <b>PHP</b> Technology. For fetching the data
                  and all i used <b>MySQL</b> as a backend Technology.
                </p>
                {/* <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn> */}
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="blue-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="eye" className="pr-2" />
                    Entertainment
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Adventure Club</h4>
                <p>
                  This is the about to provide travelling packages of different place, this is the static template show's you 
                  different location for travel.
                </p>
                {/* <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn> */}
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="green-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon fas icon="chart-line" className="pr-2" />
                    Marketing
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">E-Commarce</h4>
                <p>
                  This project is developed in <b>React</b> Technology. fully responsive, In this project
                  as backend i use Commarce JS to get the data from the API.
                </p>
                {/* <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn> */}
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          </Zoom>
          <Zoom bottom>
            <hr className="hr-light my-4" />
            {/* new part */}

            <MDBCard className="my-5 px-1 pb-5 text-center">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold my-5">
                  Some more!
              </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                If you want to see more project like this you can contect me on Email, instagram or github.

              </p>
              <MDBRow>

                <MDBCol  className="mb-md-0 mb-5">
                  <img
                    tag="img"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                    className="rounded z-depth-1-half img-fluid"
                    alt="Sample avatar"
                  />
                  <h4 className="font-weight-bold dark-grey-text my-4">Devang Langhanoja</h4>
                  <h6 className="text-uppercase grey-text mb-3">
                    Full-Stack Developer
                  </h6>
                  <a href="https://github.com/mrdebu5" rel="noreferrer" target="_blank" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="github" />
                </a>
                <a href="https://in.linkedin.com/in/devang-langhanoja-29961719b" rel="noreferrer" target="_blank" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="https://www.instagram.com/mr_debu_5/" target="_blank" rel="noreferrer" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                </a>
                </MDBCol>


              </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </Zoom>
      </section>
      
  );
}

export default MyProject;