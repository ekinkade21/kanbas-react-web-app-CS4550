import Account from "./Account";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "../Courses/client";
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "",
    name: "",
    number: "",
    department: "",
    description: "",
  });
  const findAllCourses = async () => {
    const response = await client.findAllCourses();
    setCourses(response);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await client.createCourse(course);
  };
  const deleteCourse = async (courseId: string) => {
    const response = await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c?._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c?._id === course?._id) {
          return course;
        }
        return c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
