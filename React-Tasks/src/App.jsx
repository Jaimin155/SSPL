import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CountCharacters from "./Task3/CountCharacters";
import CounterApplicaion from "./Task4/CounterApp";
import DigitalClock from "./Task7/DigitalClock";
import GuessNo from "./Task8/GuessNumber";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task3" element={<CountCharacters />} />
                <Route path="/task4" element={<CounterApplicaion />} />
                <Route path="/task7" element={<DigitalClock />} />
                <Route path="/task8" element={<GuessNo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;