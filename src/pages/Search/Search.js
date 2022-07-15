import "./Search.scss";
import { SearchOutlined } from "@mui/icons-material";
import { FoundContainer } from "../../Components";
import { medicalList } from "../../data/dummy";
import { useState } from "react";

const Search = () => {
  //changing the position of the searchbar to be sticky after 90px
  const [searchBarPosition, setSearchBarPosition] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSearchBarPosition("sticky ");
    } else {
      setSearchBarPosition("outlet__search");
    }
  };

  window.addEventListener("scroll", handleScroll);

  console.log(searchBarPosition);

  return (
    <div className={`outlet__search ${searchBarPosition}`}>
      <div className="search__header">
        <div className="input__container">
          <input type="text" placeholder="Search" />
          <SearchOutlined />
        </div>
      </div>
      <FoundContainer found={medicalList} />
    </div>
  );
};

export default Search;
