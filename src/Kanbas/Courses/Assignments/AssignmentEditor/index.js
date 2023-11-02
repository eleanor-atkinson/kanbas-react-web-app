import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import "./index.css";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="float-end ml-5">
             <IoCheckmarkCircle size={25} style={{ fill: 'green' }} />
             <span className="green-text">Published</span>
                <button type="button" class="btn btn-light btn-outline-secondary"><BsThreeDotsVertical /></button>
            </div>
            <div className="grey-text">
                <br></br>
                Assignment Name
            </div>
            <input value={assignment.title}
                className="form-control mb-2" />
            <br></br>
            <hr></hr>

            <button onClick={handleSave} className="btn btn-danger me-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light float-end">
                Cancel
            </Link>

        </div>
    );
}


export default AssignmentEditor;