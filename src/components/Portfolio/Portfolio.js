"use client";
import React, { useState } from "react";
import Header from "../Header/Header";
import SkillBlock from "../SkillBlock/SkillBlock";
import { IconBlock } from "../ContactElement/ContactElement";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`p-4 flex flex-col lg:flex-row gap-5 transition-all duration-300 ${hovered
        ? "rounded-md border border-[#343534] bg-[#252525]"
        : "card-block"
        }`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {item.image && (
        <div className="flex flex-col gap-5 lg:max-w-[280px] w-full justify-between">
          <div className="overflow-hidden flex-1 ">
            <img
              src={item.image}
              className={`object-cover rounded transition-all duration-300 h-full w-full ${hovered && "scale-125"
                } `}
            />
          </div>
          <div className="gap-2 lg:flex hidden">
            {item.link && (
              <a target="__blank" href={item.link}>
                <IconBlock>
                  <LinkIcon />
                </IconBlock>
              </a>
            )}
            {item.github && (
              <a target="__blank" href={item.github}>
                <IconBlock>
                  <GitHubIcon />
                </IconBlock>
              </a>
            )}
          </div>
        </div>
      )}
      <div>
        <h3 className="text-xl font-medium mb-1">{item.title}</h3>
        <div className="w-10 h-0.5 rounded bg-[#FDCE69] mb-2"></div>
        <p>{item.description}</p>
        <ul className="list-disc ml-5 pb-3">
          {item.work.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
        {!item.image && (
          <div className="flex gap-2 mb-4">
            {item.link && (
              <a target="__blank" href={item.link}>
                <IconBlock>
                  <LinkIcon />
                </IconBlock>
              </a>
            )}
            {item.github && (
              <a target="__blank" href={item.github}>
                <IconBlock>
                  <GitHubIcon />
                </IconBlock>
              </a>
            )}
          </div>
        )}
        {item.image && (
          <div className="gap-2 flex lg:hidden mb-4">
            {item.link && (
              <a target="__blank" href={item.link}>
                <IconBlock>
                  <LinkIcon />
                </IconBlock>
              </a>
            )}
            {item.github && (
              <a target="__blank" href={item.github}>
                <IconBlock>
                  <GitHubIcon />
                </IconBlock>
              </a>
            )}
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          {item.skills.map((item) => (
            <SkillBlock item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const data = [
    {
      title: "Nextinnings App",
      description:
        "Nextinnings is a go-to platform for senior citizens to interact, learn, create, have fun.",
      skills: ["React", "Redux", "Tailwind", "Express"],
      image: "NextInnings.png",
      work: [
        "Contributed to the development of the Nextinnings web app by solving bugs, adding new functionality, and suggesting improvements to logic errors.",
        "Ensured a positive user experience by making the application mobile responsive and accessible on all devices.",
      ],
      link: "https://nextinnings.me/",
    },
    {
      title: "Uptrain AI (YC W23)",
      description:
        "Uptrain is an innovative online platform dedicated to understanding the quality of LLM applications.",
      skills: ["SEO", "Next.js", "SCSS"],
      image: "UptrainWebApp.png",
      work: [
        "Significantly improved website performance by enhancing SEO optimization, increasing performance from 37% to 99%.",
        "Debugged existing codebase and implemented new functionalities, including a live demo.",
      ],
      link: "https://uptrain.ai/",
    },
    {
      title: "PESU Venture Labs App",
      description:
        "Designed and developed the Pesu Venture Labs Website, a dynamic platform showcasing the lab's portfolio and company updates.",
      skills: ["Next.js", "Static Site Generation", "Animations"],
      image: "PESU Venture Labs.png",
      work: [
        "Leveraged creativity to incorporate engaging animations and ensure user-friendliness, enhancing the site's visual appeal.",
        "Enhanced user experience through mobile responsiveness and universal device accessibility.",
      ],
      link: "https://www.pesuventurelabs.com/",
    },
    // {
    //   title: "Culture Place App",
    //   description:
    //     "Culture Place is a community collaboration web application designed to promote social engagement and interaction.",
    //   skills: ["React", "Redux", "Tailwind", "Express"],
    //   image: "CulturePlace.png",
    //   work: [
    //     "Contributed to the development of the Culture Place web app by solving bugs, adding new functionality, and suggesting improvements to logic errors.",
    //     "Ensured a positive user experience by making the application mobile responsive and accessible on all devices.",
    //   ],
    //   link: "https://cultureplace.in/",
    // },
    {
      title: "GrowthSpree Website",
      description:
        "Winbox Help App optimizes Winbox usage for maximum efficiency.",
      skills: ["Webflow", "HTML", "CSS", "Javascript"],
      image: "GrowthSpree.png",
      work: [
        "Developed and maintained the frontend of the GrowthSpree official website using Webflow, a no-code framework.",
        "Created a visually appealing and user-friendly website to effectively promote and showcase the company's services and mission",
      ],
      link: "https://www.growthspreeofficial.com/",
    },
    {
      title: "Winbox Help App",
      description:
        "Winbox Help App optimizes Winbox usage for maximum efficiency.",
      skills: ["Next.js", "Static Site Generation"],
      image: "WinBox Help.png",
      work: [
        "Developed a comprehensive help app using Next.js, with three basic screen layouts to guide users on how to use Winbox.",
        "Utilized static site generation to ensure fast loading times and efficient content delivery, delivering HTML pages directly to users when requested",
      ],
    },
    {
      title: "Winbox",
      description:
        "An email marketing software with React that performs DNS, blacklist checks, and other validations to reduce email spam rates for clients.",
      skills: [
        "React",
        "Redux",
        "React-Router",
        "Oauth2.0",
        "REST",
        "Web sockets",
      ],
      image: "WinBox.png",
      work: [
        "Developed a comprehensive React/Redux dashboard application from inception, translating Figma designs into fully functional pages including landing, login, and main dashboard features.",
        "Successfully integrated the backend with the front-end using REST API requests, creating a seamless user experience.",
      ],
    },
    // {
    //   title: "Uptrain Dashboard",
    //   description:
    //     "",
    //   skills: [
    //     "React",
    //     "Redux",
    //     "Next.js",
    //     "REST",
    //     "Tailwind"
    //   ],
    //   image: "UptrainDashboard.png",
    //   work: [
    //     "Developed a comprehensive React/Redux dashboard application from inception, translating Figma designs into fully functional pages including landing, login, and main dashboard features.",
    //     "Successfully integrated the backend with the front-end using REST API requests, creating a seamless user experience.",
    //   ],
    // },

    {
      title: "Resume Template",
      description: "",
      skills: ["Tailwind", "HTML"],
      image: "Resume.png",
      work: [
        "Designed a highly effective resume template that has been widely adopted by peers, enabling them to secure positions at top multinational corporations, including Morgan Stanley.",
        "Brought the resume template to life by skillfully utilizing HTML and Tailwind CSS, resulting in an aesthetically pleasing and functional design.",
      ],
      link: "https://resume-mr-nayra.vercel.app/",
      github: "https://github.com/Mr-Nayra/Resume",
    },
    {
      title: "Portfolio App",
      description: "",
      skills: ["React", "Tailwind", "Next.js"],
      image: "PortfolioApp.png",
      work: [
        "Built with Next.js and styled with Tailwind CSS, my portfolio fuses modern design with dynamic technology for a captivating user experience.",
        "Tailwind CSS ensures my portfolio adapts effortlessly to various devices, offering a visually polished showcase of my work across desktop and mobile.",
      ],
      github: "https://github.com/Mr-Nayra/Resume",
    },
    {
      title: "Marketing Landing/Conversion Pages",
      description:
        "Contributed to the creation of diverse landing and conversion pages for various companies such as KonnectInsights, Hubilio, Gumlet etc.",
      skills: ["Next.js", "GTM", "Hubspot Integration", "Animations"],
      image: "Hatica.png",
      work: [
        "Designed and developed landing and conversion pages from the ground up, utilizing a range of tools including Next.js, React, Webflow, and HTML/CSS.",
        "Seamlessly integrated various tools, including HubSpot and Google Tag Manager (GTM), to optimize and enhance marketing efforts.",
      ],
      link: "https://landing.konnectinsights.com",
    },
    {
      title: "Learn Solidity",
      description:
        "Established a dedicated repository to explore and gain expertise in building decentralized applications (DApps) and smart contracts using React and fundamental Web3 technologies.",
      skills: ["React", "Solidity", "Mocha", "Web3", "Ganache", "Truffle"],
      work: [
        "Acquired proficiency in creating Solidity smart contracts, deploying them on Ethereum test networks, conducting Ethereum smart contract testing with Mocha, and seamlessly integrating them with the frontend.",
        "Designed and implemented a foundational lottery project frontend that interacts with and fully executes a lottery smart contract on the Ethereum network, showcasing comprehensive functionality.",
      ],
      github: "https://github.com/Mr-Nayra/Learn-Solidity",
    },
    {
      title: "Learn Node",
      description:
        "A repository committed to advancing skills in backend app development using Node.js.",
      skills: ["Node", "Express", "EJS", "REST"],
      work: [
        "Proficient in Node.js and Express.js, with expertise in developing RESTful APIs and implementing templating engines like EJS, while adeptly managing data through SQL and MongoDB for seamless integration.",
        "Developed a comprehensive shopping cart website, implementing various functionalities while adhering to the MVC architecture.",
      ],
      github: "https://github.com/Mr-Nayra/Learn-Node",
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-5">
      <Header heading="Portfolio" />
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
