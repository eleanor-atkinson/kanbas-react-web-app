import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import {BsThreeDotsVertical} from "react-icons/bs"


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <br></br>
            <table class="button-table style={{float: 'right'}}">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td> <button type="button" class="btn btn-light btn-outline-secondary">Collapse All</button> </td>
                        <td> <button type="button" class="btn btn-light btn-outline-secondary">View Progress</button> </td>
                        <td> <div class="dropdown">
                            <button type="button" class="btn dropdown-toggle btn-light btn-outline-secondary" data-toggle="dropdown">
                                <IoCheckmarkCircleOutline style={{ color: "green" }} />
                                Publish All
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Introduction to Rocket Propulsion</a>
                                <a class="dropdown-item" href="#">Fuel and Combustion</a>
                                <a class="dropdown-item" href="#">Nozzle Design</a>
                            </div>
                    
                        </div>
                        </td>
                        <td> <button type="button" class="btn btn-danger">+ Module</button> </td>
                        <td> <button type="button" class="btn btn-light btn-outline-secondary"> <BsThreeDotsVertical/></button> </td>
                    </tr>
                </tbody>
            </table>
            <hr/> 
            <br></br>

            <ul className="list-group">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul key={index} className="module-list-group">
                                <li key={index} className="list-group-item list-group-item-secondary">
                                    <IoMdCheckmarkCircle style={{ color: "green", float: 'right', }} />
                                    <h3>{module.name}</h3>

                                </li>
                                <li key={index} className="list-group-item list-group-item-light">
                                    <p>{module.description}</p>
                                </li>
                            </ul>

                        ))
                }
            </ul>
        </div>
    );
}
export default ModuleList;