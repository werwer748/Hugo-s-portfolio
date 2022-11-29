import React, { ReactNode } from "react";
import styled from "styled-components";
import LayoutHeader from "./LayoutHeader";
import LayoutNav from "./LayoutNav";

const LayoutWrapper = styled.div`
    width: 100%;
`;

interface IProps {
    children: ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <LayoutWrapper>
            <LayoutHeader />
            <LayoutNav />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;