import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
