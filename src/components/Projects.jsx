import React, { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Full Stack", "Python"];

const projects = [
  // 🌐 Frontend Projects
  {
    title: "Keeper-App",
    desc: "React-based website to manage notes and schedules.",
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
    title: "Movie Search Engine",
    desc: "A platform to search movies and shows.",
    link: "https://movieengg.netlify.app/",
    category: "Frontend",
  },
  {
    title: "Learning-Hub",
    desc: "A platform to learn various technologies at one place.",
    link: "https://learning-hub1.netlify.app/",
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
    category: "Frontend",
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
    desc: "Landing page built with HTML, CSS, Bootstrap.",
    link: "https://akshatds7.github.io/Tindog/",
    category: "Frontend",
  },

  // ⚙️ Backend Projects
  {
    title: "Silly Names Generator",
    desc: "A fun Node.js app that generates random quirky names.",
    link: "https://github.com/Akshatds7/Silly-names",
    category: "Backend",
  },
  {
    title: "QR Code Generator",
    desc: "Node.js script to generate QR codes using the `qrcode` npm package.",
    link: "https://github.com/Akshatds7/Qr-code-project",
    category: "Backend",
  },
  {
    title: "Band-Name Generator",
    desc: "Express & EJS app that generates quirky band names on demand.",
    link: "https://github.com/Akshatds7/Band-name-Generator",
    category: "Backend",
  },
  {
    title: "Dayteller",
    desc: "Node.js + Express + EJS app that tells the current day.",
    link: "https://github.com/Akshatds7/Dayteller",
    category: "Backend",
  },

  // 🖥️ Full Stack Projects
  {
    title: "Secrets-full",
    desc: "Node.js, Express.js & EJS full-stack app—securely stores and displays user-submitted secrets.",
    link: "https://github.com/Akshatds7/Secrets-full",
    category: "Full Stack",
  },
  {
    title: "Studypal-AI",
    desc: "Full-stack website to help students plan their studies across subjects.",
    link: "https://studypal-ai.netlify.app/",
    category: "Full Stack",
  },
  {
    title: "CourseAdvisor-AI",
    desc: "Full-stack website that recommends courses based on students' interests.",
    link: "https://cadv.netlify.app/",
    category: "Full Stack",
  },
  {
    title: "Lost & Found Portal",
    desc: "Full-stack web app for reporting and retrieving lost items in Delhi Metro.",
    link: "https://github.com/chhaviluthra08/Lost_and_Found_Portal",
    category: "Full Stack",
  },
  {
    title: "Family Travel Tracker",
    desc: "Full-stack Express + PostgreSQL app with EJS templates for logging and visualizing family travel plans.",
    link: "https://github.com/Akshatds7/Family-Travel-Tracker",
    category: "Full Stack",
  },
  {
    title: "Travel Tracker",
    desc: "Express & PostgreSQL powered EJS app for planning and tracking travel itineraries.",
    link: "https://github.com/Akshatds7/Travel-Tracker",
    category: "Full Stack",
  },

  // 🐍 Python Projects
  {
    title: "Jarvis-assistant",
    desc: "Python-based chatbot enhanced with Gemini API for intelligent auto-replies.",
    link: "https://github.com/Akshatds7/jarvis-assistant.git",
    category: "Python",
  },
  {
    title: "AI-Autoreply-Chatbot",
    desc: "WhatsApp auto-reply chatbot using Python, PyAutoGUI, and Gemini API for smart responses.",
    link: "https://github.com/Akshatds7/Auto-reply-chatbot.git",
    category: "Python",
  },
  {
    title: "Snake-Water-Gun Game",
    desc: "Fun Python-based game against the computer using random number logic.",
    link: "https://github.com/Akshatds7/Snake-water-gun-Game.git",
    category: "Python",
  },
  {
    title: "Guess Game",
    desc: "Interactive Python 'Guess the Number' game with loops and conditional logic.",
    link: "https://github.com/Akshatds7/Guess-Game.git",
    category: "Python",
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
