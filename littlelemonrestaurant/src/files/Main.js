import Homepage from "./Homepage";
import Bookingpage from "./Bookingpage";
import {Routes, Route} from "react-router-dom"
function Main(){
    return(
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<Bookingpage />}></Route>
        </Routes>
    )
}

export default Main;