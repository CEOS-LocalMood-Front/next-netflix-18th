import SearchMovieSkeleton from "./SearchMovieSkeleton";

export default function SearchMovieSkeletonList() {
  return (
    <ul
      className="hide-scrollbar flex-1 overflow-y-scroll pt-[0.9rem]"
      style={{ scrollSnapType: "y proximity", scrollSnapAlign: "start" }}
    >
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <SearchMovieSkeleton key={i} />
        ))}
    </ul>
  );
}
