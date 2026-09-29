import Homepage from "./Homepage";
import Bookingpage from "./Bookingpage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api";

import {Routes, Route, useNavigate} from "react-router-dom"
import { useReducer } from "react";

export function initializeTimes(){
    const today=new Date();
    return fetchAPI(today);
}

export function updateTimes(state,action){
    return fetchAPI(action);
}


function Main(){
    let navigate=useNavigate();
    let [availableTimes,dispatch]=useReducer(updateTimes,initializeTimes());

    function submitForm(formData){
        const result=submitAPI(formData);
        if(result){
            navigate("/confirmed");
    }
}
    return(
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<Bookingpage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
    )
}

export default Main;