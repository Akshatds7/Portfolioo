import React from "react";

const projects = [

  {
    title: "Learning-Hub",
    desc: "A platform to learn Various Technologies at one place.",
    link: "https://learning-hub1.netlify.app/",
  },
 
  {
    title: "Keeper-App",
    desc: "An website to handle your schedule in react",
    link: "https://inquisitive-platypus-ea14aa.netlify.app/",
  },
    {
    title:"Portfolio Certificate Generator",
    desc: "A  website made to create certifiactes for students based on JS,CSS,Html ",
    link: "https://akshatds7.github.io/Certificate-Generator/",
  },
    {
    title: "The Simon game",
    desc: "The Simon game is an electronic memory game where players must repeat a sequence of lights and sounds by pressing the corresponding colored buttons in js,css,html",
    link: "https://akshatds7.github.io/The-simon-Game/",
  },
    {
    title: "Drum-Kit",
    desc: "An website to play drums with keyboard and mouse events",
    link: "https://akshatds7.github.io/Drum-kit/",
  },
    {
    title: "Dice-Game",
    desc: "An website made to play dice game mad on Js,Css,Html ",
    link: "https://akshatds7.github.io/DICE-GAME/",
  },
    {
    title: "Chatbot",
    desc: "An Chatbot website made by react.js with json scripting ",
    link: "https://akshatds7.github.io/Chatbot/",
  },
   {
    title: "Chatbot Dashboard",
    desc: "An interactive dashboard to manage chatbot intents in React.",
    link: "https://akshatds7.github.io/Dashboard/",
  },
    {
    title: "Card Website",
    desc: "A responsive website made up with javascript ,css and html.",
    link: "https://akshatds7.github.io/CardWebsite/",
  },
  {
    title: "Shiftcomp",
    desc: "An simple website made on html and css  ",
    link: "https://akshatds7.github.io/Shiftcomp/",
  },
  {
    title: "TinDog",
    desc: "A simple website made on html,css and bootstrap ",
    link: "https://akshatds7.github.io/Tindog/",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
