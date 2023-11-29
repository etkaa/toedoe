import Auth from "./Components/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Auth />} />
      <Route path="/dashboard/:listId" element={<Home />} />
    </Routes>
  );
}

export default App;
