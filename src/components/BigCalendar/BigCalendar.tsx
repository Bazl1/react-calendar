import { useEffect, useState } from "react";
import s from "./BigCalendar.module.scss";
import { getMonth } from "../../shared/utils/getMonth";
import Day from "../Day/Day";
import { useAppSelector } from "../../shared/hooks/storeHooks";

const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const BigCalendar = () => {
    const [month, setMonth] = useState(getMonth());

    const currentMonth = useAppSelector((state) => state.calendar.currentMonth);

    useEffect(() => {
        setMonth(getMonth(currentMonth));
    }, [currentMonth]);

    return (
        <div className={s.calendar}>
            <div className="container-fluid">
                <div className={s.calendar__inner}>
                    <div className={s.calendar__head}>
                        {dayOfWeek.map((day, i) => {
                            return (
                                <div key={i} className={s.calendar__day}>
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                    {month.map((row, i) => {
                        return (
                            <div key={i} className={s.calendar__row}>
                                {row.map((day, i) => {
                                    return <Day day={day} key={i} />;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BigCalendar;
