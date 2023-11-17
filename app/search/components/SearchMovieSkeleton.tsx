export default function SearchMovieSkeleton() {
  return (
    <div className="flex items-center p-[1rem] animate-pulse">
      <div className="w-[14.6rem] h-[7.6rem] object-cover bg-searchBar-main mr-[1rem]" />
      <div className="flex justify-end items-center w-full h-[5rem] px-[2rem] bg-searchBar-main">
        <div className="w-[2.5rem] h-[2.5rem] border-gray-600 border-2 bg-searchBar-main rounded-full"></div>
      </div>
    </div>
  );
}
