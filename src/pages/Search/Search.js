import "./Search.scss";
import { SearchOutlined } from "@mui/icons-material";
const Search = () => {
  return (
    <div className="outlet__search">
      <div className="search__header">
        <div className="input__container">
          <input type="text" placeholder="Search" />
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Search;
