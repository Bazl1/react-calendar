import dayjs from "dayjs";
import s from "./Day.module.scss";
import { memo, useEffect, useState } from "react";
import { useAppSelector } from "../../shared/hooks/storeHooks";
import { IEvent } from "../../store/slices/calendarSlice";

interface DayProps {
    day: any;
}

const Day = memo(({ day }: DayProps) => {
    const [dayEvents, setDayEvents] = useState<IEvent[]>([]);
    const currentMonth = useAppSelector((state) => state.calendar.currentMonth);

    const events = useAppSelector((state) => state.calendar.events);

    const getEvents = (day: string) => {
        const dayEvents = events.filter((event: IEvent) => day === event.data);
        return setDayEvents(dayEvents);
    };

    useEffect(() => {
        getEvents(day.format("DD-MM-YYYY"));
    }, [events, day]);

    const getCurrentDay = () => {
        if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
            return `${s.day} ${s.day__current}`;
        } else {
            return `${s.day}`;
        }
    };

    const getPreviousDays = () => {
        if (
            day.format("MM") !==
            dayjs(new Date(dayjs().year(), currentMonth)).format("MM")
        ) {
            return `${s.day__previous}`;
        }
        return "";
    };

    return (
        <div className={`${getCurrentDay()} ${getPreviousDays()}`}>
            <span>{day.format("D")}</span>
            <div className={s.day__events}>
                {dayEvents &&
                    dayEvents.map((event: IEvent, i) => {
                        return (
                            <div key={i} className={s.day__event}>
                                {event.title}
                            </div>
                        );
                    })}
            </div>
            {dayEvents.length > 2 && (
                <p className={s.day__events_more}>
                    {dayEvents.length - 2} more
                </p>
            )}
        </div>
    );
});

export default Day;
