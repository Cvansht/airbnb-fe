import { useState } from "react";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  adults: number;
  children: number;
  infants: number;
  rating?: string;
}

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
    adults: 0,
    children: 0,
    infants: 0,
    rating: "",
  });

  const [guestDropdown, setGuestDropdown] = useState(false);
  const [dateDropdown, setDateDropdown] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
//@ts-ignore
  const handleGuestChange = (type, operation) => {
    setSearchParams((prev) => {
      //@ts-ignore
      let newValue = prev[type];
      if (operation === "increase") newValue += 1;
      if (operation === "decrease" && newValue > 0) newValue -= 1;

      return {
        ...prev,
        [type]: newValue,
        guests: prev.adults + prev.children + prev.infants,
      };
    });
  };

  const [dropdowns, setDropdowns] = useState({
    guests: false,
    dates: false,
    price: false,
    rating: false,
  });
//@ts-ignore
  const toggleDropdown = (type) => {
    setDropdowns((prev) =>
      //@ts-ignore
     ({ ...prev, [type]: !prev[type] }));
  };
//@ts-ignore
  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
    setSearchParams({
      ...searchParams,
      //@ts-ignore
      checkIn: format(ranges.selection.startDate, "MM/dd/yyyy"),
      //@ts-ignore
      checkOut: format(ranges.selection.endDate, "MM/dd/yyyy"),
    });
  };
  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      location: searchParams.location || "string",
      checkIn: searchParams.checkIn || "",
      checkOut: searchParams.checkOut || "",
      guests: String(searchParams.guests || 0),
      rating: searchParams.rating || "",
    }).toString();

    navigate(`/search-results?${queryParams}`);
  };

  return (
    <div className="relative flex items-center bg-white shadow-md rounded-full pr-1 space-x-2 max-w-3xl mx-auto border mt-3 ">
      {/* Location */}
      <div className="flex flex-col flex-1 px-7 py-4 rounded-full hover:bg-gray-200 ">
        <span className="text-xs font-semibold text-gray-700">Where</span>
        <input
          type="text"
          name="location"
          placeholder="Search destinations"
          value={searchParams.location}
          onChange={(e) =>
            setSearchParams({ ...searchParams, location: e.target.value })
          }
          className="outline-none bg-transparent text-gray-600 text-sm"
        />
      </div>

      {/* Date Selection */}
      <div
        className="relative flex flex-col flex-1 px-7 py-4 rounded-full hover:bg-gray-200 cursor-pointer"
        onClick={() => setDateDropdown(!dateDropdown)}
      >
        <span className="text-xs font-semibold text-gray-700">Date</span>
        <span className="text-gray-600 text-sm">
          {searchParams.checkIn && searchParams.checkOut
            ? `${searchParams.checkIn} - ${searchParams.checkOut}`
            : "Select dates"}
        </span>

        {dateDropdown && (
          <div
            className="absolute top-16 left-0 bg-white shadow-lg rounded-lg p-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <DateRange
              ranges={dateRange}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              rangeColors={["#ff385c"]}
            />
            <button
              onClick={() => setDateDropdown(false)}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Guests */}
      <div
        className="relative flex flex-col flex-1 px-7 py-4 cursor-pointer rounded-full hover:bg-gray-200 "
        onClick={() => setGuestDropdown(!guestDropdown)}
      >
        <span className="text-xs font-semibold text-gray-700">Who</span>
        <span className="text-gray-600 text-sm">
          {searchParams.guests > 0
            ? `${searchParams.guests} Guests`
            : "Add guests"}
        </span>

        {/* Guest Selector Dropdown */}
        {guestDropdown && (
          <div
            className="absolute top-16 left-0 bg-white shadow-lg rounded-lg p-4 w-64 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Adults */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Adults</p>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("adults", "decrease");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaMinus />
                </button>
                <span>{searchParams.adults}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("adults", "increase");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Children</p>
                <p className="text-xs text-gray-500">Ages 2-12</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("children", "decrease");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaMinus />
                </button>
                <span>{searchParams.children}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("children", "increase");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium">Infants</p>
                <p className="text-xs text-gray-500">Under 2</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("infants", "decrease");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaMinus />
                </button>
                <span>{searchParams.infants}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGuestChange("infants", "increase");
                  }}
                  className="p-2 border rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button
              onClick={() => setGuestDropdown(false)}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Ratings Dropdown */}
      {/* Ratings Dropdown */}
      <div
        className="relative flex flex-col flex-1 px-4 py-4 cursor-pointer rounded-full hover:bg-gray-200"
        onClick={() => toggleDropdown("rating")}
      >
        <span className="text-xs font-semibold text-gray-700">Rating</span>
        <span className="text-gray-600 text-sm">
          {
            //@ts-ignore
            searchParams.rating
              ? `${searchParams.rating} Stars`
              : "Select rating"
          }
        </span>
        {dropdowns.rating && (
          <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 w-40 z-10">
            <select
              //@ts-ignore
              value={searchParams.rating}
              onChange={(e) => {
                //@ts-ignore
                setSearchParams({ ...searchParams, rating: e.target.value });
              }}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Any Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents dropdown from closing when interacting with the button
                toggleDropdown("rating");
              }}
              className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Done
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="bg-red-500 text-white p-5 rounded-full hover:bg-red-600"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
