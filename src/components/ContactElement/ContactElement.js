import React from "react";

export const IconBlock = (props) => {
  return (
    <div className="text-[#FDCE69] w-10 h-10 rounded-sm bg-[#343534] border border-zinc-700 flex items-center justify-center">
      {props.children}
    </div>
  );
};

const ContactElement = (props) => {
  return (
    <a href={props.href} target="__blank">
      <div className="flex w-full gap-5">
        <IconBlock>{props.children}</IconBlock>
        <div>
          <h3 className="text-gray-300">{props.title}</h3>
          <p
            className={`text-white ${!props.showFull && "truncate w-[140px]"}`}
          >
            {props.parah}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ContactElement;
