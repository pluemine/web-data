import React from "react";
import { Link } from "react-router-dom";
import "../components/Public.css";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Card from "../components/Card";
import Cardduo from "../components/Cardduo";
import Cardduonobutton from "../components/Cardduonobutton";

function Aboutme() {
  return (
    <div>
      <section className="block">
        <div
          className="container"
          align="center"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <div className="row board">
            <div className="col-md-12"></div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Sidebar />
            </div>
            <div
              className="col-sm-6 col-md-8 col-lg-9 page"
              style={{ borderRadius: "10px" }}
            >
              <Titlebar title="About Me" />
              <div className="row" style={{ width: "100%" }}>
                <div
                  className="col-md-12"
                  style={{ paddingTop: "30px", paddingBottom: "20px" }}
                >
                  <Card
                    subtopic="MEET THE DEVELOPER"
                    topic="Want to know more about me?"
                    detail=""
                    source="cover-aboutme.png"
                    id="cover-aboutme"
                    link="/"
                    button="Return to Home"
                  />
                </div>
              </div>
              <div className="row title-box">
                <div className="col-md-12 title">Welcome to my Profile</div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingTop: "20px" }}>
                  <Cardduonobutton
                    subtopic1="FIRST MEET"
                    topic1="Suchut Sapsathien"
                    detail1='My nickname is "Pluem" or you can call me "Pluemine" as the website name. Nice to meet you :)'
                    source1="aboutme-profile.png"
                    id1="aboutme-profile"
                    subtopic2="KNOWLEDGE"
                    topic2="About my Education"
                    detail2="Computer-Eng student at Chulalongkorn University, Science-Math student at Saint Gabriel's College."
                    source2="aboutme-education.png"
                    id2="aboutme-education"
                  />
                </div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingBottom: "10px" }}>
                  {/*<Cardduonobutton
                    subtopic1="WORK WITH ME"
                    topic1="I am interesting in"
                    detail1="UI/UX design, Front-End developement, RPA development."
                    source1="aboutme-skill.png"
                    id1="aboutme-skill"
                    subtopic2="THE WEBSITE"
                    topic2="Why SCH Designed?"
                    detail2="It come from my name .. I think you already know!"
                    source2="aboutme-sch.png"
                    id2="aboutme-sch"
                  />*/}
                  <Cardduo
                    subtopic1="WORK WITH ME"
                    topic1="I am interesting in"
                    detail1='UI/UX design, Front-End developement, RPA development.'
                    source1="aboutme-skill.png"
                    id1="aboutme-skill"
                    type1="ext"
                    link1="profile/Resume.pdf"
                    button1="View Resume"
                    subtopic2="PORTFOLIO"
                    topic2="Rule your world"
                    detail2='Portfolio contains a lot of projects. You can view them here.'
                    source2="aboutme-port.png"
                    id2="aboutme-port"
                    type2="ext"
                    link2="profile/Portfolio.pdf"
                    button2="View Portfolio"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
