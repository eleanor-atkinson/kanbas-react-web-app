import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";



function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className = "container">
    <div className="row">
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <VscThreeBars style={{ color: "red" }}/>
            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${courseId}`} className="acc-link">
                {course.number}
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
        </nav>
        <hr className="horizontal-line" />
      </div>
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
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div >
  );
}
export default Courses;