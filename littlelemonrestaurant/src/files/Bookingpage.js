function Bookingpage() {
    return (
        <main className="booking-page">
            <div className="container">
                <h1>Reserve a Table</h1>
                <form>
                    <label htmlFor="date">Choose date</label>
                    <input type="date"id="date"/>
                    <label htmlFor="time">Choose time</label>
                    <input type="time" id="time"/>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" id="guests" min="1" max="10"/>
                    <button type="submit">Reserve</button>
                </form>
            </div>
        </main>
    );
}

export default Bookingpage;