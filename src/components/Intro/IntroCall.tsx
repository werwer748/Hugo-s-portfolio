import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IntroCallWrapper = styled.div`
  width: 90%;
  height: 100px;
  border-bottom: 1px solid gray;

  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    > li {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

const IntroCall = () => {
  const sendSMS = () => {
    location.href = `sms:010-3968-5462?body=테스트문자메시지`;
  };
  return (
    <IntroCallWrapper>
      <ul>
        <li>
          <label>연락처 : </label>
          <label>
            &nbsp;
            <a href="sms:01039685462?body=내용을 입력해주세요.">
              010-3968-5462
            </a>
          </label>
        </li>
        <li>
          <label>이메일 : </label>
          <label>
            &nbsp;
            <Link to="/SendEmail">werwer748@naver.com</Link>
          </label>
        </li>
        <li>
          <label>사는곳 : </label>
          <label>&nbsp;은평구</label>
        </li>
      </ul>
    </IntroCallWrapper>
  );
};

export default IntroCall;
