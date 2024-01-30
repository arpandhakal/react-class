import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <NavComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </NavComponent>
  );
}

export default App;
