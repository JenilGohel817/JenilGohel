import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import Project from "./pages/Project/Project.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import AdminHome from "./admin/adminHome/AdminHome.js";
import AdminUpdate from "./admin/adminUpdate/adminUpdate.js";
// import RegisterFrom from "./components/Register/RegisterFrom.js";
// import LoginFrom from "./components/Login/LoginFrom.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/Admin"} element={<AdminHome />}></Route>
        {/* <Route path={"/Login"} element={<LoginFrom />}></Route> */}
        {/* <Route path={"/Register"} element={<RegisterFrom />}></Route> */}
        <Route path={"/Admin/:slug"} element={<AdminUpdate />}></Route>
        <Route path={"/ContactUs"} element={<Contact />}></Route>
        <Route path={"/Project"} element={<Project />}></Route>
        <Route path={"/AboutUs"} element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
