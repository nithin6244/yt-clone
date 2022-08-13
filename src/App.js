import { useEffect, useState } from "react";
import Search from "./components/Search";
import Display from "./components/Display";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState("unacademy ad");

  return (
    <div className="App">
      <Header />
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}></Search>
      <Display searchInput={searchInput}></Display>
      <Footer />
    </div>
  );
}

export default App;
