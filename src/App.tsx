import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./pages/AdminRoom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import "./services/firebase";
import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="rooms">
                        <Route path="new" element={<NewRoom />} />
                        <Route path=":id" element={<Room />} />
                    </Route>
                    <Route path="admin">
                        <Route path="rooms">
                            <Route path=":id" element={<AdminRoom />}/>
                        </Route>
                    </Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
