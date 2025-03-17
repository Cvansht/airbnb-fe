import { FaStar, FaHeart } from "react-icons/fa";
import sampleImage from "../assets/sampleimage.jpg";



interface ListingCardProps {
  image: string;
  location: string;
  host: string;
  date: string;
  price: number;
  rating: number;
}

const ListingCard: React.FC<ListingCardProps> = ({ image, location, host, date, price, rating }) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={sampleImage} alt={location} className="w-full h-48 object-cover" />
        <FaHeart className="absolute top-2 right-2 text-white text-xl cursor-pointer" />
      </div>
      <div className="p-3">
        <p className="text-lg font-semibold">{location}</p>
        <p className="text-gray-500 text-sm">Hosted by {host}</p>
        <p className="text-gray-500 text-sm">{date}</p>
        <div className="flex justify-between mt-2">
          <p className="font-bold">₹{price} night</p>
          <p className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" /> {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
