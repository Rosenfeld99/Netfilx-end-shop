import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import useSearch from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const { error, getSaerch, loading, movieSearch,resetFlaghandler } = useSearch();
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);
  const nav = useNavigate()

  const handleSearchIconClick = () => {
    setIsClicked(true);
    console.log("Search icon clicked ");
    if (isClicked && inputRef.current.value != "") {
      const query = inputRef.current.value;
      nav(`/search/=${query}`)
      resetFlaghandler()
      // getSaerch(query);
    }
    // Perform specific actions for the search icon
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    if (!isClicked) {
      setIsClicked(true);
      // console.log("Input clicked");
      // Perform specific actions for the initial input click
    } else {
      // console.log("Input clicked (already active)");
      // Perform specific actions when the input is already active
    }
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      inputRef.current.value === ""
    ) {
      setIsClicked(false);
      console.log("Clicked outside the input");
      // Perform specific actions when clicked outside the input
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`btn-group mt-2 ml-2 dropend ${
          isClicked
            ? "pl-2 border border-white text-white focus:outline-none bg-[#000000ae]"
            : "w-auto"
        }`}
      >
        <div
          type="button"
          className="p-1 text-white"
          data-bs-toggle="dropdown"
          aria-expanded={isClicked}
          onClick={handleSearchIconClick}
        >
          <BiSearch className="w-6 h-6" />
        </div>
        <Transition.Root show={isClicked} as={Fragment}>
          <ul
            className={`dropdown-menu input-search mt-1 bg-none ${
              isClicked ? "block scale-x-100" : "hidden scale-x-0"
            }`}
          >
            <li>
              <input
                ref={inputRef}
                type="search"
                placeholder="חיפוש סרטים, סדרות..."
                className="bg-transparent placeholder:text-white outline-none transition-all duration-300 w-full"
                onClick={handleInputClick}
              />
            </li>
          </ul>
        </Transition.Root>
      </div>
    </div>
  );
};

export default SearchInput;
