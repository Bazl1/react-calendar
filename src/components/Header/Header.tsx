import { useAppDispatch, useAppSelector } from "../../shared/hooks/storeHooks";
import s from "./Header.module.scss";
import { setMonth, setSmallMonth } from "../../store/slices/calendarSlice";
import dayjs from "dayjs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Header = () => {
    const dispatch = useAppDispatch();
    const currentMonth = useAppSelector((state) => state.calendar.currentMonth);
    return (
        <header className="header">
            <div className="container-fluid">
                <div className={s.header__inner}>
                    <div className={s.header__logo}>Calendar</div>
                    <button
                        onClick={() => {
                            dispatch(setMonth(dayjs().month()));
                            dispatch(setSmallMonth(dayjs().month()));
                        }}
                        className={s.header__today}
                    >
                        Today
                    </button>
                    <div className={s.header__btns}>
                        <button
                            onClick={() => dispatch(setMonth(currentMonth - 1))}
                            className={s.header__btn}
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={() => dispatch(setMonth(currentMonth + 1))}
                            className={s.header__btn}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className={s.header__month}>
                        {dayjs(new Date(dayjs().year(), currentMonth)).format(
                            "MMMM YYYY",
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
