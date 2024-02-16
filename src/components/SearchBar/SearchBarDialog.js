import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import SearchResult from "./SearchResult";

const searchBarPlaceholder = "Search users or events";
const footerText = "Search functionality by PEC ACM";
function SearchBarDialog({ open, onClose }) {
  const [inputText, setInputText] = useState("");
  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const clearInputText = () => {
    setInputText('');
    document.getElementById('searchBar').value = '';
  }

  return (
    <Dialog
      fullWidth={true}
      open={open}
      sx={{ padding: "0", margin: "0", backdropFilter: "blur(5px)" }}
      PaperProps={{ sx: { borderRadius: "10px" } }}
      onClose={onClose}
    >
      <div className="max-w-[48rem] w-[100%] h-[100vh] md:h-[80vh] flex flex-col text-[14px] bg-[#edf2f8]">
        <div className="w-[100%] place-self-start border-b-[1px] border-[#0075FF]">
          
          <div className="h-[56px] px-[16px] flex items-center">
            
            <IoSearch className="text-[24px]" />
            
            <input
              type="text"
              id="searchBar"
              className="focus:outline-none focus:ring-violet-300 ml-3 mr-4 w-[100%] bg-[#edf2f8]"
              placeholder={searchBarPlaceholder}
              onChange={handleInputTextChange}
            />
            
            {/* <button
              className="place-items-end uppercase rounded-md border-[1px] px-[6px] py-[4px] border-slate-200 hover:border-slate-400 text-[10px] bg-[#dedede]"
              onClick={onClose}
            >
              ESC
            </button> */}

            {
              inputText && <IoClose
                size={25}
                className="flex justify-center items-center font-extrabold text-[#99c8ff] hover:cursor-pointer hover:text-[#0075FF]"
                onClick={clearInputText}
              />
            }

          </div>
        </div>

        <div className="px-4 w-[100%] h-[100%] border-b-[1px] border-[#0075FF]">
          <SearchResult title="user data" data={userData} />
          <SearchResult title="events data" data={eventData} />
        </div>

        <footer className="flex justify-end items-center px-4 py-2 w-[100%] place-self-end text-right">
          <span className="mr-2 text-[12px]">{footerText}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/acm.png" width={35} alt="pec acm logo" />
        </footer>
      </div>
    </Dialog>
  );
}

export default SearchBarDialog;

const userData = [
  {
    name: "Harshpreet Singh Johar",
    extraInfo: ["Date Time"]
  },
  {
    name: "Harasees Singh",
    extraInfo: ["20103036", "harasees@pec.edu.in"]
  },
]

const eventData = [
  {
    name: "ishwarendra Jha",
    extraInfo: ["Description about event here cc"]
  },
  {
    name: "CP Tips and Tricks",
    extraInfo: []
  }
]