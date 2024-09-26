import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchMovies = () => {
  return (
    <div className="flex mt-2 items-center relative w-[95%] mx-auto rounded">
      <input
        type="text"
        className="py-2 rounded w-full ps-4 outline outline-slate-400 focus:outline-slate-600 focus:ps-2 transition-all"
        placeholder="Search Movies"
      />
      <MagnifyingGlass size={32} className="absolute right-1" />
    </div>
  );
};

export default SearchMovies;
