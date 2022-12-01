import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { GlobalStyles } from "./style/GlobalStyle";

import Layout from "./layout/Layout";
import Intro from "./pages/Intro";
import Career from "./pages/Career";
import Stack from "./pages/Stack";
import SendEmail from "./pages/SendEmail";


const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Layout>
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/Career" element={<Career />} />
                        <Route path="/Stack" element={<Stack />} />
                        <Route path="/SendEmail" element={<SendEmail />} />
                    </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;