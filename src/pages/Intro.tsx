import React from "react";
import styled from "styled-components";

import IntroHeader from "../components/Intro/IntroHeader";
import IntroCall from "../components/Intro/IntroCall";
import IntroEtc from "../components/Intro/IntroEtc";
import IntroProud from "../components/Intro/IntroProud";
import Introduce from "../components/Intro/Introduce";

const IntroWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "dongle";
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroHeader />
      <IntroCall />
      <IntroEtc />
      <IntroProud />
      <Introduce />
    </IntroWrapper>
  );
};

export default Intro;
