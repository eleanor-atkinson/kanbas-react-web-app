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
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="col-3">
                <h2>Status</h2>

                <br></br>

                <div className="student-view">
                    <a href="#"><button type="button" class="btn btn-light btn-outline-secondary">
                        <PiEyeglassesLight style={{ marginRight: "5px" }} />
                        Student View </button></a>
                </div>

                <hr></hr>

                <ul class="list-group button-list-group">
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle btn-black">
                        <HiArrowRightOnRectangle />
                        Import Existing Content</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <FaArrowRightFromBracket />
                        Import from Commons</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <SlTarget />
                        Choose Home Page</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BsBarChartLineFill />
                        View Course Stream</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <IoMegaphoneOutline />
                        New Announcement</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BsBarChartLineFill />
                        New Analytics</button></a> </li>
                    <li class="list-group-item border-0"> <a href="#"><button type="button" class="btn btn-light btn-outline-secondary float-middle">
                        <BiBell />
                        View Course Notifications</button></a> </li>


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