import { Link } from "react-router-dom";

const Button = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="my-2 block w-fit font-semibold px-2.5 py-1.5 rounded bg-sky-400"
    >
      {children}
    </Link>
  );
};

export default Button;
