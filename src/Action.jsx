import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./movieCard";
import ComedyCards from "./comedyCards";
import RomenceCard from "./RomenceCards";

let ActionCards = ({ movie }) => {
  let [img, setImg] = useState([]);
  let [Cdy, setCdy] = useState([]);
  let [romence, setRomence] = useState([]);
  let api_key = "9e71038df37f9a0eaaefc0d6ee6e679c";

  let actionApi = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_genres=28&with_original_language=hi`;

  // Action
  useEffect(() => {
    fetch(actionApi)
      .then((response) => response.json())
      .then((response) => {
        var imgurl = response.results;
        setImg(imgurl);
      })
      .catch((err) => console.error(err));
  }, []);

  let comedyApi = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_genres=35&with_original_language=hi`;

  // Comedy
  useEffect(() => {
    fetch(comedyApi)
      .then((response) => response.json())
      .then((response) => {
        var cmdy = response.results;
        setCdy(cmdy);
      })
      .catch((err) => console.error(err));
  }, []);

  let romenceApi = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_genres=10749&with_original_language=hi`;

  // Romence
  useEffect(() => {
    fetch(romenceApi)
      .then((response) => response.json())
      .then((response) => {
        var romence = response.results;
        setRomence(romence);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {movie.length !== 0 ? (
        <>
          <div className="box">
            <h1>Search Result</h1>
          </div>
          <div className="outerbox">
            {movie.map((item) => (
              <div className="cardBox">
                {console.log(item)}
                <img src={item.Poster} alt="" />
                <div className="innerBox">
                  <h3>{item.Title}</h3>
                  <span class="genre">Action, Adventure</span>
                  {/* <p class="rating">⭐{item.vote_average}</p> */}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
      <div className="box">
        <h1>ACTION</h1>
      </div>
      <Cards img={img}></Cards>
      <div className="box">
        <h1>COMEDY</h1>
      </div>
      <ComedyCards Cdy={Cdy}></ComedyCards>
      <div className="box">
        <h1>Romence</h1>
      </div>
      <RomenceCard romence={romence}></RomenceCard>
    </>
  );
};

export default ActionCards;
