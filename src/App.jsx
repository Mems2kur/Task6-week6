import React, { useState } from 'react'
import SearchBar from "../src/components/SearchBar/SearchBar";
import Cards from "../src/components/Cards/Cards"
import Navbar from "../src/components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import {cards} from '../src/components/Data/Data';
function App() {
  const [query,setQuery] = useState("");
  const[cardData, setCardData]= useState(cards);

  const handleSearch =(()=>{
    const FilterSearch =cards.filter((card)=>
       card.title.toLowerCase().includes(query.toLowerCase())
    );
      setCardData(FilterSearch);
      setQuery("");
  })


  return (
<div className="relative min-h-screen">
  <div className="absolute inset-0 bg-gradient-to-b from-[#E16E0E] via-[#B92F17] to-[#536304]" />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 text-white">
    <Navbar />
    <SearchBar query={query} setQuery={setQuery}  handleSearch={handleSearch}/>
    <Cards cardData={cardData} />
    <Footer/>
    
  </div>
</div>

  )
}

export default App