import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./book.css";
import Best from "./component/Best";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Best />} />
            <Route exact path="/Catalog" element={<Catalog />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;