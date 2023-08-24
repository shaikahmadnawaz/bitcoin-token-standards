import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Fungible from "./pages/fungible/fungible";
import Bts1155 from "./pages/BTS-1155/bts1155";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/fungible" element={<Fungible />} />
        <Route exact path="/bts1155" element={<Bts1155/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
