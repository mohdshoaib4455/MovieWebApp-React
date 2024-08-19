import { useEffect, useState } from "react";
import PSlider from "./Slider";
let Poster = ({ handlclick }) => {
  let [poster, setPoster] = useState([]);

  let api =
    "https://api.themoviedb.org/3/discover/movie?api_key=9e71038df37f9a0eaaefc0d6ee6e679c&language=en-US&page=1&with_genres=28&with_original_language=hi";

  // 'https://api.themoviedb.org/3/genre/movie/list?language=en', options

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results[0]);

        var posterPath = response.results[4].poster_path;
        //  console.log(response.results[0]);
        var imgurl = response.results.map((item) => item.poster_path);
        setPoster(imgurl);
       
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <PSlider imgLinks={poster} handlclick={handlclick}></PSlider>
    </>
  );
};

export default Poster;
