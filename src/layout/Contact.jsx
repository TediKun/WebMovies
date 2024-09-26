import Form from "../components/Form";

const Contact = () => {
  return (
    <section className="w-full" id="contact">
      <form
        action=""
        className="w-11/12 mx-auto bg-slate-200 p-1.5 rounded shadow"
      >
        <label htmlFor="name" className="block pt-1.5">
          Name:
          <Form id="name" type="text" placeholder="typing your name..." />
        </label>
        <label htmlFor="email" className="block pt-1.5">
          Email:
          <Form id="email" type="email" placeholder="typing your email..." />
        </label>
        <label htmlFor="message" className="pt-1.5 block">
          Message:
          <textarea
            placeholder="typing your message..."
            id="message"
            className="outline outline-slate-400 focus:outline-slate-600 py-2 rounded px-3.5 transition-all w-full resize-none h-32 focus:px-1.5"
          ></textarea>
        </label>
      </form>
    </section>
  );
};

export default Contact;
