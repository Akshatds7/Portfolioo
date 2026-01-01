import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-xl text-teal-400">Hi, I'm</h2>
        <h1 className="text-5xl font-bold my-4">Akshat Kumar Srivastava</h1>
        <p className="max-w-xl mx-auto text-gray-300">
          A passionate Full Stack Developer specializing in React.js and modern web interfaces. I love building clean and interactive UIs.
          I also learnt Python programing languages and i made various projects like AI AutoReply Bot , Jarvis Virtual Assistant, Snake Water Gun Game ,Guess The Number 
          I learnt various programing languages like Python, Java .Java is a programming language that i have certification of. I can make Desktop Apps using java.
          </p>
        <a href="#projects" className="mt-6 inline-block bg-teal-500 px-6 py-2 rounded-lg hover:bg-teal-400 transition-all">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
