import React, { useCallback } from "react";
import styled from "styled-components";

const ImgDetailModalWrapper = styled.main`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  > img {
    height: 60vh;
  }
`;

interface IProps {
  image: string;
  setModalOpen: any;
}

const ImgDetailModal = ({ image, setModalOpen }: IProps) => {
  return (
    <ImgDetailModalWrapper onClick={() => setModalOpen(false)}>
      <img src={image} alt="scaleupImg" onClick={(e) => e.stopPropagation()} />
    </ImgDetailModalWrapper>
  );
};

export default ImgDetailModal;
