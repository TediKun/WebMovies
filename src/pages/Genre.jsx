import HeadingMovies from "../components/HeadingMovies";
import LinkGenre from "../components/LinkGenre";
import Header from "../layout/Header";

const Genre = () => {
  return (
    <>
      <Header />
      <section className="w-full px-2 py-3">
        <HeadingMovies>Genre</HeadingMovies>
        <div className="">
          <LinkGenre to="#comedy">Comedy</LinkGenre>
        </div>
      </section>
    </>
  );
};

export default Genre;
