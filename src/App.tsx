import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProDetailes , Contact , Cart } from "./pages";
import { Footer, NavBar } from "./container";
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {
  return (
    <div dir="rtl" style={{ paddingTop: "50px", overflow: "hidden" }}>
      <Router>
        <NavBar />
        <div className="my-14">
          <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro_detailes" element={<ProDetailes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
