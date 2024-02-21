import React from "react";
import "./Aboutme.css";
import avatar from "../../../assets/imgs/avatar.png";

export default function Aboutme() {
  return (
    <div className="dib">
      <h1>About Me</h1>
      <div className="square">
        <p className="fix">
          <span>
            {" "}
            <img src={avatar} alt="my avatar" className="face" />
          </span>
          <br />
          <br />I am a web developer based in North County San Diego.
          A few of my favorite things are rock climbing, creating art, and
          spending time with friends and family. I went to school up in San Jose
          State University and graduated with degree in Spanish. I spent some
          time after graduation working at a restaurant. It has taken me a while
          but I have decided to take a deep dive into a totally different career
          path. I hope to learn lots and be able to apply the concepts learned
          during class in the real world.
        </p>
      </div>
    </div>
  );
}
