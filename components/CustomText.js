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

const CountContainer = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 20px;
    padding-left: 5px;
    padding-top: 5px;
    margin-bottom: 10px;
`;

const Count = styled.Text`
    color: ${props => props.theme.colors.CMDWhite};
    font-size: 30px;
    font-weight: bold;
`;

const InnerTextContainer = styled.View`
    margin: 50px 20px;
`;

export const CustomText = ({ text, color, count }) => (
    <TextContainer color={color}>
        <CountContainer color={color}>
            <Count>{count}.</Count>
        </CountContainer>
        <InnerTextContainer>
            <StandardText>{text}</StandardText>
        </InnerTextContainer>
    </TextContainer>
);
