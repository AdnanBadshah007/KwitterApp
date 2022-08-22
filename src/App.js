import React from "react";
import { AllPost } from "./AllPost";
import { NavBar } from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewPost } from "./NewPost";
import { Home } from "./Home";
import { View } from "./View";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpost" element={<AllPost />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
