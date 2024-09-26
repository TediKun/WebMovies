import AllMovies from "../components/AllMovies";
import HeadingMovies from "../components/HeadingMovies";

const MainMovies = () => {
  return (
    <main className="w-full px-2 mt-2.5">
      <HeadingMovies>All Movies</HeadingMovies>
      <AllMovies />
    </main>
  );
};

export default MainMovies;
