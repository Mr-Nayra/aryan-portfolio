import React from "react";
import Header from "../Header/Header";
import ContactElement from "../ContactElement/ContactElement";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

const Links = () => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Header heading="Links" />
      <div className=" grid lg:grid-cols-2 gap-5">
        <div className="card-block p-4 flex flex-col gap-5">
          <ContactElement
            title="Email"
            parah="aryanedu5786@gmail.com"
            showFull
            href="mailto:aryanedu5786@gmail.com"
          >
            <EmailOutlinedIcon />
          </ContactElement>
          <ContactElement
            title="Phone number"
            parah="+91 7905206587"
            showFull
            href="tel:+917905206587"
          >
            <PhoneAndroidOutlinedIcon />
          </ContactElement>
          <ContactElement
            title="LinkedIn"
            parah="www.linkedin.com/in/aryanrawther/"
            href="https://www.linkedin.com/in/aryanrawther/"
            showFull
          >
            <LinkedInIcon />
          </ContactElement>
        </div>
        <div className="card-block p-4 flex flex-col gap-5">
          <ContactElement
            title="GitHub"
            parah="github.com/Mr-Nayra/"
            showFull
            href="https://github.com/Mr-Nayra/"
          >
            <GitHubIcon />
          </ContactElement>
          <ContactElement
            title="Leetcode"
            parah="leetcode.com/Mr_Nayra/"
            href="https://leetcode.com/Mr_Nayra/"
            showFull
          >
            <CodeIcon />
          </ContactElement>
        </div>
      </div>
    </div>
  );
};

export default Links;
