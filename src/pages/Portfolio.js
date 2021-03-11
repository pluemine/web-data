import React from "react";
import { Link } from "react-router-dom";
import "../components/Public.css";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Card from "../components/Card";
import Cardduo from "../components/Cardduo";
import Cardduonobutton from "../components/Cardduonobutton";

function Portfolio() {
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
              <Titlebar title="Portfolio" />
              <div className="row" style={{ width: "100%" }}>
                <div
                  className="col-md-12"
                  style={{ paddingTop: "30px", paddingBottom: "20px" }}
                >
                  <Card
                    subtopic="FEATURED TOPIC"
                    topic="Meet my Extraordinary Portfolio"
                    detail=""
                    source="cover-allport.png"
                    id="cover-allport-port"
                    type=""
                    link="/"
                    button="Return to Home"
                  />
                </div>
              </div>
              <div className="row title-box">
                <div className="col-md-12 title">All Portfolios</div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingTop: "20px" }}>
                  <Cardduo
                    subtopic1="PORTFOLIO JS CSS HTML API"
                    topic1="Green House"
                    detail1='GreenHouse is one of my IoT team projects. GreenHouse system can be used to control the humidity of the closed area. My positioning is "Front End" developer.'
                    source1="portfolio-1.png"
                    id1="portfolio-1"
                    type1="ext"
                    link1="https://github.com/NatthanonM/EmbeddedLabProject"
                    button1="View Project"
                    subtopic2="PORTFOLIO JAVA"
                    topic2="King Tower"
                    detail2='King Tower is one of pair projects. King Tower is a game that have strategy to destroy the towers. You have to plan first! My positioning is "Graphics" designer.'
                    source2="portfolio-2.png"
                    id2="portfolio-2"
                    type2="ext"
                    link2="https://github.com/karnkittik/KingTower"
                    button2="View Project"
                  />
                </div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12">
                  <Cardduo
                    subtopic1="PORTFOLIO JS MySQL"
                    topic1="Minor Cineplex"
                    detail1='Minor Cineplex is one of my team projects. It contains a huge data about cinema company. The system also supports the admin to update database. My positioning is "Front End" developer.'
                    source1="portfolio-3.png"
                    id1="portfolio-3"
                    type1="ext"
                    link1="https://github.com/karnkittik/MinorCineplex"
                    button1="View Project"
                    subtopic2="PORTFOLIO JS CSS HTML"
                    topic2="Fast Photo"
                    detail2='Fast Photo is one of my team projects. It contains a lots of system analysis informations including a lots of most attractiveness UI we have designed. My positioning is "UI/UX" designer.'
                    source2="portfolio-4.png"
                    id2="portfolio-4"
                    type2="ext"
                    link2="doc-fastphoto.pdf"
                    button2="View Document"
                  />
                </div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingBottom: "10px" }}>
                  <Cardduo
                    subtopic1="PORTFOLIO JS CSS HTML"
                    topic1="Tutor Here"
                    detail1='Tutor Here is one of my team projects. It contains a lots of software engineering informations including the dark mode implemented. My positioning is "Front End" developer.'
                    source1="portfolio-5.png"
                    id1="portfolio-5"
                    type1="ext"
                    link1="https://github.com/2110423-2019-2/sec3_catandfriends"
                    button1="View Project"
                    subtopic2="PORTFOLIO JS CSS HTML"
                    topic2="ChatGunKub"
                    detail2='ChatGunKub is one of my team projects in COVID19 situation. We made it from the ground up with new minimal design implemented. My positioning is "Front End" developer.'
                    source2="portfolio-6.png"
                    id2="portfolio-6"
                    type2="ext"
                    link2="https://github.com/2110521-2563-1-Software-Architecture/TTT-PY-Frontend"
                    button2="View Project"
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

export default Portfolio;
