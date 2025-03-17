import ListingCard from "./ListingCard";

const listings = [
  { image: "/sample.jpg", location: "Pokhara, Nepal", host: "Miranda", date: "23-28 Mar", price: 3052, rating: 5.0 },
  { image: "/sample.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house3.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
  { image: "/house4.jpg", location: "Pokhara, Nepal", host: "Elaheh", date: "17-22 Mar", price: 4557, rating: 4.93 },
 
];

const ListingsGrid = () => {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;
