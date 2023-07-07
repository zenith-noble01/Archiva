import "./Search.scss";
import { SearchOutlined } from "@mui/icons-material";
import { FoundContainer } from "../../Components";
import { medicalList } from "../../data/dummy";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchBarPosition, setSearchBarPosition] = useState(false);
  const [text, setText] = useState("");
  const [medList, setMedList] = useState([]);

  //changing the position of the searchbar to be sticky after 90px
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSearchBarPosition("sticky ");
    } else {
      setSearchBarPosition("outlet__search");
    }
  };

  window.addEventListener("scroll", handleScroll);

  //filtering the medicalList based on the user input
  useEffect(() => {
    const filteredList = medicalList.filter((med) =>
      med.drug.toLowerCase().includes(text.toLowerCase())
    );
    setMedList(filteredList);
  }, [text]);

  console.log(medList);

  return (
    <div className={`outlet__search ${searchBarPosition}`}>
      <div className="search__header">
        <div className="input__container">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
          />
          <SearchOutlined />
        </div>
      </div>
      <FoundContainer found={medList} />
    </div>
  );
};

export default Search;
