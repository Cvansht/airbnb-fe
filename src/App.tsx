import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/listing";
import SearchResults from "./pages/SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
