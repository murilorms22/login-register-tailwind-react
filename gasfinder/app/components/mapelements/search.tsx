import React from "react";
import Image from "next/image";

function Search() {
  return (
    <div className="">
      <div className="bg-orange-500 w-max rounded-xl p-3 flex flex-row items-center mx-2 mt-2">
        <Image
          src="/sandwich.png"
          alt=""
          width={60}
          height={1}
          className="ml-3 my-3"
        />

        <input
          className="ml-8 mt-1 mb-2 mr-3 p-3 rounded-xl transition-all bg-orange-500 shadow-sm shadow-gray-500 border-solid border-2 border-gray-300 text-white
          placeholder-gray-200 outline-none font-semibold"
          type="text"
          placeholder="Procure por um posto de sua preferência"
        />
        <Image
          src="/search.png"
          alt=""
          width={30}
          height={1}
          className="mr-2"
        />
      </div>
    </div>
  );
}

export default Search;
