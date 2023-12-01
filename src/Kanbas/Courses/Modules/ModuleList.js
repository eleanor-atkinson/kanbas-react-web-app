import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs"
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        client.updateModule(module).then((status) => {
            dispatch(updateModule(module));
        });
    };

    const handleAddModule = () => {
          client.createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };
    

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
                            <button type="button" class="btn dropdown-toggle btn-light btn-outline-secondary float-end" data-toggle="dropdown">
                                <IoCheckmarkCircleOutline size={25} style={{ color: "green" }} />
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
                        <td> <button type="button" class="btn btn-light btn-outline-secondary"> <BsThreeDotsVertical /></button> </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <br></br>

            <ul className="list-group">
                <li className="list-group-item">

                   <button onClick={() => handleUpdateModule(module)} class="ms-2 btn btn-primary">
                        Update
                    </button>

                    <button onClick={handleAddModule} class="btn btn-success">
                        Add
                    </button>



                    <input value={module.name} class="float-start"
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <br></br>
                    <textarea value={module.description} class="float-start"
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))

                        }
                    />

                </li>

                <br></br>

                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul key={index} className="module-list-group">
                                <li key={index} className="list-group-item list-group-item-secondary">
                                    <span className="float-start"> <PiDotsSixVerticalBold size={20} /> </span>
                                    <span className="float-start"> <GoTriangleRight size={20} /> </span>
                                    <span className="float-end"> <BsThreeDotsVertical /> </span>
                                    <span className="float-end"> + </span>
                                    <span className="float-end"> <GoTriangleDown /> </span>
                                    <span className="float-end">  <IoMdCheckmarkCircle style={{ color: "green" }} /> </span>
                                    <h3>{module.name}</h3>

                                </li>
                                <li key={index} className="list-group-item list-group-item-light">
                                    <button
                                        onClick={() => dispatch(setModule(module))} className="float-end btn btn-success">
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDeleteModule(module._id)} className="float-end btn btn-danger">
                                        Delete
                                    </button>

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