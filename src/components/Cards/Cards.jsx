import React from "react";

function Cards({cardData}) {
  return (
    <section className="py-12 px-6">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-[#B92F17] mb-2">Our Best Recipes</h2>
    <p className="text-gray-200">Discover mouthwatering pizzas crafted to perfection.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] overflow-hidden transform hover:scale-105 transition duration-500 ease-out"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-[#B92F17] mb-2">
            {card.title}
          </h3>
          <button className="bg-[#E16E0E] text-white px-4 py-2 rounded-md hover:bg-[#B92F17] transition-all shadow-md hover:shadow-lg">
            View Recipe
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Cards;
