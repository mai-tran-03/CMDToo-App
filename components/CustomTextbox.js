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

const SmallerTextboxContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-horizontal: 20px;
    justify-content: center;
    padding: 20px 40px;
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

export const SmallerStandardText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
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

export const SmallerBoldText = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
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

const ParentGuideContainer = styled.View`
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-top: 10px;
    margin-horizontal: 20px;
    justify-content: ${props =>
        props.length > 1
            ? props.length == 2
                ? 'space-around'
                : 'space-between'
            : 'center'};
    padding: ${props =>
        props.length > 1 ? '50px 40px 50px 40px' : '40px 40px'};
    min-height: ${props => (props.isScroll ? '500px' : '70%')};
`;

export const StandardTextbox = ({ text, color }) => (
    <TextboxContainer color={color}>
        <StandardText>{text}</StandardText>
    </TextboxContainer>
);

export const SmallerStandardTextbox = ({ text, color }) => (
    <SmallerTextboxContainer color={color}>
        <SmallerStandardText>{text}</SmallerStandardText>
    </SmallerTextboxContainer>
);

export const CardTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <StandardText key={index}>{text.toLowerCase()}</StandardText>
    ));

    return (
        <CardContainer length={textList.length} color={color}>
            {displayText}
        </CardContainer>
    );
};

export const ParentTipsTextbox = ({ textList, color }) => {
    const displayText = textList.map((text, index) => (
        <SmallerStandardText key={index}>{text}</SmallerStandardText>
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
    displayText.push(
        <SmallerBoldText key={index++}>{'INTERPRETATIONS'}</SmallerBoldText>
    );

    const splitInterpretationText = interpretationText.split('|');
    const splitGroupText = groupText.split('|');

    if (groupText == '' && interpretationText == '') {
        splitInterpretationText.push('no interpretation');
    }

    splitGroupText.forEach(text => {
        if (text != '') {
            displayText.push(
                <SmallerStandardText key={index++}>{text}</SmallerStandardText>
            );
        }
    });
    splitInterpretationText.forEach(text => {
        if (text != '') {
            displayText.push(
                <SmallerStandardText key={index++}>{text}</SmallerStandardText>
            );
        }
    });
    return (
        <ParentGuideContainer
            length={displayText.length}
            color={color}
            isScroll={isScroll}
        >
            {displayText}
        </ParentGuideContainer>
    );
};
