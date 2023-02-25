import React from "react";
import todo from "../public/assets/todo.png";
import portfolioImg from "../public/assets/portfolio.png";
import ProjectItem from "./ProjectItem";
import chatImg from "../public/assets/chat-app.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Chat App"
            backgroundImg={chatImg}
            tech={`React JS, Express, Node Js, MongoDB, Socket IO `}
            projectUrl="/chat"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={portfolioImg}
            tech={`Next JS, Tailwind `}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Todo List Website"
            backgroundImg={todo}
            tech={`React JS, Tailwind, Express JS, PostgreSQL `}
            projectUrl="/todo"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
