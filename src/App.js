import { useEffect, useState } from "react";
import "./App.css";
import tmdb from "./tmdb";

import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieList from "./components/MovieList";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="container">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Netflix UI Clone | All image rights reserved by <strong>Netflix</strong>
        <br />
        Feito por{" "}
        <strong>
          <a href="http://github.com/LucasDiias">Lucas Dias</a>
        </strong>
        <br />
        Shows data from{" "}
        <strong>
          <a href="http://https://www.themoviedb.org/">The Movie DB</a>
        </strong>
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"
            alt="Loading gif"
          />
        </div>
      )}
    </div>
  );
};

export default App;
