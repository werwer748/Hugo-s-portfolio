import React, { useLayoutEffect, useState } from "react";
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
  const [osCheck, setOsCheck] = useState<null | string>(null);
  useLayoutEffect(() => {
    if (/iPhone|iPad|iPod|Mac/i.test(window.navigator.userAgent)) {
      setOsCheck("&");
    } else {
      setOsCheck("?");
    }
  }, []);
  return (
    <IntroCallWrapper>
      <ul>
        <li>
          <label>연락처 : </label>
          <label>
            &nbsp;
            <a href={`sms:01039685462${osCheck}body=내용을 입력해주세요.`}>
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
