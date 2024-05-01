import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Common layout components like header, footer, etc. can go here */}
      {/* Define routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
