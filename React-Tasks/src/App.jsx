import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CountCharacters from "./Task3/CountCharacters";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task3" element={<CountCharacters />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;