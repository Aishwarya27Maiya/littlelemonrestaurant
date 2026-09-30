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

test("updateTimes return available time for selected date",()=>{
    let state=[];
    let selectedDate=new Date("2026-10-01");
    let result=updateTimes(state,selectedDate);
    expect(result.length).toBeGreaterThan(0);
})

test("shows validation errors when submit button is clicked with invalid form", () => {
    const availableTimes = ["17:00", "18:00"];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
        <Bookingform
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );

    const submitButton = screen.getByDisplayValue(
        "Make Your Reservation"
    );

    fireEvent.click(submitButton);

    expect(
        screen.getByText("Please select a date.")
    ).toBeInTheDocument();

    expect(
        screen.getByText("Please select a time.")
    ).toBeInTheDocument();

    expect(submitForm).not.toHaveBeenCalled();
});

test("calls submitForm when the form is valid", () => {
    const availableTimes = ["17:00", "18:00"];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
        <Bookingform
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );

    const dateInput = screen.getByLabelText("Choose Date");
    const timeInput = screen.getByLabelText("Choose Time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByDisplayValue(
        "Make Your Reservation"
    );

    fireEvent.change(dateInput, {
        target: { value: "2026-10-01" }
    });

    fireEvent.change(timeInput, {
        target: { value: "17:00" }
    });

    fireEvent.change(guestsInput, {
        target: { value: "2" }
    });

    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalledWith({
        date: "2026-10-01",
        time: "17:00",
        guests: "2",
        occasion: ""
    });
});

test("shows guest error when number of guests is outside the allowed range", () => {
    const availableTimes = ["17:00", "18:00"];
    const dispatch = jest.fn();
    const submitForm = jest.fn();

    render(
        <Bookingform
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );

    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByDisplayValue(
        "Make Your Reservation"
    );

    fireEvent.change(guestsInput, {
        target: { value: "0" }
    });

    fireEvent.click(submitButton);

    expect(
        screen.getByText(
            "Number of guests can be between 1 and 10"
        )
    ).toBeInTheDocument();

    expect(submitForm).not.toHaveBeenCalled();
});