import React, { useEffect, useState } from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { AcUnit, LocalDrink, QuestionAnswer, SevereCold, SupervisedUserCircleOutlined, Thermostat, TripOrigin } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Card = ({type}) => {

  //temporary
  var data ;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "humiditeSol":
      data = {
        title: "Humidite du sol",
        isMoney: false,
        link: "See all users",
        toLink: "users",
        amount: amount,
        icon: (
          <AcUnit
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "temperatureAmbiante":
      data = {
        title: "Temperature ambiante",
        isMoney: false,
        link: "View all trips",
        toLink: "trips",
        amount: amount,
        icon: (
          <Thermostat
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "humiditeAmbiante":
      data = {
        title: "Humidite ambiante",
        isMoney: false,
        link: "View questions",
        toLink: "questions",
        amount: 10,
        icon: (
          <SevereCold
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "niveauEau":
      data = {
        title: "Niveau citerne d'eau",
        isMoney: false,
        link: "See active users",
        toLink: "",
        amount: amount,
        icon: (
          <LocalDrink
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  };


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount} 
        </span>
        <Link to={data.toLink} style={{ textDecoration: 'none' }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Card;
