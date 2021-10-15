import React, { useState } from "react";
import useFetchComic from "../../hooks/useFetchComic";
import { ComicStrip } from "../../components";
import ClipLoader from "react-spinners/ClipLoader";
import { LeftArrowIcon, RightArrowIcon } from "../../icons/index";
export const ComicSection = ({ match }) => {
  const [params, setParams] = useState(
    match != null ? `${match.params.id}/info.0.json` : "info.0.json"
  );
  const comicData = useFetchComic(params);
  const API_ENDPOINT = "info.0.json";
  const maxComicData = useFetchComic(API_ENDPOINT);
  const getComic = (endpoint) => {
    setParams(endpoint);
  };
  const getRandomComic = () => {
    let min = 1;
    let max = maxComicData.data.num;
    let random_comic_id = Math.floor(Math.random() * (max - min + 1)) + min;
    getComic(`${random_comic_id}/${API_ENDPOINT}`);
  };
  const getPreviousComic = () => {
    let current_comic_id = comicData.data.num;
    let previous_comic_id = current_comic_id - 1;
    let comic_id = previous_comic_id <= 0 ? 1 : previous_comic_id;
    getComic(`${comic_id}/${API_ENDPOINT}`);
  };
  const getNextComic = () => {
    let current_comic_id = comicData.data.num;
    let next_comic_id = current_comic_id + 1;
    let comic_id = next_comic_id > maxComicData.data.num ? 1 : next_comic_id;
    getComic(`${comic_id}/${API_ENDPOINT}`);
  };

  return (
    <>
      <section className="container-sm">
        <div className="comic-strip-container">
          <span onClick={getPreviousComic} className="left-arrow">
            <LeftArrowIcon></LeftArrowIcon>
          </span>
          <span className="comic-strip-grid-item">
            {comicData.loading && (
              <div className="loading-animation-container">
                <ClipLoader size={50} />{" "}
              </div>
            )}
            {!comicData.loading && (
              <>
                <ComicStrip data={comicData.data}></ComicStrip>
                <div className="comic-strip-btn-container">
                  <button
                    className="btn-primary"
                    onClick={() => getPreviousComic()}
                  >
                    {" "}
                    Previous{" "}
                  </button>
                  <button
                    className="btn-secondary-outline"
                    onClick={() => getRandomComic()}
                  >
                    Random
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => getNextComic()}
                  >
                    Next{" "}
                  </button>
                </div>
              </>
            )}
          </span>
          <span onClick={getNextComic} className="right-arrow">
            {" "}
            <RightArrowIcon></RightArrowIcon>
          </span>
        </div>
      </section>
    </>
  );
};
export default ComicSection;
