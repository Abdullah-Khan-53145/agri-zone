import "./App.css";
import Home from "./Pages/Home";
import { connect } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserPage from "./Pages/UserPage";
import Addproduct from "./Pages/Addproduct";
function App({ color }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/:role/log-in",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/:role/sign-up",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/user/:role",
      element: (
        <>
          <Header />
          <UserPage />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: "/user/:role/add-product",
      element: (
        <>
          <Header />
          <Addproduct />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <div
        className="main_background"
        style={{
          backgroundColor: `${color.colors[color.index]}`,
        }}
      ></div>
      <RouterProvider router={router} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(App);
