import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Fungible from "./pages/fungible/fungible";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/fungible" element={<Fungible />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
