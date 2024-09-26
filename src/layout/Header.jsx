import SearchMovies from "../components/SearchMovies";

const Header = () => {
  return (
    <header className="mt-24 w-full text-center">
      <h1 className="text-heading">
        Streaming And List All Movies All Genre Full HD 4K
      </h1>
      <p className="text-paragraft">
        StreamTeday Recomendation For Streaming All Movies With All Genres, Full
        HD 4K, And No Ads
      </p>
      <SearchMovies />
    </header>
  );
};

export default Header;
