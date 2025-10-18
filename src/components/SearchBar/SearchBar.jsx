import React from "react";
import { Search } from "lucide-react";

function SearchBar({query,setQuery,handleSearch}) {
  function handleSubmit (e){
    e.preventDefault();
    handleSearch();
    console.log("submited")
  }
  return (
    <section className="relative  text-white py-24 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
       <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
  Discover Your Next Favorite Pizza or Burger! 🍕🍔
</h1>

        <p className="text-lg mb-8 text-[#FFF5E1]">
          Explore our tasty pizza recipes made with the freshest ingredients and bold flavors.
        </p>
          <form action="" onSubmit={handleSubmit}>
          <div className="flex items-center rounded-full shadow-lg overflow-hidden w-full max-w-md mx-auto">
          <input
            type="text"
            value={query}
            placeholder="Search for a pizza recipe..."
            onChange={(e)=>{setQuery(e.target.value)}}
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#E16E0E] text-white px-5 py-3 hover:bg-[#c65b05] transition-all">
            <Search size={20} />
          </button>
        </div>
          </form>
        
      </div>
    </section>
  );
}

export default SearchBar;
