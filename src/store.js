import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./reducers/seatReducer";

const store = configureStore({
	reducer: {
		seats: seatReducer,
	},
});

export default store;
