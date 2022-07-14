import { SearchOutlined } from "@mui/icons-material";
import "./DashLanding.scss";

const DashLanding = () => {
  return (
    <div className="outlet__dashlanding">
      <div className="dashlanding__header">
        <div className="input__container">
          <input type="text" placeholder="Search" />
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default DashLanding;
