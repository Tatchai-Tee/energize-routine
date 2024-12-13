import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WakeUp from "./components/WakeUp";

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Wake-Up" element={<WakeUp />} />
  </Routes>
}

export default App;