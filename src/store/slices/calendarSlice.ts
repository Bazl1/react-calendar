import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface IEvent {
    data: string;
    title: string;
}

interface initialStateProps {
    currentMonth: number;
    smallCurrentMonth: number;
    events: IEvent[];
}

const initialState: initialStateProps = {
    currentMonth: dayjs().month(),
    smallCurrentMonth: dayjs().month(),
    events: [],
};

export const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        setMonth: (state, action: PayloadAction<number>) => {
            state.currentMonth = action.payload;
        },
        setSmallMonth: (state, action: PayloadAction<number>) => {
            state.smallCurrentMonth = action.payload;
        },
        addEvent: (state, action: PayloadAction<IEvent>) => {
            state.events = [...state.events, action.payload];
        },
    },
});

export const { setMonth, setSmallMonth, addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
