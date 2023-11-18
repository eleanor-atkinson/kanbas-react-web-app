import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { TfiPencilAlt } from "react-icons/tfi";
import { React, useState } from "react";


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
        ) {


    return (
        <div>
            <h1>Dashboard</h1>

            <br></br>
            <h3>Published Courses(3)</h3>
            <hr></hr>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            
            <button onClick={addNewCourse} className="btn btn-success" >
                Add
            </button>
            <button onClick={updateCourse} className="btn btn-primary" >
                Update
            </button>
            <br></br>



            <br></br>
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div class="card">
                            <div class="card-img-top" src="./dashboardicon.jpg"></div>
                            <div class="card-body">
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }} className="btn btn-warning">
                                    Edit
                                </button>

                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }} className="btn btn-danger">
                                    Delete
                                </button>
                                <br></br>
                                <br></br>

                                <h5 class="card-text dashboard-course">{course._id} {course.name} </h5>
                                <br></br>
                                <p class="card-text course-text">
                                    {course.number} </p>
                                <p class="card-text course-text">
                                    Fall 2023 Semester Full Term
                                </p>
                                <TfiPencilAlt />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}
export default Dashboard;