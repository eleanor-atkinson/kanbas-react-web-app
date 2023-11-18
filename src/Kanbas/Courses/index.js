import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <VscThreeBars style={{ color: "red" }} />
            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${courseId}`} className="acc-link">
                {courseId}
              </Link>
            </li>
            <h5 style={{ color: "grey" }}> {'>'} </h5>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>
              <Routes>
                <Route path="/" element={'Home'} />
                <Route path="Home" element={'Home'} />
                <Route path="Modules" element={'Modules'} />
                <Route path="Assignments" element={'Assignments'} />
                <Route
                  path="Assignments/:assignmentId"
                  element={'Assignment Editor'}
                />
                <Route path="Grades" element={'Grades'} />
              </Routes>
            </li>
          </ol>
          <hr className="horizontal-line" />
        </nav>
      </div>
      <div className="row justify-content-between">
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "350px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Courses;