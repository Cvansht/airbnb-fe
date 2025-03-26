import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract filters from URL
  const filters = {
    location: queryParams.get("location") || "",
    checkIn: queryParams.get("checkIn") || "",
    checkOut: queryParams.get("checkOut") || "",
    guests: queryParams.get("guests") || "",
    minPrice: queryParams.get("minPrice") || "",
    maxPrice: queryParams.get("maxPrice") || "",
    rating: queryParams.get("rating") || "",
  };

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulate fetching results (Replace with actual API call)
    const fetchResults = async () => {
      console.log("Fetching results with filters:", filters);
      // Fetch data using filters (Example: `/api/listings?location=xyz&minPrice=100`)
      setResults([
        //@ts-ignore
        { id: 1, name: "Luxury Apartment", price: 120 },
        //@ts-ignore
        { id: 2, name: "Cozy Studio", price: 80 },
      ]);
    };

    fetchResults();
  }, [location.search]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <p>Filters Applied: {JSON.stringify(filters)}</p>

      <div className="mt-4">
        {results.length > 0 ? (
          results.map((result) => (
            //@ts-ignore
            <div key={result.id} className="border p-2 rounded-md mb-2">
              
              <h2 className="text-lg font-semibold">
              
                {//@ts-ignore
                result.name}</h2>
              <p>Price: ${
              //@ts-ignore
              result.price}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
