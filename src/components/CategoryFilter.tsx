




const categories = [
    { name: "Bed & breakfasts" },
    { name: "Icons" },
    { name: "Farms" },
    { name: "Amazing views" },
    { name: "Countryside" },
    { name: "Tropical" },
  ];
  
  const CategoryFilter = () => {
    return (
      <div className=" gap-8 overflow-x-scroll p-7 flex justify-center">
        {categories.map((category, index) => (
          <button key={index} className="text-base font-semibold border-b-2 border-transparent hover:border-black">
            {category.name}
            
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;
  