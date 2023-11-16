"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Suspense, useState } from "react";
import Footer from "../common/components/layout/Footer";
import MovieList from "./components/MovieList";
import Skeleton from "./components/SearchMovieSkeleton";
import SearchMovieSkeletonList from "./components/SearchMovieSkeletonList";
import SearchMovieList from "./components/SearchMovieList";

export default function SearchPage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-background-main pt-[4.4rem]">
      <div className="flex items-center justify-around px-3 bg-searchBar-main h-[5.2rem]">
        <AiOutlineSearch style={{ fontSize: "2rem", color: "C4C4C4" }} />
        <input
          className="w-[27rem] h-[3.1rem] bg-searchBar-main text-button-main placeholder-current text-[1.5rem] searchBar-text placeholder-text-center"
          placeholder="Search for a show, movie, e.t.c."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <AiOutlineClose
          style={{ fontSize: "2rem", color: "C4C4C4", cursor: "pointer" }}
          onClick={() => setSearchText("")}
        />
      </div>
      <div className="searchTitle-text text-menu-main py-[2.1rem]">
        Top Searches
      </div>
      {!searchText ? (
        <Suspense fallback={<SearchMovieSkeletonList />}>
          <MovieList />
        </Suspense>
      ) : (
        <SearchMovieList searchText={searchText} />
      )}
      <Footer />
    </div>
  );
}
