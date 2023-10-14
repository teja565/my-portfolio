import React from "react";
import profileImg from "../../assets/profile-img.svg";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./home.css";
import CV from "../../assets/Resume_Krishna.pdf";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name is</span>
          </p>
          <h1 className="home__title text-cs">
            <span>Krishna</span> Teja
          </h1>
          <p className="home__job">
            <span className="text-cs">I Am </span>
            <b>Web Developer</b>
          </p>
          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} className="home__profile" alt="" />
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                10 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Projects <span>Completed</span>
              </span>
            </p>
            <p className="home__data home__data-two">
              <span className="text-lg">A+</span>
              <span className="text-sm text-cs">
                Frontend <span>Projects</span>
              </span>
            </p>
            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Passionate CS student skilled in web development with ReactJS,
            JavaScript, HTML, Git, CSS. Expanding to Express.js and Node.js.
            Completed 10+ front-end projects.
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/krishna-teja-8bb51b20b/"
              className="home__social-link"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/teja565" className="home__social-link">
              <FaGithub />
            </a>
            <a href="https://wa.me/+919701033203" className="home__social-link">
              <FaWhatsapp />
            </a>
          </div>
          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
        <div className="section__bg-wrapper">
          <span className="bg__title">Web Developer</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
