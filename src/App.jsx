import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Data_card } from "./components/card/data_card";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="detail/:id" element={<Data_card />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
