import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components";
import { Home, Login } from "./pages";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
