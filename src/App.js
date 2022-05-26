import CssBaseline from "@mui/material/CssBaseline";
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <div>Home page</div>;
}
function Contact() {
  return <div>Contact page</div>;
}

function App() {
  return (
    <div className="App">
      <div className="layout-default">
        <CssBaseline />
        <header>
          <GlobalNav />
        </header>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </main>
        <footer>
          <GlobalFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;
