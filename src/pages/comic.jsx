import React from "react";
import { ComicSection } from "./index";

export const Comic = ({ match }) => {
  return (
    <div className="wrapper">
      <ComicSection match={match}></ComicSection>
    </div>
  );
};

export default Comic;
