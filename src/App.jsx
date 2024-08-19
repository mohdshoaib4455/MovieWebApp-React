import "./App.css";
import Poster from "./poster";
import ActionCards from "./Action";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Container from "./Container";
import Container1 from "./Container1";


function App() {
  let [find, setfind] = useState("");
  let [movie, setmovei] = useState([]);
  let handl = (item) => {
    setfind(item);
  };

  useEffect(() => {
    if (find) {
      const api = `https://www.omdbapi.com/?apikey=d3a85c55&s=${find}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setmovei(data.Search);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [find]);

  console.log();
  return (
    <>
      <Poster handlclick={handl}></Poster>
      <ActionCards movie={movie}></ActionCards>
      <Container></Container>
      <Container1></Container1>
     
      <Footer></Footer>
    </>
  );
}

export default App;
