import React, { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Full Stack", "Python"];

const projects = [
  {
    title: "Learning-Hub",
    desc: "A platform to learn Various Technologies at one place.",
    link: "https://learning-hub1.netlify.app/",
    category: "Full Stack",
  },
  {
    title: "Keeper-App",
    desc: "A website to handle your schedule in React.",
    link: "https://inquisitive-platypus-ea14aa.netlify.app/",
    category: "Frontend",
  },
  {
    title: "Portfolio Certificate Generator",
    desc: "A website to create certificates using JS, CSS, HTML.",
    link: "https://akshatds7.github.io/Certificate-Generator/",
    category: "Frontend",
  },
  {
    title: "The Simon Game",
    desc: "Memory game built using JS, CSS, HTML.",
    link: "https://akshatds7.github.io/The-simon-Game/",
    category: "Frontend",
  },
  {
    title: "Drum-Kit",
    desc: "Play drums with keyboard/mouse — JS, HTML, CSS.",
    link: "https://akshatds7.github.io/Drum-kit/",
    category: "Frontend",
  },
  {
    title: "Dice-Game",
    desc: "A dice game built with JS, CSS, HTML.",
    link: "https://akshatds7.github.io/DICE-GAME/",
    category: "Frontend",
  },
  {
    title: "Chatbot",
    desc: "A chatbot using React and JSON scripting.",
    link: "https://akshatds7.github.io/Chatbot/",
    category: "Full Stack",
  },
  {
    title: "Chatbot Dashboard",
    desc: "Dashboard to manage chatbot intents (React).",
    link: "https://akshatds7.github.io/Dashboard/",
    category: "Frontend",
  },
  {
    title: "Card Website",
    desc: "Responsive cards using JS, CSS, HTML.",
    link: "https://akshatds7.github.io/CardWebsite/",
    category: "Frontend",
  },
  {
    title: "Shiftcomp",
    desc: "Simple HTML & CSS website.",
    link: "https://akshatds7.github.io/Shiftcomp/",
    category: "Frontend",
  },
  {
    title: "TinDog",
    desc: "HTML, CSS, Bootstrap site.",
    link: "https://akshatds7.github.io/Tindog/",
    category: "Frontend",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-teal-500 text-white border-teal-500"
                : "text-teal-400 border-teal-400 hover:bg-teal-600 hover:text-white"
            } transition duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
