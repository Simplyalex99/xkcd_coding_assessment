import React from "react";

import { LandingSection, ComicSection } from "./sections";
import "../styles/home.css";
import "../styles/global.css";
import "../styles/footer.css";
export const Home = () => {
  return (
    <>
      <LandingSection></LandingSection>
      <ComicSection></ComicSection>
      <footer></footer>
    </>
  );
};
export default Home;
