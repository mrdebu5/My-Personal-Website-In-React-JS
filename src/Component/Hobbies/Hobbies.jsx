import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, } from "mdbreact";
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const Hobbie = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5" >
      <MDBCardBody>
      <Flip cascade>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          My Hobbies
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
            Professionally I am a Node JS developer working at IT SERVICES INDIA having 1 year of experience in this it industry,
            And also I am made traveller & foodie, I love to eat and travel among the earth. Currentlly i have been travel the more then 
            3 countries and my goal is to make my wise list empty. Also i'm very good at cooking, i Love to make the dises in my own style 
            and flavoer.
        </p>
      </Flip>
        <Slide left>
            <MDBRow>
                <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                    alt=""
                    />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            
            <MDBCol lg="7">
                <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="utensils" className="pr-2" />
                    Food
                </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>I'm foodie</strong>
                </h3>
                <p>
                Making the food is one of my favorite things to do when i was free.
                Good people, good food, good time this quote of my life, what you need
                more when you have this!
                </p>
                
            </MDBCol>
            </MDBRow>
        </Slide>
        <hr className="my-5" />
        <Slide right>
            <MDBRow>
            <MDBCol lg="7">
                <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="briefcase" className="pr-2" />
                    Lifestyle
                </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>I'm Coder</strong>
                </h3>
                <p>
                So besically, i am a Node js developer, having 1 year of experience and i take 
                new challanges every day regarding to my filed, I love to solve the code mytry.
                Beacasu that's the felling of life, It's pasion of life.
                </p>
            </MDBCol>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid"
                    src="https://i.guim.co.uk/img/media/381d489e481bf51280498055c6fd4df872883a09/0_405_6016_3611/master/6016.jpg?width=620&quality=85&auto=format&fit=max&s=ee6eb05f58d9b0b810853b92426bbfa8"
                    alt=""
                />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            </MDBRow>
        </Slide>
        <hr className="my-5" />
        <Slide left>
        
            <MDBRow>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                    alt=""
                />
                <a href="#!">
                    <MDBMask overlay="white-slight" />
                </a>
                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="plane-departure" className="pr-2" />
                    Traveller
                </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>I'm traveller</strong>
                </h3>
                <p>
                Every one has a own dream to expolre the world and mine too!,
                I have bucket list of my life and i want to make this bucket empty.
                i have been visited more then 3 countries and also in future i have to 
                explore the world.
                </p>
            </MDBCol>
            </MDBRow>
        </Slide>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Hobbie;