import React from "react";
import Header from "../Header/Header";
import SkillBlock from "../SkillBlock/SkillBlock";
import LaptopIcon from "@mui/icons-material/Laptop";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { IconBlock } from "../ContactElement/ContactElement";

const Skills = () => {
  const data = [
    {
      title: "Front-End",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Javascript",
        "TypeScript",
        "React",
        "Redux",
        "Next.js",
        "React Native",
        "Web Sockets",
        "SEO",
      ],
    },
    {
      title: "Back-End",
      skills: ["Node", "Express", "SQL", "MongoDb"],
    },
    {
      title: "Blockchain",
      skills: ["Web3", "Solidity", "Truffle", "Smart Contracts"],
    },
    {
      title: "Testing",
      skills: ["Jest", "React-testing-library", "Mocha"],
    },
    { title: "Hosting", skills: ["Amazon(EC2)", "Firebase", "Vercel"] },
    { title: "Design", skills: ["Photoshop", "XD", "Figma"] },
    { title: "Languages", skills: ["C++", "JAVA"] },
    { title: "No-Code", skills: ["Webflow"] },
  ];
  return (
    <div className="card-block p-4 basis-4/6">
      <h3 className="text-2xl font-medium mb-1">Skills</h3>
      <div className="w-10 h-0.5 rounded bg-[#FDCE69] mb-4"></div>
      <div className="flex gap-2 flex-col">
        {data.map((item) => (
          <div className="flex gap-2 flex-wrap">
            <div className="rounded px-2 py-1 bg-[#343534] border border-zinc-600">
              {item.title}
            </div>
            {item.skills.map((item) => (
              <SkillBlock item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const data = [
    {
      title: "Student Innovation Lead (Product Development)",
      company: "PESU Venture Labs",
      timeline: "Part-time (Apr 2023 - Present)",
      work: [
        "Led the frontend team in adding new functionality to a Next.js application, while suggesting and overseeing the creation of backend APIs to fix bugs and issues.",
        "Engaged in a diverse range of projects spanning from developing the company's new official website to collaborating on initiatives for multiple startups within the venture.",
      ],
    },
    {
      title: "Junior React Developer",
      company: "Junior React Developer",
      timeline: "Part-time (Feb 2022 - Apr 2023)",
      work: [
        "Built single page applications from scratch using React, collaborating with Backend Developers and UI/UX designers on various projects.",
        "Developed visually appealing and user-friendly websites, conversion landing pages, and HTML emails for clients in collaboration with marketing teams.",
      ],
    },
  ];

  return (
    <div className="card-block p-4">
      <h3 className="text-2xl font-medium mb-1">Experience</h3>
      <div className="w-10 h-0.5 rounded bg-[#FDCE69] mb-4"></div>
      {data.map((item) => (
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <IconBlock>
              <LaptopIcon />
            </IconBlock>
            <div className="flex-1 bg-[#343534] w-0.5"></div>
          </div>
          <div className="pb-3 mt-1.5">
            <h4 className="text-xl font-medium mb-1">{item.title}</h4>
            <p className="text-[#FDCE69]">{item.company}</p>
            <p className="italic text-sm">{item.timeline}</p>
            <ul className="ml-5 list-disc">
              {item.work.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Education = () => {
  const data = [
    {
      title: "B-Tech CSE Undergraduate",
      company: "PES University",
      timeline: "2020 - Present",
      work: ["CGPA- 8.09"],
    },
    {
      title: "Primary and Secondary Education",
      company: "City Montessori School",
      timeline: "2004 - 2019",
      work: ["XII - 94", "X - 91.2"],
    },
  ];

  return (
    <div className="card-block p-4 flex-1">
      <h3 className="text-2xl font-medium mb-1">Education</h3>
      <div className="w-10 h-0.5 rounded bg-[#FDCE69] mb-4"></div>
      {data.map((item) => (
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <IconBlock>
              <AutoStoriesIcon />
            </IconBlock>
            <div className="flex-1 bg-[#343534] w-0.5"></div>
          </div>
          <div className="pb-3 mt-1.5">
            <h4 className="text-xl font-medium mb-1">{item.title}</h4>
            <p className="text-[#FDCE69]">{item.company}</p>
            <p className="italic text-sm">{item.timeline}</p>
            <ul className="text-white">
              {item.work.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Resume = () => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Header heading="Resume" />
      <Experience />
      <div className="flex flex-col lg:flex-row gap-5">
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
