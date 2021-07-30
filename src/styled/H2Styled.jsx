//combinando react con style component
import React from 'react';
import styled from 'styled-components';
//creando componente que recibe prop
const StyledH2 = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    margin: 1em 0 0 0;
    color: #a8324e;
    letter-spacing: 3px;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;