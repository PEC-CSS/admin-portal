import React from "react";

function LandingCard({ imgPath, title, link }) {
  return (
    <a href={link}>
      <div className="bg-[#f5f9fb] flex justify-center flex-col items-center hover:scale-[1.15] transition duration-500 cursor-pointer h-[130px] w-[131px] mx-2">
        <img
          src={imgPath}
          height={85}
          width={85}
          alt={title}
          className="m-[10px] px-1"
        />
        <p className="text-center text-[0.9rem] px-[10px]">{title}</p>
      </div>
    </a>
  );
}

export default LandingCard;
