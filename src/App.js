import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";

import "./App.scss";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path='/cart' component={Cart} />
            <Route path='*' component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
