import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login.jsx";
import Terms from "./pages/Terms.jsx";
import PriceList from "./pages/PriceList.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login/"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/terms/"
          element={
            <>
              <Navbar />
              <Terms />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="/pricelist/" element={<PriceList />} />
      </Routes>
    </>
  );
}

export default App;
