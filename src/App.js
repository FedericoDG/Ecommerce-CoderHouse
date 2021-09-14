import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
//import { CartProvider } from "./components/Context/CartProvider";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.scss";
import Cart from "./components/Cart/Cart";

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
            </Switch>
          </Router>
        </CartProvider>
    </>
  );
};

export default App;
