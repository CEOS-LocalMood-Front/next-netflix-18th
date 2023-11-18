"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Suspense, useState } from "react";
import Footer from "../common/components/layout/Footer";
import MovieList from "./components/MovieList";
import SearchMovieSkeletonList from "./components/SearchMovieSkeletonList";

export default function SearchPage() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleCloseClick = () => {
    setSearchText("");
  };

  return (
    <div className="bg-background-main pt-[4.4rem]">
      <div className="flex items-center justify-around px-3 bg-searchBar-main h-[5.2rem]">
        <AiOutlineSearch style={{ fontSize: "2rem", color: "C4C4C4" }} />
        <input
          className="w-[27rem] h-[3.1rem] bg-searchBar-main text-button-main placeholder-current text-[1.5rem] searchBar-text placeholder-text-center"
          placeholder="Search for a show, movie, e.t.c."
          value={searchText}
          onChange={handleInputChange}
        />
        <AiOutlineClose
          style={{ fontSize: "2rem", color: "C4C4C4", cursor: "pointer" }}
          onClick={handleCloseClick}
        />
      </div>
      <div className="searchTitle-text text-menu-main py-[2.1rem]">
        Top Searches
      </div>
      <Suspense fallback={<SearchMovieSkeletonList />}>
        <MovieList searchText={searchText} />
      </Suspense>
      <Footer />
    </div>
  );
}
