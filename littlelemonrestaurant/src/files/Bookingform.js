import {useState} from "react";

function Bookingform ({availableTimes,dispatch,submitForm}){
    let[date, setDate]=useState("");
    let[time,setTime]=useState("");
    let[guests,setGuests]=useState("1");
    let[occasion,setOccasion]=useState("Birthday");

    const isFormValid=
        date!=""&&time!==""&&guests>=1&&guests<=10;

    function submitHandler(e){
        e.preventDefault();
        const formData={date, time, guests, occasion};
        submitForm(formData);
    }

    return(
        <form onSubmit={submitHandler} style={{display:"grid", maxWidth:"350px", gap:"20px"}}>
            <fieldset>
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    onChange={e=>{setDate(e.target.value);
                        dispatch(new Date(e.target.value));
                    }}
                />
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    name="time"
                    value={time}
                    required
                    onChange={(e)=>setTime(e.target.value)}>
                    <option value="" disabled>Select time</option>
                   {availableTimes.map((availableTime)=>(
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                   ))}
                </select>
                <label htmlFor="res-guests">Number of guests</label>
                <input 
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="res-guests"
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                />
                <label htmlFor="res-occasion">Occasion</label>
                <select
                    id="res-occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e)=>setOccasion(e.target.value)}>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                </select>
                <input
                    type="submit"
                    disabled={!isFormValid}
                    value="Make Your Reservation" />
            </fieldset>
        </form>
    );
}
export default Bookingform;