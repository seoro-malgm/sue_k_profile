import CssBaseline from "@mui/material/CssBaseline";
import LayoutDefault from "./layout/Default";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/*" element={<LayoutDefault />} />
      </Routes>
    </div>
  );
}

export default App;
