import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">Contact</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-700 text-white" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-700 text-white" rows="5"></textarea>
        <button className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-lg">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
