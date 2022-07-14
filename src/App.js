import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components";
import { Home, Login, DashBoard, DashLanding, Pharmacy } from "./pages";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div className="App">
      {pathname === "dashBoard" ? null : <Navbar pathname={pathname} />}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashBoard" element={<DashBoard />}>
          <Route index element={<DashLanding />} />
          <Route path="pharmacy" element={<Pharmacy />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
