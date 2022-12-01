import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LayoutHeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

const HeaderProfile = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }

    >div {
        width: 100%;
        border-radius: 50%;
        background: linear-gradient(90deg, rgb(34,193,195) 0%, rgb(253,187,45) 100%);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: 2s linear infinite rotate;
    }
    >img {
        width: 80%;
        height: 80%;
        position: absolute;
        z-index: 100;
        border-radius: 50%;
        object-fit: contain;
    }

    >div:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`;

const HeaderTitle = styled.div<{ time: number }>`
    width: 85%;
    font-family: "gugi";
    font-weight: bold;
    font-size: 5rem;
    letter-spacing: 0.5rem;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0,0,0,0.2));
`;

const LayoutHeader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter > 14) {
            setCounter(0);
            return;
        }
        const titleTimer: number = window.setTimeout(() => {
            setCounter((prev) => prev + 1);
        }, 1500);

        return () => {
            clearTimeout(titleTimer);
        }
    }, [counter]);

    return (
        <LayoutHeaderWrapper>
            <HeaderProfile>
                <div />
                <img src="/assets/image/profile.jpg" alt="hugo profile"/>
            </HeaderProfile>
            <HeaderTitle time={counter}>
                {`HUGO'S PORTFOLIO`}
            </HeaderTitle>
        </LayoutHeaderWrapper>
    );
};

export default LayoutHeader;