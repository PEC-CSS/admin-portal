import React from "react";
import { SiHashnode } from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

function SearchResultItem({ title, extraInfo, onClick }) {
  return (
    <div className="flex px-4 py-3 mx-6 mt-2 border-[2px] border-[#0075ff] rounded-md items-center hover:bg-slate-300" onClick={onClick}>
      <div className="border-2 p-1 rounded-[5px] mr-4">
        <SiHashnode color="#334155" className="" />
      </div>
      <div className="w-[100%]">
        <p className="capitalize mb-1">{title}</p>
        {extraInfo?.map((content, id) => {
          return (
            <span className="mr-2 rounded-md border-[1px] px-[6px] py-[4px] border-slate-400 text-[12px] bg-[#dedede]" key={id}>
              {content}
            </span>
          );
        })}
      </div>
      <MdNavigateNext size={25} />
    </div>
  );
}

export default SearchResultItem;