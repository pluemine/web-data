import React from "react";
import { Link } from "react-router-dom";
import "../components/Public.css";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Card from "../components/Card";
import Cardduo from "../components/Cardduo";
import Cardduonobutton from "../components/Cardduonobutton";

function Home() {
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
              <Titlebar title="Welcome" />
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
                    id="cover-allport-home"
                    type=""
                    link="/Portfolio"
                    button="Portfolio"
                  />
                </div>
              </div>
              <div className="row title-box">
                <div className="col-md-12 title">Other Topics</div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingTop: "20px" }}>
                  <Cardduo
                    subtopic1="MEET THE DEVELOPER"
                    topic1="Want to know more about me?"
                    detail1=""
                    source1="icon-aboutme.png"
                    id1="icon-aboutme"
                    type1=""
                    link1="/Aboutme"
                    button1="About me"
                    subtopic2="MEET THE DEVELOPER"
                    topic2="How I design? Learn more now"
                    detail2=""
                    source2="icon-dev.png"
                    id2="icon-dev"
                    type2=""
                    link2="/Development"
                    button2="Development"
                  />
                </div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-md-12" style={{ paddingBottom: "10px" }}>
                  <Cardduo
                    subtopic1="EXTERNAL TOPIC"
                    topic1="Introducing the new Portfolio Template"
                    detail1=""
                    source1="icon-template1.png"
                    id1="template1"
                    type1="ext"
                    link1="template1/index.html"
                    button1="Template"
                    subtopic2="EXTERNAL TOPIC"
                    topic2="How far I have come? Meet my old website"
                    detail2=""
                    source2="icon-creation.png"
                    id2="icon-creation"
                    type2="ext"
                    link2="oldsite2020h1/index.html"
                    button2="Website"
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

export default Home;
