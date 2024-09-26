import { Link } from "react-router-dom";

const LinkGenre = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="rounded text-xs bg-slate-100 px-2.5 py-1 outline outline-slate-400"
    >
      {children}
    </Link>
  );
};

export default LinkGenre;
