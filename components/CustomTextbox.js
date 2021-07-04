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
    min-width: 90%;
`;

export const StandardText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const BoldText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
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
    margin-top: 10px;
    margin-horizontal: 20px;
    justify-content: ${props => (props.length > 1 ? 'space-around' : 'center')};
    padding: 40px 50px;
    min-height: ${props => (props.isScroll ? '500px' : '70%')};
`; // margin-bottom is added by ButtonContainer

export const StandardTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <StandardText>{text}</StandardText>
    </TextboxContainer>
);

export const CardTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <StandardText key={index}>{text}</StandardText>
    ));

    return (
        <CardContainer length={textList.length} color={color}>
            {displayText}
        </CardContainer>
    );
};

export const InterpretationTextBox = ({
    groupText,
    interpretationText,
    color,
    isScroll = true
}) => {
    let displayText = [];
    let index = 0;
    displayText.push(<BoldText key={index++}>{'INTERPRETATIONS'}</BoldText>);

    const splitInterpretationText = interpretationText.split('|');
    const splitGroupText = groupText.split('|');

    splitGroupText.forEach(text => {
        displayText.push(<StandardText key={index++}>{text}</StandardText>);
    });
    splitInterpretationText.forEach(text => {
        displayText.push(<StandardText key={index++}>{text}</StandardText>);
    });

    return (
        <CardContainer
            length={displayText.length}
            color={color}
            isScroll={isScroll}
        >
            {displayText}
        </CardContainer>
    );
};
