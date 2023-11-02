import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { TfiPencilAlt } from "react-icons/tfi";


function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <br></br>
            <h3>Published Courses(3)</h3>
            <hr></hr>
                <br></br>
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div class = "card">
                        <div class="card-img-top" src="./dashboardicon.jpg"></div>
                        <div class="card-body">
                            <h5 class="card-text dashboard-course">{course._id} {course.name} </h5>
                            <br></br>
                            <p class="card-text course-text">
                                {course.number} </p>
                            <p class="card-text course-text">
                                Fall 2023 Semester Full Term
                            </p>
                            <TfiPencilAlt/>
                        </div>
                        </div>
          </Link>
        ))}
        </div>
    </div >
  );
}
export default Dashboard;