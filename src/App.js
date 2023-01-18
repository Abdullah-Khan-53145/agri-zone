import "./App.css";
import Home from "./Pages/Home";
import { connect } from "react-redux";
function App({ color }) {
  console.log(color.colors[color.index]);
  return (
    <div className="App">
      <div
        className="main_background"
        style={{
          backgroundColor: `${color.colors[color.index]}`,
        }}
      ></div>
      <Home />
    </div>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(App);
