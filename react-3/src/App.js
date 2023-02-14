import logo from './logo.svg';
import './App.css';
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Header from "./Fecture/Header";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import Service from "./Page2/Service";
import {Layout2} from "./Layout2";
import Detalis from "./Page2/Details";

function App() {
  return (
    <div className="App">
        <Routes >
            <Route path='/' element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

            </Route>
            <Route path="/service" element={<Layout2 />}>
                <Route path="/service" element={<Service />} />
                <Route path="/service/detalis/:id" element={<Detalis />} />
            </Route>

        </Routes>
    </div>
  );
}

export default App;
