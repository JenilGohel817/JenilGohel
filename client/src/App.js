import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import Project from "./pages/Project/Project.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/ContactUs"} element={<Contact />}></Route>
        <Route path={"/Project"} element={<Project />}></Route>
        <Route path={"/AboutUs"} element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
