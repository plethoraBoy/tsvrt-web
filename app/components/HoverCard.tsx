import React from "react";
import { IconType } from "react-icons";

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card: React.FC<CardType> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4a76a] to-yellow-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-white-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-yellow-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <div className="text-slate-400 group-hover:text-slate-500 relative z-10 duration-300">
        {subtitle}
      </div>
    </a>
  );
};

export default Card;
