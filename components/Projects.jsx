import React from "react";
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
            title="Fire Chat"
            backgroundImg={chatImg}
            tech={`React JS, Firebase`}
            projectUrl="/chat"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={portfolioImg}
            tech={`Next JS, Tailwind `}
            projectUrl="/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
