
export const Filter = ({
  activeLevel,
  setActiveLevel,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="mb-10 flex flex-col gap-4 items-center">

      {/* LEVEL FILTER */}
      <div className="flex gap-3 flex-wrap justify-center">
        {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className={`px-4 py-2 rounded-full border transition ${
              activeLevel === level
                ? "bg-[#49bbbd] text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 flex-wrap justify-center">
        {["All", "Frontend", "Backend", "DevOps", "Fullstack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-[#49bbbd] text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
};