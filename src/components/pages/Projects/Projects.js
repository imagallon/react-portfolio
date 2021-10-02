import React from "react";
import Project from "./Project";
import budget from "../../../assets/imgs/budget.png";
import fantom from "../../../assets/imgs/fantomthumb.png";
import knl from "../../../assets/imgs/myknlthumb.png";
import note from "../../../assets/imgs/note.png";
import tech from "../../../assets/imgs/techblogthumb.png";
import workout from "../../../assets/imgs/workout.png";
import Jobbee from "../../../assets/imgs/Jobbee.png";

const projects = [
  {
    name: "Jobbee",
    description:
      "Full stack app using the MERN stack. Developers and Employers can use this to find talent and work.",
    url: "https://jobbee-fantom.herokuapp.com/",
    github: "https://github.com/zzangu0215/jobbee",
    img: Jobbee,
    id: 1,
  },
  {
    name: "MyKnl",
    description:
      "A full stack where users can make and account, add pet info, and make a reservation",
    url: "https://myknl-zap.herokuapp.com/",
    github: "https://github.com/zzangu0215/zzangu-and-the-pals",
    img: knl,
    id: 2,
  },
  {
    name: "Fantom",
    description:
      "This is a front end app using the Youtube and Marvel API to fetch data and display it on the page",
    url: "https://zzangu0215.github.io/fantom/",
    github: "https://github.com/zzangu0215/fantom",
    img: fantom,
    id: 3,
  },
  {
    name: "Fitness Tracker",
    description:
      "This is a full stack app using MongoDB and Mongoose. Users can ",
    url: "https://betterfitnessim.herokuapp.com/",
    github: "https://github.com/imagallon/betterfitness",
    img: workout,
    id: 4,
  },

  {
    name: "Budget PWA",
    description:
      "This is a full stack app using IndexedDB and is a Progressive Web App. Users can download this app and use it offline like a native app",
    url: "https://budgetpwaim.herokuapp.com/",
    github: "https://github.com/imagallon/budget-tracker-pwa",
    img: budget,
    id: 5,
  },
  {
    name: "Tech Blog",
    description:
      "This is a full stack app using MySql and Model-View-Controller* design pattern. Users can make accounts and make blog posts",
    url: "https://blogmasteriem.herokuapp.com/",
    github: "https://github.com/imagallon/tech-blog",
    img: tech,
    id: 6,
  },
  {
    name: "Note Taker",
    description:
      "This is a simple, yet powerul full stack app using MySql and Express. Users can make and deletes notes",
    url: "https://notetakeriem.herokuapp.com/",
    github: "https://github.com/imagallon/note-taker",
    img: note,
    id: 7,
  },
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="cardFix">
        <ul className="card-wrapper">
          {projects.map((project) => (
            <Project
              name={project.name}
              description={project.description}
              key={project.id}
              url={project.url}
              github={project.github}
              img={project.img}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
