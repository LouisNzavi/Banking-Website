import styled from "styled-components";

import { Link } from "react-scroll";

//reusable button so as to avoid creating new buttons on every new component 

export const Button = styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary ? "#fb8500" : "#010606")}
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#010606" : "#fff")}
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fb8500" : "#fff")}
}
`;

//button not showing on the main hero section when hover, it's there but...
//background: ${({ primary }) => (primary ? "#ffff" : "#fb8500")}
