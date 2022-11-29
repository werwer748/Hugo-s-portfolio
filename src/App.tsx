import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { GlobalStyles } from "./style/GlobalStyle";

import Layout from "./layout/Layout";

// const GlobalStyles = createGlobalStyle`
//     ${reset}

//     @font-face {
//         font-family: "gugi";
//         src: url("/assets/fonts/Gugi/Gugi-Regular.ttf");
//     }

//     @font-face {
//         font-family: "dongle";
//         src: url("/assets/fonts/Dongle/Dongle-Regular.ttf");
//     }
// `;

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Layout>
            </Layout>
        </div>
    );
};

export default App;