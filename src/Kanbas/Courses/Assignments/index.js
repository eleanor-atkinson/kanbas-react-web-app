import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { PiDotsSixVerticalBold, PiNotePencilLight } from "react-icons/pi";
import "./index.css";
import { GoTriangleDown } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";


function Assignments() {
  // useParams() parses courseID and find all assignments from database
  // assignments should be links that encode the course's ID and assignment's ID in URL path 
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div>
      <br></br>
      <div class="form-outline float-start w-25">
        <input type="search" id="form1" class="form-control" placeholder="Search for Assignment" aria-label="Search" />
      </div>
      <div class="float-end">
      <button type="button" class="btn btn-light btn-outline-secondary">+Group</button>
      <button type="button" class="btn btn-danger">+Assignment</button>
      <button type="button" class="btn btn-light btn-outline-secondary"><BsThreeDotsVertical/></button>
      </div>

      <br></br>
      <br></br>
      <hr/>
      <br></br>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <li class="list-group-item list-group-item-secondary">
          <PiDotsSixVerticalBold size={25} />
          <GoTriangleDown />
          <b>ASSIGNMENTS</b>
          <div className="float-end">
            <span className="border border-secondary rounded-pill px-2">40% of Total</span>
            <AiOutlinePlus style={{ margin: '5px', fill: "grey" }} />
            <BsThreeDotsVertical style={{ fill: 'grey' }} />
          </div>
        </li>

        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item green-border border-top-0 rounded-0">
            <div>
              <div className="float-start pt-3">
                <PiDotsSixVerticalBold size={20} />
                <PiNotePencilLight size={20} style={{ fill: 'green' }} />
              </div>
              <div className="float-end pt-3">
                <IoCheckmarkCircle size={25} style={{ fill: 'green' }} />
                <BsThreeDotsVertical />
              </div>
              <div className="float-start">
                <Link

                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item border-0">
                  <b>{assignment.title}</b>
                  <br></br>
                  <div className="small-text">  <span className="red-text">Multiple Modules </span>
                    | <b> Due</b> {assignment.description} </div>


                </Link>

              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
export default Assignments;