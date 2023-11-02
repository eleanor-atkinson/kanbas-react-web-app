import ModuleList from "../Modules/ModuleList";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { SlTarget } from "react-icons/sl";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { PiEyeglassesLight } from "react-icons/pi";
import "./index.css";
import {BsFill5CircleFill} from "react-icons/bs";
import {TiDeleteOutline} from "react-icons/ti";


function Home() {
    return (
        <div className="row">
            <div className="col-8">
            <br></br>
                <h2>Home</h2>
                <ModuleList />
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
            <br></br>
                <h2>Status</h2>

                <br></br>

                <div className="student-view">
                    <a href="#"><button type="button" class="btn btn-light btn-outline-secondary">
                        <PiEyeglassesLight style={{ marginRight: "5px", color: "black" }} />
                        <span className="black-text">Student View</span> </button></a>
                        
                </div>
             
                <hr></hr>

                <ul class="list-group button-list-group">
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle btn-black">
                        <HiArrowRightOnRectangle />
                        <span className="black-text"> Import Existing Content</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <FaArrowRightFromBracket />
                        <span className="black-text">Import from Commons</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <SlTarget />
                        <span className="black-text"> Choose Home Page</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BsBarChartLineFill />
                        <span className="black-text">View Course Stream</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <IoMegaphoneOutline />
                        <span className="black-text">New Announcement</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BsBarChartLineFill />
                        <span className="black-text">New Analytics</span></button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BiBell />
                        <span className="black-text">View Course Notifications</span></button></a> </li>


                </ul>
                <br></br>
                <ul>
                    <b>To Do</b>
                    <div class="grey-text">
                        <hr></hr>
                        <ul class="list-unstyled"> 
                            <li> 
                                <BsFill5CircleFill style={{ color: "red", marginRight: "10px" }}/> 
                                <a href="#">Grade A1 - ENV + HTML</a>
                                <TiDeleteOutline style={{ marginLeft: "10px"}}/>
                                <br></br>
                                       100 points • Sep 18 at 11:59
                            </li>
                            <br></br>
                            <li> 
                                <BsFill5CircleFill style={{ color: "red", marginRight: "10px" }}/> 
                                <a href="#">Grade A2 - CSS + BOOTSTRAP</a>
                                <TiDeleteOutline style={{ marginLeft: "10px"}}/>
                                <br></br>
                                100 points • Oct 2 at 11:59
                            </li>
                            <br></br>
                        </ul>
                    </div>
                </ul>

            </div>
        </div>
    );
}
export default Home;