import React from "react";
import "./Event.css";
import location from "../../assets/imgs/location.svg";
import calendar from "../../assets/imgs/calendar.svg";
import Card from "../../components/card/Card";
const Event = () => {
  return (
    <main>
      <section className="banner">
        <div className="banner_img" role="img"></div>
        <h3 className="banner_heading">Birthday Bash</h3>
        <p className="banner_author">Hosted by Elysia</p>
        <Card
          icon={calendar}
          title={"18 August 6:00PM"}
          sub={"to 19 August 1:00PM UTC +10"}
        />
        <Card
          icon={location}
          title={"Street name"}
          sub={"Suburb, State, Postcode"}
        />
      </section>
    </main>
  );
};

export default Event;
