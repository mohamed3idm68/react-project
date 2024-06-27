import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./componants/Contact/Contact";
import Navbar from "./componants/Navbar/Navbar";
import Componants from "./componants/index/Componants";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Componants}></Route>
          <Route path="/Contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
