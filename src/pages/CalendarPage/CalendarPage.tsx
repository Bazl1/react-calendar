import s from "./CalendarPage.module.scss";
import BigCalendar from "../../components/BigCalendar/BigCalendar";
import Sidebar from "../../components/Sidebar/Sidebar";

const CalendarPage = () => {
    return (
        <section className={s.calendar}>
            <Sidebar />
            <BigCalendar />
        </section>
    );
};

export default CalendarPage;
