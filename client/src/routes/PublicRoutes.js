import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Contact from "../components/Contact/Contact.js";
import Project from "../pages/Project/Project.js";
import AboutUs from "../pages/AboutUs/AboutUs.js";
import UpdateProject from "../admin/adminProject/updateProject/updateProject.js";
import AddProject from "../admin/adminProject/addProject/addProject.js";
import LoginFrom from "../components/Login/LoginFrom.js";
import RegisterFrom from "../components/Register/RegisterFrom.js";
import ErrorPage from "../components/404.js";
import Blog from "../pages/Blog/Blog.js";
import BlogDetail from "../pages/BlogDetail/BlogDetail.js";
import AddBlog from "../admin/adminBlog/addBlog/addBlog.js";
import UpdateBlog from "../admin/adminBlog/updateBlog/updateBlog.js";
import ProtectRoutes from "./ProtectRoutes.js";

function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Home />}></Route>
        <Route
          path="/*"
          element={
            <ProtectRoutes>
              <Routes>
                <Route path={"addproject"} element={<AddProject />}></Route>
                <Route
                  path={"updateproject/:slug"}
                  element={<UpdateProject />}
                ></Route>
                <Route path={"addblog"} element={<AddBlog />}></Route>
                <Route
                  path={"updateblog/:slug"}
                  element={<UpdateBlog />}
                ></Route>
                <Route path={"register"} element={<RegisterFrom />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
              </Routes>
            </ProtectRoutes>
          }
        />
        <Route path={"/login"} element={<LoginFrom />}></Route>
        <Route path={"/contactus"} element={<Contact />}></Route>
        <Route path={"/project"} element={<Project />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
        <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/blog/:slug"} element={<BlogDetail />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default PublicRoutes;
