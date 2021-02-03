import React from "react";
import "./index.css";
import { MDBAnimation,MDBCol,MDBContainer,MDBRow,MDBTypography } from "mdbreact";
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Hobbie from "../Hobbies/Hobbies"
import Project from '../Project/Project';
import Contect from '../Contect/Contect_Me';
const BackgroundImagePage = () => {
  return(
      <>
      <Fade>
       <div className="bg" >
            <MDBAnimation type="bounce">
            <MDBTypography className="txt" colorText="white">HEY!</MDBTypography><br/>
            </MDBAnimation>
            <MDBContainer>
                <MDBRow>
                        <MDBCol md="6" sm="12" lg="6" >
                            <MDBTypography tag='h1' variant="h1" colorText="white" >I'm Devang, Web Developer</MDBTypography>
                        </MDBCol>
                        <MDBCol md="6" sm="12" lg="6" >
                            <MDBTypography tag='h1' variant="h1" colorText="white" >Welcome to my profile</MDBTypography>
                        </MDBCol>
                </MDBRow>
            </MDBContainer>
       </div>
      </Fade>
      <div>
        <MDBContainer>
            {/* <Zoom bottom> */}
                <Hobbie/>
            {/* </Zoom> */}
        </MDBContainer>
      </div>
      <div>
          <Project/>
      </div>
      <div>
        <Contect/>
      </div>
      <div>
      </div>
      </>
  )
};
export default BackgroundImagePage;