import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';

const ButtonContainer = styled.View`
    align-self: stretch;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 20px;
    /* padding-vertical: 15px;*/
    margin-vertical: 10px;
    margin-horizontal: 30px;
    flex: 0.1;
    justify-content: center;
`;

const Count = styled.Text`
    position: absolute;
    top: 6px;
    left: 6px;
    color: ${props => props.theme.colors.CMDWhite};
`;

export const CustomText = ({ text, color, count }) => (
    <ButtonContainer color={color}>
        <Count>{count}.</Count>
        <StandardText>{text}</StandardText>
    </ButtonContainer>
);
