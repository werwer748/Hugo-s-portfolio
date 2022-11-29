import React from "react";
import styled from "styled-components";

const LayoutNavWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #4fdd99;
    font-family: "dongle";
`;

const LayoutNav = () => {
    return (
        <LayoutNavWrapper>
            <div>
                <button style={{ fontFamily: "dongle" }}>Hugo</button>
            </div>
            <div>
                <button>스택</button>
            </div>
            <div>
                <button>경력</button>
            </div>
            <div>
                <button>연락하기</button>
            </div>
        </LayoutNavWrapper>
    );
};

export default LayoutNav;