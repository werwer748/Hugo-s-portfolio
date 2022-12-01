import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const LayoutNavWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #4fdd99;
    font-family: "dongle";
    display: flex;
    justify-content: center;
    align-items: center;

    >nav {
        width: 90%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        >div {
            width: 25%;
            height: 100%;
            font-size: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const NavButton = styled(Link)<{ selected: boolean }>`
    text-decoration: none;
    color: ${(props) => props.selected ? 'orange' : 'white'};
`;

const LayoutNav = () => {
    const [nowPage, setNowPage] = useState('intro');

    const clickLink = useCallback((page: string) => {
        setNowPage(page);
    }, [nowPage]);

    return (
        <LayoutNavWrapper>
                {nowPage &&
            <nav>
                <div>
                    <NavButton
                        to="/"
                        selected={nowPage === 'intro'}
                        onClick={() => clickLink('intro')}
                    >
                        Hugo
                    </NavButton>
                </div>
                <div>
                    <NavButton
                        to="/Stack"
                        selected={nowPage === 'stack'}
                        onClick={() => clickLink('stack')}
                    >
                        스택
                    </NavButton>
                </div>
                <div>
                    <NavButton
                        to="/Career"
                        selected={nowPage === 'career'}
                        onClick={() => clickLink('career')}
                    >
                        경력
                    </NavButton>
                </div>
                <div>
                    <NavButton
                        to="/SendEmail"
                        selected={nowPage === 'sendemail'}
                        onClick={() => clickLink('sendemail')}
                    >
                        메일보내기
                    </NavButton>
                </div>
            </nav>
                }
        </LayoutNavWrapper>
    );
};

export default LayoutNav;