import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/Contact"} element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
