import dayjs from "dayjs";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import s from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/storeHooks";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { setSmallMonth } from "../../store/slices/calendarSlice";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { createPortal } from "react-dom";
import PopupCreateEvent from "../PopupCreateEvent/PopupCreateEvent";

const Sidebar = () => {
    const [currentDay, setCurrentDay] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const currentMonth = useAppSelector(
        (state) => state.calendar.smallCurrentMonth,
    );

    return (
        <section className={s.sidebar}>
            <div className={s.sidebar__inner}>
                <button
                    onClick={() => setOpen(true)}
                    className={s.sidebar__create}
                >
                    <span>
                        <FiPlus />
                    </span>
                    Create
                </button>
                <div className={s.sidebar__head}>
                    <div className={s.sidebar__month_name}>
                        {dayjs(new Date(dayjs().year(), currentMonth)).format(
                            "MMMM YYYY",
                        )}
                    </div>
                    <div className={s.sidebar__arrows}>
                        <button
                            onClick={() =>
                                dispatch(setSmallMonth(currentMonth - 1))
                            }
                            className={s.sidebar__btn}
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={() =>
                                dispatch(setSmallMonth(currentMonth + 1))
                            }
                            className={s.sidebar__btn}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
                <SmallCalendar currentDay={currentDay} setDay={setCurrentDay} />
            </div>
            {open &&
                currentDay !== "" &&
                createPortal(
                    <PopupCreateEvent
                        setValue={setOpen}
                        currentDay={currentDay}
                    />,
                    document.body,
                )}
        </section>
    );
};

export default Sidebar;
