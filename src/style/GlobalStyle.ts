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

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }

    @keyframes flicker {
    0%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
`;
