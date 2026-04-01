import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CountCharacters from "./Task3/CountCharacters";
import CounterApplicaion from "./Task4/CounterApp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task3" element={<CountCharacters />} />
                <Route path="/task4" element={<CounterApplicaion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;