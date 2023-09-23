import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactElement from "../ContactElement/ContactElement";

const SideBar = () => {
  return (
    <div className="card-block px-4 py-8 w-full lg:w-[20%] flex flex-col justify-start items-center max-h-[calc(100vh-40px)] lg:sticky top-5 overflow-y-auto overflow-x-hidden">
      <div className="flex-1 flex flex-row lg:flex-col lg:items-center gap-5">
        <img
          src="/profile-image.png"
          alt="profileImage"
          className="bg-[#343534] rounded-full w-20 lg:w-4/5"
        />
        <div>
          <h1 className="text-center font-medium text-2xl">Aryan Rawther</h1>
          <p className="text-center">Software Developer</p>
        </div>
      </div>
      <div className="bg-[#343534] rounded-full my-5 h-2 w-3/12 hidden lg:block"></div>
      <div className="flex-col flex-1 justify-between hidden lg:flex">
        <ContactElement
          title="EMAIL"
          parah="aryanedu5786@gmail.com"
          href="mailto:aryanedu5786@gmail.com"
        >
          <EmailOutlinedIcon />
        </ContactElement>
        <ContactElement
          title="PHONE"
          parah="+91 7905206587"
          href="tel:+917905206587"
        >
          <PhoneAndroidOutlinedIcon />
        </ContactElement>
        <ContactElement title="LOCATION" parah="Bangalore, India" href="#">
          <LocationOnOutlinedIcon />
        </ContactElement>
      </div>
    </div>
  );
};

export default SideBar;
