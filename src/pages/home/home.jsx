import React from "react";
import "../../styles/home.css";
import "../../styles/global.css";
import IMAGES from "../../images/index.js";
export const Home = () => {
  return (
    <>
      <main id="hero ">
        {/* Left */}
        <div className=" container-sm hero-grid-container text-center">
          <section className="left">
            <h2 className="subheading">Best free webcomics</h2>
            <h1 className="heading">XKCD</h1>
            <p className="description">
              Webcomic of romance, sarcasm, math and language
            </p>
            <div className="cta-btns-container">
              <button className="btn-primary">Start reading</button>{" "}
              <button className="btn-secondary-outline">Visit store</button>
            </div>
          </section>
          {/* Right */}
          <section className="right">
            <div className="image-grid-container">
              <span className="grid-item-1">
                {/*  <img
                  className="comic-img img-1"
                  src={IMAGES.math}
                  alt="math comic"
                /> */}
                <span className="xa"></span>
              </span>
              <span className="grid-item-2">
                <img
                  className="comic-img img-2"
                  src={IMAGES.sarcasm}
                  alt="sarcasm comic"
                />
              </span>
              <span className="grid-item-3">
                <img
                  className="comic-img img-3"
                  src={IMAGES.spider}
                  alt="spider comic"
                />
                <p>
                  <b>100+</b>
                </p>
              </span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Home;
