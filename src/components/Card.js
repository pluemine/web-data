import React from "react";
import "./Public.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
      <div className="card" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div className="row" style={{ width: "100%" }}>
            <div className="card-subtopic">{props.subtopic}</div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row" style={{ width: "100%" }}>
            <div className="card-topic">{props.topic}</div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row" style={{ width: "100%", paddingBottom: "10px" }}>
            <div className="card-detail">{props.detail}</div>
          </div>
        </div>
        <div className="col-md-12">
          <div style={{ width: "88%", margin: "auto" }}>
            <img
              src={props.source}
              id={props.id}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="row" style={{ width: "100%" }}>
            {props.type != "ext" ? (
              <Link to={props.link} className="button">
                <div>{props.button}</div>
              </Link>
            ) : (
              <a href={props.link} className="button">
                <div>{props.button}</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
