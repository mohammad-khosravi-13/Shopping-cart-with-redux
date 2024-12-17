  import React from "react";
  import { Provider } from "react-redux";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
  import store from "./redux/store"; 
  import Cart from "./components/Cart";
  import ProductList from "./components/ProductList";
  import Navbar from "./components/Navbar"; 
  import "./index.css";
  import backgruond from "./img/pexels-celine-3776818-13766972.jpg"
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  function App() {
    return (
      <Provider store={store}>
        <Router>
          <div
            style={{
              backgroundImage: `url(${backgruond})`,
              backgroundSize: "cover",
            }}
            className=" p-4 flex flex-col gap-2 h-screen overflow-y-scroll "
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </Provider>
    );
  }

  export default App;
