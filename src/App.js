import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/common/Body";
import "./index.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-32 pb-14">
        <Routes >
          <Route exact path="/" element={<Body />}></Route>
        </Routes >
      </div>
      <Footer />

    </div>

  );
}

export default App;
