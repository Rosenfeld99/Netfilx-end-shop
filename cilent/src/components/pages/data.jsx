const loadingCards = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path:
        "https://www.freakyjolly.com/wp-content/uploads/2020/08/angular-skeletal-loader-demo-5.gif",
      genre_ids: [],
      id: 0,
      original_language: "en",
      original_title: "loading",
      overview: "loading",
      popularity: 6682.1,
      poster_path: "/eSB9684DTVDbNUhDCsnBx3SU5hx.jpg",
      release_date: "2023-05-17",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
  total_pages: 0,
  total_results: 0,
};

for (let i = 0; i < 19; i++) {
  const element = loadingCards.results[0];
  loadingCards.results.push(element);
}

export const loadingMovies = [
  {
    list: loadingCards.results,
    title: "loading...",
  },
  {
    list: loadingCards.results,
    title: "loading...",
  },
  {
    list: loadingCards.results,
    title: "loading...",
  },
  {
    list: loadingCards.results,
    title: "loading...",
  },
];
