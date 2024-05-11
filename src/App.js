import { BrowserRouter, Routes,Route } from "react-router-dom";
import Master from "./layout/master";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import ServerError from "./error/serverError";
import PageNotFound from "./error/pageNotFound";
import Login from "./pages/login";
import AdminPage from "./admin/adminPage";
import "react-toastify/ReactToastify.min.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<AdminPage/>} />
      <Route path="/error/500" element={<ServerError/>} />
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
