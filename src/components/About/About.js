import React from "react";
import Header from "../Header/Header";

const AboutMe = () => {
  return (
    <div className="card-block p-4">
      <p>
        "I am a highly skilled and experienced software developer, specializing
        in front-end development. I have a strong interest in cryptocurrencies
        and blockchain technology, and I am known for my creative and analytical
        abilities as well as my attention to detail. I am a team player and
        always strive to deliver the best results."
      </p>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card-block p-4">
      <h3 className="text-xl font-medium mb-1">{props.heading}</h3>
      <div className="w-10 h-0.5 rounded bg-[#FDCE69] mb-2"></div>
      <p>{props.parah}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Header heading="About me" />
      <AboutMe />
      <div className="card-block p-4">
        <h1 className="font-medium text-3xl">What I'm Doing</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <Card
          heading="Web Development"
          parah="I possess a strong foundation in web development, with expertise in HTML, CSS, JavaScript, and React, complemented by practical experience in building user-friendly web applications. Additionally, I am proficient in Node.js and Express, enabling me to tackle backend development tasks effectively."
        />

        {/* <Card
          heading="Data Structures And Algorithm"
          parah="I've diligently practiced coding
        challenges on platforms like LeetCode and engaged in competitive coding
        using C++, solidifying my algorithmic and problem-solving abilities
        while mastering various data structures and algorithms."
        /> */}
        <Card
          heading="Decentralized Application Development"
          parah="I possess the capability to craft
      smart contracts in Solidity and seamlessly integrate them with React,
      enabling the creation of decentralized applications with a focus on
      blockchain technology."
        />
        <Card
          heading="Windows Application Development Apprentice"
          parah="
          I'm on a learning journey, starting from proficiency in C++, and diving deep into more complex concepts of Windows application development."
        />
      </div>
    </div>
  );
};

export default About;
