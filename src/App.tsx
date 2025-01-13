import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProDetailes } from "./pages";
import { Footer, NavBar } from "./container";
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {
  return (
    <div dir="rtl" style={{ paddingTop: "50px", overflow: "hidden" }}>
      <Router>
        <NavBar />
        <div className="my-10">
          <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro_detailes" element={<ProDetailes />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
