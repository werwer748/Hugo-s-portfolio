import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IntroEtcWrapper = styled.main`
  width: 90%;
  border-bottom: 1px solid gray;

  > div {
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    display: flex;

    :nth-of-type(1),
    :nth-of-type(4) {
      > label {
        cursor: pointer;
      }
    }

    > label {
      width: 90%;
      display: flex;
      align-items: center;
      :first-of-type {
        width: 10%;
        justify-content: center;
        border-right: 1px solid gray;
      }
      height: 100%;
      :last-of-type {
        padding-left: 15px;
      }
    }
  }
`;

const IntroEtc = () => {
  const navigate = useNavigate();

  return (
    <IntroEtcWrapper>
      <div onClick={() => navigate("/Career")}>
        <label>경력사항</label>
        <label>1년 9개월</label>
      </div>
      <div>
        <label>희망연봉</label>
        <label>3,600 ~ 4,000만원 (직전 연봉: 3,000만원)</label>
      </div>
      <div>
        <label>희망근무지/근무형태</label>
        <label>서울전체 / 정규직</label>
      </div>
      <div onClick={() => navigate("/Stack")}>
        <label>주요 스택</label>
        <label>javascript, React, React-Native, Nodejs</label>
      </div>
    </IntroEtcWrapper>
  );
};

export default IntroEtc;
