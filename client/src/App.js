import { Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import Project from "./pages/Project/Project.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import AdminHome from "./admin/adminHome/AdminHome.js";
import AdminUpdate from "./admin/adminUpdate/adminUpdate.js";
import LoginFrom from "./components/Login/LoginFrom.js";
import RegisterFrom from "./components/Register/RegisterFrom.js";
import ErrorPage from "./components/404.js";

function App() {
  return (
    <>
      <Router>
        <Route path={""} element={<Home />}></Route>
        <Route path={"/Admin"} element={<AdminHome />}></Route>
        <Route path={"/Admin/:slug"} element={<AdminUpdate />}></Route>
        <Route path={"/Login"} element={<LoginFrom />}></Route>
        <Route path={"/Register"} element={<RegisterFrom />}></Route>
        <Route path={"/ContactUs"} element={<Contact />}></Route>
        <Route path={"/Project"} element={<Project />}></Route>
        <Route path={"/AboutUs"} element={<AboutUs />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Router>
    </>
  );
}

export default App;
