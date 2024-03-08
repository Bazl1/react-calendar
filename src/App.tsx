import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import LayoutMain from "./components/LayoutMain/LayoutMain";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutMain>
                            <CalendarPage />
                        </LayoutMain>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
