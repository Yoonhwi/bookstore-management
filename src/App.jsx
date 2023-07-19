import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./book.css";
import Best from "./component/Best";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ShoppingList from "./component/ShoppingList";
import BuyList from "./component/BuyList";
import { Pages } from "./constants";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path={Pages.ROOT} element={<Best />} />
            <Route exact path={Pages.CATALOG} element={<Catalog />} />
            <Route
              exact
              path={Pages.SHOPPING_LIST}
              element={<ShoppingList />}
            />
            <Route exact path={Pages.BUY_LIST} element={<BuyList />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
