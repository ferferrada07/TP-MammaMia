// HOOKS
import { Route, Routes } from "react-router-dom";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Views
import { Navbar } from "./pages/Navbar";
import Cart  from "./pages/Cart";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info/:id" element={<Info />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
