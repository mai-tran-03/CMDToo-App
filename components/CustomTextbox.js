import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const TextboxContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: center;
    padding: 20px 50px;
`;

const StandardText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const CardContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-vertical: 10px;
    margin-horizontal: 20px;
    justify-content: ${props => (props.length > 1 ? 'space-around' : 'center')};
    padding: 40px 50px;
    min-height: 70%;
`;

export const StandardTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <StandardText>{text}</StandardText>
    </TextboxContainer>
);

export const CardTextbox = ({ textList, color }) => {
    const displayText = textList.map(text => (
        <StandardText>{text}</StandardText>
    ));
    return (
        <CardContainer length={textList.length} color={color}>
            {displayText}
        </CardContainer>
    );
};
