import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Amc from "./components/amc/Amc";
import Contact from "./components/contact/Contact";
import Mbca from "./components/mbca/Mbca";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/amc" element={<Amc />} />
          <Route path="/mbca" element={<Mbca />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
