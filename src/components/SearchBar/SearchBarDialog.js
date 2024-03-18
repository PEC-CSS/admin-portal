import { Dialog } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import SearchResult from "./SearchResult";
import { getMatchingUsersApi } from "@/repository/searchUsers/getMatchingUsersApi";
import getCookieData from "@/lib/getCookieData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

const searchBarPlaceholder = "Search users or events";
const footerText = "Search functionality by PEC ACM";
function SearchBarDialog({ open, onClose }) {
    const [inputText, setInputText] = useState("");
    const [userData, setuserData] = useState([]);

    const [nameSearchValue, setNameSearchValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(true);
    const { data: session } = useSession();
    const token = getCookieData(session).data?.token;
    const [cursor, setCursor] = useState(-1);
    const [mousePointer, setMousePointer] = useState(-1);

    const router = useRouter();

    const clearInputText = () => {
        setInputText("");
        document.getElementById("searchBar").value = "";
    };

    const searchUsersApi = useCallback(
        (pattern) => {
            getMatchingUsersApi(pattern, token)
                .then((response) => {
                    // take first 5 only
                    response = response.slice(0, 5);

                    setuserData(
                        response.map((user) => {
                            return {
                                name: user.name,
                                extraInfo: [user.email],
                            };
                        })
                    );
                })
                .catch((error) => console.log(error));
        },
        [token]
    );

    useEffect(() => {
        if (!debouncedValue || debouncedValue.trim() === "") {
            setSearchResult([]);
        } else {
            searchUsersApi(debouncedValue);
        }
    }, [debouncedValue, searchUsersApi]);

    const handleDebouncedInput = useDebouncedCallback((value) => {
        setDebouncedValue(value);
    }, 250);

    const handleNameSearchChange = (e) => {
        setShowSearchResults(true);
        setNameSearchValue(e.target.value);
        handleDebouncedInput(e.target.value);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowSearchResults(false);
            setCursor(-1);
        }, 500);
    };

    const keyboardNavigation = (e) => {
        if (e.key === "Enter") {
            if (cursor < searchResult.length && cursor != -1) {
                // addUserToPills(searchResult[cursor]);
                router.push(`/user/${searchResult[cursor].email}`)
            }
        }
        if (e.key === "ArrowUp") {
            if (cursor > 0) {
                setCursor((cursor) => cursor - 1);
            }
        }
        if (e.key === "ArrowDown") {
            if (cursor < searchResult.length - 1) {
                setCursor((cursor) => cursor + 1);
            }
        }
        if (e.key === "Escape") {
            setShowSearchResults(false);
            setCursor(-1);
        }
    };

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
                            onBlur={handleBlur}
                            onKeyDown={keyboardNavigation}
                            onChange={handleNameSearchChange}
                            value={nameSearchValue}
                        />

                        {/* <button
              className="place-items-end uppercase rounded-md border-[1px] px-[6px] py-[4px] border-slate-200 hover:border-slate-400 text-[10px] bg-[#dedede]"
              onClick={onClose}
            >
              ESC
            </button> */}

                        {inputText && (
                            <IoClose
                                size={25}
                                className="flex justify-center items-center font-extrabold text-[#99c8ff] hover:cursor-pointer hover:text-[#0075FF]"
                                onClick={clearInputText}
                            />
                        )}
                    </div>
                </div>

                <div className="px-4 w-[100%] h-[100%] border-b-[1px] border-[#0075FF]">
                    {showSearchResults && (
                        <SearchResult title="user data" data={userData} />
                    )}
                    {/* <SearchResult title="events data" data={eventData} /> */}
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

// const userData = [
//     {
//         name: "Harshpreet Singh Johar",
//         extraInfo: ["email","Date Time"],
//     },
//     {
//         name: "Harasees Singh",
//         email: "",
//         extraInfo: ["email", "harasees@pec.edu.in"],
//     },
// ];

// const eventData = [
//   {
//     name: "ishwarendra Jha",
//     extraInfo: ["Description about event here cc"]
//   },
//   {
//     name: "CP Tips and Tricks",
//     extraInfo: []
//   }
// ]
