const API_KEY = "7e4a7004ac960084133dc59c49cc9d8d";
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "en";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  return json;
};

const getLists = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: LANGUAGE === "pt-BR" ? "Originais Netflix" : "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?with_networks=213&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "trending",
        title: LANGUAGE === "pt-BR" ? "Recomendados para Você" : "For You",
        items: await basicFetch(
          `/trending/all/week?api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "top_rated",
        title: LANGUAGE === "pt-BR" ? "Em Alta" : "Trending",
        items: await basicFetch(
          `/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "action",
        title: LANGUAGE === "pt-BR" ? "Ação" : "Action",
        items: await basicFetch(
          `/discover/movie/?with_genres=28&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "comedy",
        title: LANGUAGE === "pt-BR" ? "Comédia" : "Comedy",
        items: await basicFetch(
          `/discover/movie/?with_genres=35&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "horror",
        title: LANGUAGE === "pt-BR" ? "Terror" : "Horror",
        items: await basicFetch(
          `/discover/movie/?with_genres=27&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie/?with_genres=10749&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
      {
        slug: "documentary",
        title: LANGUAGE === "pt-BR" ? "Documentários" : "Documentaries",
        items: await basicFetch(
          `/discover/movie/?with_genres=99&api_key=${API_KEY}&language=${LANGUAGE}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
          );
          break;
        default:
          break;
      }
    }

    return info;
  },
};

export default getLists;
