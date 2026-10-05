import Bookingform from "./Bookingform"

function Bookingpage({availableTimes,dispatch,submitForm}) {
    return (
        <main className="booking-page">
            <div className="container">
                <h1>Reserve a Table</h1>
                <Bookingform 
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
                />
                <p>We look forward to seeing you!!</p>
            </div>
        </main>
    );
}

export default Bookingpage;