import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "gugi";
        src: url("/assets/fonts/Gugi/Gugi-Regular.ttf");
    }

    @font-face {
        font-family: "dongle";
        src: url("/assets/fonts/Dongle/Dongle-Regular.ttf");
    }
`;