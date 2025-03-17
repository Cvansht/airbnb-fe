import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-6 md:px-20 bg-white text-gray-700">
      {/* Inspiration Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Inspiration for future getaways</h2>
        
        {/* Tabs */}
        <div className="flex gap-6 text-sm font-medium border-b pb-2">
          <span className="border-b-2 border-black pb-1 cursor-pointer">Popular</span>
          <span className="text-gray-500 cursor-pointer">Arts & culture</span>
          <span className="text-gray-500 cursor-pointer">Outdoors</span>
          <span className="text-gray-500 cursor-pointer">Mountains</span>
          <span className="text-gray-500 cursor-pointer">Beach</span>
          <span className="text-gray-500 cursor-pointer">Unique stays</span>
          <span className="text-gray-500 cursor-pointer">Categories</span>
          <span className="text-gray-500 cursor-pointer">Things to do</span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 text-sm">
          {[
            { city: "Canmore", type: "Flat rentals" },
            { city: "Benalmádena", type: "House rentals" },
            { city: "Marbella", type: "Cottage rentals" },
            { city: "Mijas", type: "House rentals" },
            { city: "Prescott", type: "Cottage rentals" },
            { city: "Tucson", type: "Flat rentals" },
            { city: "Jasper", type: "Cabin rentals" },
            { city: "Mountain View", type: "Pet-friendly rentals" },
            { city: "Devonport", type: "Cottage rentals" },
            { city: "Mallacoota", type: "Beach house rentals" },
            { city: "Anaheim", type: "Flat rentals" },
            { city: "Monterey", type: "Apartment rentals" },
            { city: "Paso Robles", type: "Cottage rentals" },
            { city: "Santa Barbara", type: "Apartment rentals" },
            { city: "Sonoma", type: "Pet-friendly rentals" },
            { city: "Scottsdale", type: "House rentals" },
            { city: "Ibiza", type: "Holiday rentals" },
          ].map((item, index) => (
            <div key={index} className="cursor-pointer">
              <h3 className="font-medium hover:underline">{item.city}</h3>
              <p className="text-gray-500">{item.type}</p>
            </div>
          ))}
        </div>

        {/* Support, Hosting, and Airbnb Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline cursor-pointer">Help Centre</li>
              <li className="hover:underline cursor-pointer">AirCover</li>
              <li className="hover:underline cursor-pointer">Anti-discrimination</li>
              <li className="hover:underline cursor-pointer">Disability support</li>
              <li className="hover:underline cursor-pointer">Cancellation options</li>
              <li className="hover:underline cursor-pointer">Report neighbourhood concern</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline cursor-pointer">Airbnb your home</li>
              <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
              <li className="hover:underline cursor-pointer">Hosting resources</li>
              <li className="hover:underline cursor-pointer">Community forum</li>
              <li className="hover:underline cursor-pointer">Hosting responsibly</li>
              <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
              <li className="hover:underline cursor-pointer">Find a co-host</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Airbnb</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">New features</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            {/* Language & Currency */}
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaGlobe className="text-lg" />
              <span>English (IN)</span>
            </div>
            <div className="cursor-pointer hover:underline">₹ INR</div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <FaFacebook className="text-xl cursor-pointer hover:text-black" />
              <FaTwitter className="text-xl cursor-pointer hover:text-black" />
              <FaInstagram className="text-xl cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
