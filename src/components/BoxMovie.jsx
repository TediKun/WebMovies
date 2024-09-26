import { Link } from "react-router-dom";

const BoxMovie = ({ to, title, popularity, poster, vote, release }) => {
  return (
    <Link
      to={to}
      className="relative bg-slate-700 rounded w-full h-full shadow-sm"
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt=""
        className="w-full h-full rounded"
      />
      <div className="absolute h-full left-0 bottom-0 w-full bg-slate-800/60 p-1.5 leading-none rounded text-slate-300 flex flex-col justify-end">
        <h1 className="font-extrabold text-xl text-teal-500">{title}</h1>
        <p className="text-xs font-semibold">
          Rating: <span className="text-teal-400">{vote}</span>
        </p>
        <p className="text-xs font-semibold">
          Release: <span className="text-teal-400">{release}</span>
        </p>
        <p className="text-xs font-semibold">
          Popularity: <span className="text-teal-400">{popularity}</span>
        </p>
      </div>
    </Link>
  );
};

export default BoxMovie;
