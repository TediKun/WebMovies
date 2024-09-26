import Header from "../layout/Header";
import HeadingMovies from "../components/HeadingMovies";
import Button from "../components/Button";
import Contact from "../layout/Contact";

const About = () => {
  return (
    <>
      <Header />
      <section className="w-full px-2 py-3" id="about">
        <HeadingMovies>About Me</HeadingMovies>
        <div className="">
          <div className=""></div>
          <div className="">
            <p className="text-paragraft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cum.
              Explicabo illum libero incidunt perspiciatis aspernatur quasi.
              Maiores iusto dolorum adipisci? Commodi non odit ea. Nisi dolorem
              accusamus perspiciatis repellendus soluta voluptatibus placeat
              porro vero fuga? Ullam aperiam, quae nesciunt ratione voluptatem,
              delectus nulla iste distinctio reiciendis quia vel exercitationem
              quam veritatis excepturi cumque illum enim. Asperiores excepturi
              illum provident, facere molestiae quis laborum est tempore
              architecto neque quasi dolores, nihil atque veniam omnis eaque!
            </p>
            <Button to="#contact">Contact Me</Button>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
