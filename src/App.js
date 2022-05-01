import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import BookNow from "./Pages/BookNow";
import Home from "./Pages/Home";
import LearnMore from "./Pages/LearnMore";
import LocationPage from "./Pages/LocationPage";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/locations" element={<LocationPage />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
