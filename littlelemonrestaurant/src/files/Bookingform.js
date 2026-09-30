import {useState} from "react";

function Bookingform ({availableTimes,dispatch,submitForm}){
    
    let[date, setDate]=useState("");
    let[time,setTime]=useState("");
    let[guests,setGuests]=useState("1");
    let[occasion,setOccasion]=useState("");
    let[errors, setErrors]=useState({});

    function submitHandler(e){
        e.preventDefault();
        let newErrors={};
        if(!date)
            newErrors.date="Please select a date.";
        if(!time)
            newErrors.time="Please select a time.";
        const guestCount=Number(guests);
        if(guestCount<1||guestCount>10)
            newErrors.guests="Number of guests can be between 1 and 10";

        setErrors(newErrors);

        if(Object.keys(newErrors).length>0)
            return;

        const formData={date, time, guests, occasion};
        submitForm(formData);

    }

    return(
        <form onSubmit={submitHandler} className="booking-form">
            <fieldset>
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    className={errors.date ? "input-error" : ""}
                    value={date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e)=>{setDate(e.target.value);
                        dispatch(new Date(e.target.value));
                    }}
                />
                {errors.date && (<p className="error-message">{errors.date}</p>)}
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    className={errors.time ? "input-error" : ""}
                    name="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}>
                    <option value="" disabled>Select time</option>
                   {availableTimes.map((availableTime)=>(
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                   ))}
                </select>
                  {errors.time && (<p className="error-message">{errors.time} </p>)}
                <label htmlFor="res-guests">Number of guests</label>
                <input 
                    type="number"
                    className={errors.guests ? "input-error" : ""}
                    placeholder="1"
                    id="res-guests"
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                />
                  {errors.guests && (<p className="error-message">{errors.guests} </p>)}
                <label htmlFor="res-occasion">Occasion</label>
                <select
                    id="res-occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e)=>setOccasion(e.target.value)}>
                    <option value="" disabled>Choose Occasion</option>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>Casual Meet ups</option>
                </select>
                <input
                    type="submit"
                    value="Make Your Reservation" />
            </fieldset>
        </form>
    );
}
export default Bookingform;