import dayjs from "dayjs";
import s from "./SmallCalendar.module.scss";
import { memo, useEffect, useState } from "react";
import { getMonth } from "../../shared/utils/getMonth";
import { useAppSelector } from "../../shared/hooks/storeHooks";

const dayOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

interface SmallCalendarProps {
    setDay: (value: any) => void;
    currentDay: string;
}

const SmallCalendar = memo(({ setDay, currentDay }: SmallCalendarProps) => {
    const [month, setMonth] = useState(getMonth());

    const currentMonth = useAppSelector(
        (state) => state.calendar.smallCurrentMonth,
    );

    useEffect(() => {
        setMonth(getMonth(currentMonth));
    }, [currentMonth]);

    return (
        <div className={s.sidebar__small_calendar}>
            <div className={s.sidebar__head}>
                {dayOfWeek.map((day, i) => {
                    return (
                        <div key={i} className={s.sidebar__day}>
                            {day}
                        </div>
                    );
                })}
            </div>
            {month.map((row, i) => {
                return (
                    <div key={i} className={s.sidebar__callendar_row}>
                        {row.map((day, i) => {
                            const getCurrentDay = () => {
                                if (
                                    day.format("DD-MM-YY") ===
                                    dayjs().format("DD-MM-YY")
                                ) {
                                    return `${s.sidebar__callendar_day} ${s.sidebar__callendar_day_current}`;
                                } else {
                                    return `${s.sidebar__callendar_day}`;
                                }
                            };

                            const getPreviousDays = () => {
                                if (
                                    day.format("MM") !==
                                    dayjs(
                                        new Date(dayjs().year(), currentMonth),
                                    ).format("MM")
                                ) {
                                    return `${s.sidebar__previous}`;
                                }
                                return "";
                            };

                            const getActiveDay = () => {
                                if (day.format("DD-MM-YYYY") == currentDay) {
                                    return `${s.sidebar__active}`;
                                }
                                return "";
                            };

                            return (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDay(day.format("DD-MM-YYYY"));
                                    }}
                                    className={`${getCurrentDay()} ${getPreviousDays()} ${getActiveDay()}`}
                                >
                                    <span>{day.format("D")}</span>
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
});

export default SmallCalendar;
