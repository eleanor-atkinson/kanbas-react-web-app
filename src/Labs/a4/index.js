import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import React from "react";
import ReduxExamples from "./ReduxExamples";


function Assignment4() {
    function sayHello() {
      alert("Hello");
    }
    return (
      <div>
        <h1>Assignment 4</h1>
        <PassingFunctions theFunction={sayHello} />
        <Add a={1} b={2} />
     <ClickEvent/>
     <PassingDataOnEvent/>
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
      </div>
    );
  }
  export default Assignment4;

/* const Assignment4 = () => {
 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions/>
   </>
 );
};
export default Assignment4; */ 