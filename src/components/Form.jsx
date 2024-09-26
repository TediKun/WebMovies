const Form = ({ type, placeholder, id }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="block outline outline-slate-400 focus:outline-slate-600 py-2 rounded px-3.5 transition-all w-full focus:px-1.5"
    />
  );
};

export default Form;
