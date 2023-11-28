import Auth from "./Components/Auth/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default App;
