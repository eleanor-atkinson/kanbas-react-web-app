import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {IoMdCheckmarkCircle} from "react-icons/io";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
<ul key={index} className = "module-list-group">
           <li key={index} className="list-group-item list-group-item-secondary">
           <IoMdCheckmarkCircle  style={{ color: "green", float: 'right', }}/>
             <h3>{module.name}</h3>
             
             </li>
             <li key={index} className="list-group-item list-group-item-light">
             <p>{module.description}</p>
           </li>
           </ul>

      ))
      }
    </ul>
  );
}
export default ModuleList;