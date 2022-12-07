import React from "react";
import styled from "styled-components";

const IntroProudWrapper = styled.main`
  width: 90%;
  font-size: 1.5rem;

  > div {
    width: 10%;
    background: linear-gradient(
      90deg,
      rgb(34, 193, 195) 0%,
      rgb(253, 187, 45) 100%
    );
    padding-left: 10px;
    border-radius: 10px;
    color: #f9f4f4;
    margin-top: 10px;
  }

  > ul {
    width: 100%;
    padding: 15px;

    animation: flicker 5s infinite;
  }
`;

const IntroProud = () => {
  return (
    <IntroProudWrapper>
      <div>
        <label>핵심역량</label>
      </div>
      <ul>
        <li>1. 경력에 비해 다양한 경험 및 성공적인 프로젝트 마무리</li>
        <li>2. 구성원들간의 커뮤니케이션을 통한 업무의 효율성 증가</li>
        <li>3. 새로운 기술에 대한 도전정신</li>
        <li>4. 위기에 직면했을 때, 다양한 해결책을 제시할 수 있는 능력</li>
        <li>5. 매우 정확한 자기인지 및 이슈사항 전달 능력</li>
        <li>6. 약간의 유머 그리고... 센스</li>
      </ul>
    </IntroProudWrapper>
  );
};

export default IntroProud;
