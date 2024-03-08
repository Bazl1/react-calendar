import { useState } from "react";
import s from "./PopupCreateEvent.module.scss";
import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "../../shared/hooks/storeHooks";
import { addEvent } from "../../store/slices/calendarSlice";

interface PopupCreateEventProps {
    setValue: (value: boolean) => void;
    currentDay: any;
}

const PopupCreateEvent = ({ setValue, currentDay }: PopupCreateEventProps) => {
    const [title, setTitle] = useState<string>("");

    const dispatch = useAppDispatch();

    const submit = (e: any) => {
        e.preventDefault();
        dispatch(addEvent({ title, data: currentDay }));
        setValue(false);
    };

    return (
        <div className={s.popup}>
            <div className={s.popup__inner}>
                <div className={s.popup__head}>
                    <p className={s.popup__title}>Create event</p>
                    <button
                        onClick={() => setValue(false)}
                        className={s.popup__close}
                    >
                        <IoClose />
                    </button>
                </div>
                <form className={s.popup__form} onSubmit={(e) => submit(e)}>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className={s.popup__input}
                        type="text"
                        placeholder="Title..."
                    />
                    <button className={s.popup__btn} type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupCreateEvent;
