import React from "react";
import Project from "./Project";

const projects = [
  {
    name: "MyKnl",
    description:
      "A full stack where users can make and account, add pet info, and make a reservation",
    url: "https://myknl-zap.herokuapp.com/",
    github: "https://github.com/zzangu0215/zzangu-and-the-pals",
    id: 1,
  },
  {
    name: "Fantom",
    description:
      "This is a front end app using the Youtube and Marvel API to fetch data and display it on the page",
    url: "https://zzangu0215.github.io/fantom/",
    github: "https://github.com/zzangu0215/fantom",
    id: 2,
  },
  {
    name: "Fitness Tracker",
    description:
      "This is a full stack app using MongoDB and Mongoose. Users can ",
    url: "https://betterfitnessim.herokuapp.com/",
    github: "https://github.com/imagallon/betterfitness",
    id: 3,
  },
  {
    name: "Fitness Tracker",
    description:
      "This is a full stack app using MongoDB and Mongoose. Users can ",
    url: "https://betterfitnessim.herokuapp.com/",
    github: "https://github.com/imagallon/betterfitness",
    id: 4,
  },
  {
    name: "Budget PWA",
    description:
      "This is a full stack app using IndexedDB and is a Progressive Web App. Users can download this app and use it offline like a native app",
    url: "https://budgetpwaim.herokuapp.com/",
    github: "https://github.com/imagallon/budget-tracker-pwa",
    id: 5,
  },
  {
    name: "Tech Blog",
    description:
      "This is a full stack app using MySql and Model-View-Controller* design pattern. Users can make accounts and make blog posts",
    url: "https://blogmasteriem.herokuapp.com/",
    github: "https://github.com/imagallon/tech-blog",
    id: 6,
  },
  {
    name: "Budget PWA",
    description:
      "This is a simple, yet powerul full stack app using MySql and Express. Users can make and deletes notes",
    url: "https://notetakeriem.herokuapp.com/",
    github: "https://github.com/imagallon/note-taker",
    id: 7,
  },
  {
    name: "Budget PWA",
    description:
      "This is a full stack app using IndexedDB and is a Progressive Web App. Users can download this app and use it offline like a native app",
    url: "https://budgetpwaim.herokuapp.com/",
    github: "https://github.com/imagallon/budget-tracker-pwa",
    id: 8,
  },
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            key={project.id}
            url={project.url}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
