import React from "react";
import Header from "../Header/Header";
import SkillBlock from "../SkillBlock/SkillBlock";
import { IconBlock } from "../ContactElement/ContactElement";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = ({ item }) => {
  return (
    <div className="card-block p-4 flex flex-col lg:flex-row gap-5">
      {item.image && (
        <div className="flex flex-col gap-5 lg:max-w-[280px] w-full justify-between">
          <img src={item.image} className="object-cover rounded flex-1" />
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
              <a target="__blank" href="item.link">
                <IconBlock>
                  <LinkIcon />
                </IconBlock>
              </a>
            )}
            {item.github && (
              <a target="__blank" href="item.github">
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
      title: "Culture Place App",
      description:
        "Culture Place is a community collaboration web application designed to promote social engagement and interaction.",
      skills: ["React", "Redux", "Tailwind", "Express"],
      image: "CulturePlace.png",
      work: [
        "Contributed to the development of the Culture Place web app by solving bugs, adding new functionality, and suggesting improvements to logic errors.",
        "Ensured a positive user experience by making the application mobile responsive and accessible on all devices.",
      ],
      link: "https://cultureplace.in/",
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
      title: "Marketing Landing/Conversion Pages",
      description:
        "Contributed to the creation of diverse landing and conversion pages for various companies such as KonnectInsights, Hubilio, Gumlet etc.",
      skills: ["Next.js", "GTM", "Hubspot Integration", "Animations"],
      image: "Hatica.png",
      work: [
        "Designed and developed landing and conversion pages from the ground up, utilizing a range of tools including Next.js, React, Webflow, and HTML/CSS.",
        "Seamlessly integrated various tools, including HubSpot and Google Tag Manager (GTM), to optimize and enhance marketing efforts.",
      ],
      link: "landing.konnectinsights.com",
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
