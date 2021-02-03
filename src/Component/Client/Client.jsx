import React from 'react'
import {MDBCard, MDBCardBody, MDBCardImage, MDBContainer , MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import CountUp from "react-countup";

const Client = (props) => {
  return (
    <>
    <MDBContainer>
        <MDBRow>
        <MDBCol col='4'>
        <MDBCard>
            <MDBCardImage
              className='peach-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
              tag='div'
            >
              <h2>Projects</h2>
              <h1><b><CountUp start={0} end={7} duration={5} separator="," />+</b></h1>
              <p>Projects was developed by me</p>
            </MDBCardImage>
            <MDBCardBody cascade className='text-center'>
              <MDBCardText>
                I had created the more then 8 project from now,Different projects regarding to the E-commarce , Travelling,
                in Different languages like React, Nojde, Express, PHP, Java and etc...
              </MDBCardText>
              <hr />
              <div className='text-center'>
                <p>CONTACT ME ON</p>
                <MDBIcon fab icon='github' className='gh-ic mr-3' size='lg' />
                <MDBIcon
                  fab
                  icon='linkedin-in'
                  className='li-ic my-3'
                  size='lg'
                />
                <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='4'>
          <MDBCard>
              <MDBCardImage
                className='purple-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                tag='div'
              >
              <h2>Clients</h2>
              <h1><b><CountUp start={0} end={4} duration={5} separator="," />+</b></h1>
              <p>I have many happy clients</p>
              </MDBCardImage>
              <MDBCardBody cascade className='text-center'>
                <MDBCardText>
                  Today i have 4 Happy client,Who have already reviced the our service
                  in this pendemic situation.Right now we are hendling 50+ active clients.
                </MDBCardText>
                <hr />
                <div className='text-center'>
                  <p>CONTACT ME ON</p>
                  <MDBIcon fab icon='github' className='tw-ic mr-3' size='lg' />
                  <MDBIcon
                    fab
                    icon='linkedin-in'
                    className='li-ic my-3'
                    size='lg'
                  />
                  <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>

        <MDBCol col='4'>
          <MDBCard>
            <MDBCardImage
              className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
              tag='div'
            >
              <h2>Exprience</h2>
              <h1><b><CountUp start={0} end={6} duration={5} separator="," />+</b></h1>
              <p>Months of experience</p>
            </MDBCardImage>
            <MDBCardBody cascade className='text-center'>
              <MDBCardText>
                Currentry I have 6+ months of experience in the 3 language.In NodeJS,
                Express, MongoDB and React technolodges, I have pretty well knowledge
                of IT Industry level.
              </MDBCardText>
              <hr />
              <div className='text-center'>
                <p>CONTACT ME ON</p>
                <MDBIcon fab icon='github' className='tw-ic mr-3' size='lg' />
                <MDBIcon
                  fab
                  icon='linkedin-in'
                  className='li-ic my-3'
                  size='lg'
                />
                <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Client;
