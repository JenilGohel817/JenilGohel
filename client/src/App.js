import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import Project from "./pages/Project/Project.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/Contact"} element={<Contact />}></Route>
        <Route path={"/Project"} element={<Project />}></Route>
      </Routes>
    </>
  );
}

export default App;
