import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ListingsGrid from "../components/ListingsGrid";
import Footer from "../components/Footer";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <CategoryFilter />
      <ListingsGrid />
      <div className="flex justify-center font-cereal font-semibold pt-12">
      Continue exploring bed & breakfasts
      </div>
      <div  className="flex justify-center font-cereal font-semibold pt-3 pb-8" >
        <button className="text-white  bg-black rounded-lg px-4 py-3">
          Show More
        </button>

      </div>
      <Footer/>
      
    </div>
  );
};

export default Search;
