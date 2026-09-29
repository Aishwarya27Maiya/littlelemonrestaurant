import {screen,render,fireEvent} from "@testing-library/react";
import Bookingform from "./Bookingform";
import { initializeTimes, updateTimes } from "./Main";

// test("Renders the Bookingform choose date label",()=>{
//     const availableTimes=[ 
//         "17:00",
//         "18:00",
//         "19:00",
//         "20:00",
//         "21:00",
//         "22:00"];
//     const dispatch =jest.fn();
    
//     render(<Bookingform 
//                 availableTimes={availableTimes}
//                 dispatch={dispatch}
//             />);
//     const labelElement=screen.getByLabelText("Choose Date");
//     expect(labelElement).toBeInTheDocument();    
// });

// test("Dispatches when date is changed",()=>{
//     const availableTimes=[
//         "17:00",
//         "18:00",
//         "19:00",
//         "20:00",
//         "21:00",
//         "22:00"
//         ];
//     const dispatch=jest.fn();
//     render(<Bookingform availableTimes={availableTimes} dispatch={dispatch}/>);
    
//     const dataInput=screen.getByLabelText("Choose Date");
//     fireEvent.change(dataInput,{
//         target:{value:"2026-10-01"}
//     });
//     expect(dispatch).toHaveBeenCalledWith("2026-10-01");
// });

test("initializeTimes returns available times",()=>{
    let result=initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

test("updateTimes return available time for se;ected date",()=>{
    let state=[];
    let selectedDate=new Date("2026-10-01");
    let result=updateTimes(state,selectedDate);
    expect(result.length).toBeGreaterThan(0);
})

test("date and time input fields has required attribute",()=>{
    const availableTimes=["17:00","18:00"];
    const dispatch=jest.fn();
    render(<Bookingform 
        availableTimes={availableTimes} 
        dispatch={dispatch}/>);
    const dateInput=screen.getByLabelText("Choose Date");
    const timeInput=screen.getByLabelText("Choose Time");
    expect(dateInput).toBeRequired();
    expect(timeInput).toBeRequired();    
});

test("guests input fiels has correct validation attributes",()=>{
    let availableTimes=["17:00","18:00"];
    let dispatch=jest.fn();
    render(<Bookingform 
        availableTimes={availableTimes}
        dispatch={dispatch}
        />)
    let result=screen.getByLabelText("Number of guests");
    expect(result).toHaveAttribute("min","1");
    expect(result).toHaveAttribute("max","10");
})

test("Submit button should be disabled when the form is invalid",()=>{
    const availableTimes=["17:00","18:00"];
    const dispatch=jest.fn();
    render(<Bookingform
            availableTimes={availableTimes}
            dispatch={dispatch} 
            />)
    let submitButton=screen.getByDisplayValue("Make Your Reservation");
    expect(submitButton).toBeDisabled();        
});

test("Submit button is enabled when the form is valid",()=>{
    const availableTimes=["17:00","18:00"];
    const dispatch=jest.fn();
    render(<Bookingform
            availableTimes={availableTimes}
            dispatch={dispatch} 
            />)
    let dateInput=screen.getByLabelText("Choose Date");
    let guestsInput=screen.getByLabelText("Number of guests");
    let timeInput=screen.getByLabelText("Choose Time");
    fireEvent.change(dateInput,{
        target:{value:"2026-10-01"}
    });
    fireEvent.change(timeInput,{
        target:{value:"17:00"}
    });
    fireEvent.change(guestsInput,{
        target:{value:"2"}
    });
    
    let submitButton=screen.getByDisplayValue("Make Your Reservation");

    expect(submitButton).toBeEnabled();        
});