import useFetch from "../hooks/useFetch";
import BoxMovie from "./BoxMovie";

const AllMovies = () => {
  const movie1 = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2",
  );
  const movie2 = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2",
  );
  const movie3 = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2",
  );
  const movie4 = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2",
  );

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-1.5">
      {movie1.loading && <span>Loading ...</span>}
      {movie1.loading && movie1.serveError ? (
        <span>Error Fetch Data ..</span>
      ) : (
        movie1.data.map((res) => {
          return (
            <BoxMovie
              key={res.id}
              title={res.title}
              release={res.release_date}
              vote={res.vote_average}
              poster={res.poster_path}
              popularity={res.popularity}
            />
          );
        })
      )}
      {movie2.loading && movie2.serveError ? (
        <span>Error Fetch Data ..</span>
      ) : (
        movie2.data.map((res) => {
          return (
            <BoxMovie
              key={res.id}
              title={res.title}
              release={res.release_date}
              vote={res.vote_average}
              poster={res.poster_path}
              popularity={res.popularity}
            />
          );
        })
      )}
      {movie3.loading && movie3.serveError ? (
        <span>Error Fetch Data ..</span>
      ) : (
        movie3.data.map((res) => {
          return (
            <BoxMovie
              key={res.id}
              title={res.title}
              release={res.release_date}
              vote={res.vote_average}
              poster={res.poster_path}
              popularity={res.popularity}
            />
          );
        })
      )}
      {movie4.loading && movie4.serveError ? (
        <span>Error Fetch Data ..</span>
      ) : (
        movie4.data.map((res) => {
          return (
            <BoxMovie
              key={res.id}
              title={res.title}
              release={res.release_date}
              vote={res.vote_average}
              poster={res.poster_path}
              popularity={res.popularity}
            />
          );
        })
      )}
    </section>
  );
};

export default AllMovies;
