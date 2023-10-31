import { Link, useLocation } from "react-router-dom";
import './index.css';
import {CgProfile, } from "react-icons/cg";
import {TfiDashboard} from "react-icons/tfi";
import {FaBook} from "react-icons/fa";
import {BsCalendar4Week} from "react-icons/bs";
import {FaInbox} from "react-icons/fa";
import {RiHistoryFill} from "react-icons/ri";
import {CgScreen} from "react-icons/cg";
import {BiSolidRightArrowCircle} from "react-icons/bi";
import {RxQuestionMarkCircled} from "react-icons/rx";



// map routes for url 
// iterate over array and for every link, render url /Kanbas/Account example
function KanbasNavigation() {
  const links = {
    "Account": <CgProfile/>,
    "Dashboard": <TfiDashboard/>,
    "Courses": <FaBook/>,
    "Calendar": <BsCalendar4Week/>,
    "Inbox": <FaInbox/>, 
    "History": <RiHistoryFill/>, 
    "Studio": <CgScreen/>, 
    "Commons": <BiSolidRightArrowCircle/>, 
    "Help": <RxQuestionMarkCircled/>
  };
  const { pathname } = useLocation();
  return (
    <div className="nav-list-group kanbas-nav" style={{ width: 150 }}>
      {Object.entries(links).map(([link, icon], index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`kanbas-nav-item ${pathname.includes(link) && "active"}`}>
            <br></br>
            {icon}
            <br></br>
          {link}
          <br></br>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;