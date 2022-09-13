import React from "react";
import Snake from "../assets/icons/Snake";
import { TextToCode } from "./TextToCode";
import snake from "../assets/icons/snake.svg";
const style = {
  zIndex : 3
}
const Hero = () => {
  return(
    <section className="hero">
      <div className="hero__wrapper"> 
        <div className="hero__wrapper__titleContainer">
          <h3 className="hero__wrapper__titleContainer__uptitle">Hi all. I am</h3>
          <h1 className="hero__wrapper__titleContainer__name">Francisco Jimenez</h1>
          <h3 className="hero__wrapper__titleContainer__subtitle"> &gt; Front-end developer</h3>
        </div>
        <div className="hero__wrapper__gitContainer">
          <h3 className="hero__wrapper__gitContainer__coment">// find my profile on Github:</h3>
          <TextToCode 
            string={'const githubLink = “https://github.com/example/url”'}
          />
        </div>
      </div>
      <div className="hero__backGround">
        <div className="hero__backGround-green"></div>
        <div className="hero__backGround-purple"></div>
      </div>
      <div style={style}  className="hero__game">
        <div className="game__wrappe-container">
          <img src={snake}/>
        </div>
      </div>
  
      </section>
  );
};

export { Hero };