import React from "react";
import { SiHashnode } from "react-icons/si";
import { MdNavigateNext } from "react-icons/md";

function SearchResultItem({ title, extraInfo }) {
  return (
    <div className="hover-bg-[#fefefe] flex px-4 py-3 mx-6 mt-2 border-[2px] border-[#0075ff] rounded-md items-center">
      <div className="border-2 p-1 rounded-[5px] mr-4">
        <SiHashnode color="#334155" className="" />
      </div>
      <div className="w-[100%]">
        <p className="capitalize mb-1">{title}</p>
        <div className="flex flex-wrap">
          {extraInfo?.map((content, id) => {
            return (
              <span
                className="mr-2 rounded-md border-[1px] px-[6px] py-[4px] border-slate-400 text-[12px] bg-[#dedede]"
                key={id}
              >
                {content}
              </span>
            );
          })}
        </div>
      </div>
      <MdNavigateNext size={25} />
    </div>
  );
}

export default SearchResultItem;
