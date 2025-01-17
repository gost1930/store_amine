import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProDetailes , Contact , Cart , DelivetyPrices ,OrderStatus } from "./pages";
import { Footer, NavBar } from "./container";
import {LodingPage} from "./components"
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {

  return (
    <div dir="rtl" style={{ paddingTop: "50px", overflow: "hidden" }}>
      <Router>
        <NavBar />
        <div className="my-14 md:px-20 lg:px-32 px-3">
          <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro_detailes" element={<ProDetailes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/delivery_prices" element={<DelivetyPrices />} />
            <Route path="/order_status" element={<OrderStatus />} />
            <Route path="*" element={<LodingPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
