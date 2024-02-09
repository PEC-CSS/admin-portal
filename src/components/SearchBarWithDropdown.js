import React, {useCallback, useEffect, useState} from 'react'
import getCookieData from "@/lib/getCookieData";
import {useSession} from "next-auth/react";
import {getMatchingUsersApi} from "@/repository/searchUsers/getMatchingUsersApi";
import {useDebouncedCallback} from "use-debounce";

function SearchBarWithDropdown({isUserSearch}) {
    const [nameSearchValue, setNameSearchValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState("")
    const [cursor, setCursor] = useState(-1)
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [mousePointer, setMousePointer] = useState(-1)
    const {data: session} = useSession();
    const token = getCookieData(session).data.token

    const searchUsersApi = useCallback((pattern) => {
        getMatchingUsersApi(pattern, token)
            .then((response) => {
                // take first 5 only
                response = response.slice(0, 5)

                setSearchResult(response.map((user) => {
                    return {
                        name: user.name, email: user.email
                    }
                }))
            })
            .catch((error) => console.log(error))
    }, [token])

    useEffect(() => {
        if (!debouncedValue || debouncedValue.trim() === "") {
            setSearchResult([])
        } else {
            searchUsersApi(debouncedValue)
        }
    }, [debouncedValue, searchUsersApi]);

    const handleDebouncedInput = useDebouncedCallback((value) => {
        setDebouncedValue(value);
    }, 250);
    const handleNameSearchChange = (e) => {
        setShowSearchResults(true)
        setNameSearchValue(e.target.value)
        handleDebouncedInput(e.target.value)
    }
    const handleBlur = () => {
        setTimeout(() => {
            setShowSearchResults(false)
            setCursor(-1)
        }, 500)
    }
    const keyboardNavigation = (e) => {
        if (e.key === "Enter") {
            if (cursor < searchResult.length && cursor !== -1) {

            }
        }
        if (e.key === "ArrowUp") {
            if (cursor > 0) {
                setCursor(cursor => cursor - 1)
            }
        }
        if (e.key === "ArrowDown") {
            if (cursor < searchResult.length - 1) {
                setCursor(cursor => cursor + 1)
            }
        }
        if (e.key === "Escape") {
            setShowSearchResults(false)
            setCursor(-1)
        }
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={handleNameSearchChange}
                    className='border-2 border-blue-500 p-2 w-[30vw]'
                    value={nameSearchValue}
                    placeholder={`Search ${isUserSearch ? 'Users' : 'Events'}`}
                    onBlur={handleBlur}
                    onKeyDown={keyboardNavigation}
                />
            </div>
            <div>
                {showSearchResults && <ul>
                    {searchResult.map((pill, index) => {
                        const idxOfPill = index
                        return <div
                            onClick={() => {
                            }}
                            key={pill.email}
                            style={{
                                backgroundColor: cursor === idxOfPill || mousePointer === idxOfPill ? "#0a69da" : "white",
                                color: cursor === idxOfPill || mousePointer === idxOfPill ? "white" : "black",
                                padding: '10px',
                                margin: 0,
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setCursor(searchResult.indexOf(pill))}
                            onMouseLeave={() => setCursor(-1)}
                        >
                            {pill.name}
                            <p
                                style={{
                                    color: cursor === searchResult.indexOf(pill) || mousePointer === idxOfPill ? "white" : "grey",
                                    fontSize: 'small',
                                    overflow: 'clip',
                                    margin: 0
                                }}
                            >
                                {pill.email}
                            </p>
                        </div>
                    })}
                </ul>}
            </div>
        </div>

    )
}

export default SearchBarWithDropdown