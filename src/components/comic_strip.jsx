import React from "react";
import "../styles/comic_strip.css";
import "../styles/global.css";
export const ComicStrip = ({ data }) => {
  const comic_date = `${data.month}/${data.day}/${data.year}`;
  let transcript = data.transcript;
  if (transcript.length > 0) {
    transcript = transcript.replace(/[[\]]/g, "").replace(/[{}]/g, ""); // removes brackets
  }
  return (
    <section>
      <h2 className="text-center">{data.title}</h2>
      <p className="text-center">{comic_date}</p>
      <div className="comic-strip-frame">
        <img className="comic-strip-img" src={data.img} alt={data.alt}></img>
        <p className="text-center">{transcript}</p>
      </div>
    </section>
  );
};
export default ComicStrip;
