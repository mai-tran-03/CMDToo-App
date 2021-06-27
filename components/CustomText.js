import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';

const TextContainer = styled.View`
    align-self: stretch;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 20px;
    /* padding-vertical: 15px;*/
    margin-vertical: 10px;
    margin-horizontal: 20px;
    flex: 0.1;
    justify-content: center;
    min-height: 150px;
`;

const Count = styled.Text`
    position: absolute;
    top: 6px;
    left: 6px;
    color: ${props => props.theme.colors.CMDWhite};
`;

export const CustomText = ({ text, color, count }) => (
    <TextContainer color={color}>
        <Count>{count}.</Count>
        <StandardText>{text}</StandardText>
    </TextContainer>
);
