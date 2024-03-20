import { db} from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  let parts = pathname.split("/");
  let append = parts[parts.length - 1];
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <>
      <nav className="d-none d-md-block" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">{course?.name}</li>
            <li className="breadcrumb-item active" aria-current="page">{append}</li>
          </ol>
        </nav>
      <div style={{ display: "flex" }}>
        <CourseNavigation />
        <div style={{ left: "320px", top: "50px", width: "calc(100% - 320px)" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;
