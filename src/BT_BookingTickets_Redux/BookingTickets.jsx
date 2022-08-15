import React from "react";
import BookingList from "./BookingList";
import BookingInfo from "./BookingInfo";

import "./style.css";

const BookingTickets = () => {
	return (
		<div>
			<div className="background">
				<div className="overlay"></div>
			</div>

			<div className="container-fluid mt-3">
				<div className="row">
					<div className="col-md-8">
						<BookingList />
					</div>
					<div className="col-md-4">
						<BookingInfo />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingTickets;
