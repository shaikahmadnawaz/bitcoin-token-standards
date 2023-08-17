import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </>
  );
}

export default App;
