import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div style={{ display: "flex" }}>
      <CourseNavigation />
      <div style={{ left: "320px", top: "50px", display:"flex-grow" }}>
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
  );
}
export default Courses;
