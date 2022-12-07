import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ImgDetailModal from "../Modal/ImgDetailModal";

const IntroHeaderWrapper = styled.div`
  width: 90%;
  height: 150px;
  border-bottom: 1px solid gray;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ProfileHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > div {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 100%;
      object-fit: contain;
      cursor: pointer;
    }
  }

  > ul {
    font-weight: 500;
    font-size: 2rem;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > li {
      height: 30%;
    }
  }
`;

const IntroHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const clickImg = useCallback(() => {
    setModalOpen(true);
  }, [modalOpen]);
  return (
    <IntroHeaderWrapper>
      {modalOpen && (
        <ImgDetailModal
          image="/assets/image/full.jpeg"
          setModalOpen={setModalOpen}
        />
      )}
      <ProfileHeader>
        <div onClick={clickImg}>
          <img src="/assets/image/full.jpeg" alt="hugoImg" />
        </div>
        <ul>
          <li>
            <label>이름 : </label>
            <label>강 준 기</label>
          </li>
          <li>
            <label>생년월일 : </label>
            <label>1993년 5월 7일(계유년) 만 29세</label>
          </li>
          <li>
            <label>한마디 : </label>
            <label>
              비즈니스를 위한 가치 창출을 할 수 있는 개발자가 되겠습니다!
            </label>
          </li>
        </ul>
      </ProfileHeader>
    </IntroHeaderWrapper>
  );
};

export default IntroHeader;
