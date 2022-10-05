import React from "react";
import bannerImg from "../../assets/imgs/hero_img.png";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="mob_info">
            <h1 className="mob_info_heading">
              Imagine if
              <br />
              <span className="mob_info_heading_style">Snapchat</span>
              <br />
              had events.
            </h1>
            <p className="mob_info_sub">
              Easily host and share events with your friends across any social
              media
            </p>
          </div>
          <div className="hero_img">
            <img src={bannerImg} alt="Banner" />
          </div>
          {/* <div className="md:mr-24 text-center flex-1 md:text-right">
            <h1 className="text-2xl md:text-5xl font-bold text-purple-900 md:p-3 break-words">
              Imagine if{" "}
              <span className="text-red-600 typed-cursor">Whatsapp</span> had
              events.
            </h1>
            <p className="text-xl md:text-3xl text-purple-900 p-3">
              Easily host and share events with your friends across any social
              media
            </p>
            <button className="px-20 py-4 bg-pink-500 rounded-lg text-white text-xl font-bold">
              🎉 Create my event
            </button>
          </div> */}
          <button className="hero_cta">
            <Link to={"/create"}>🎉 Create my event</Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
