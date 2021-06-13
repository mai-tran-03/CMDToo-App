import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    /* padding-vertical: 15px;*/
    margin-vertical: 10px;
    margin-horizontal: 20px;
    max-height: 75px;
    flex-grow: 100;

    justify-content: center;
`;

const CustomButton = ({ text, color, ...others }) => (
    <ButtonContainer
        color={others.disabled ? 'grey' : color}
        onPress={others.onPress}
        disabled={others.disabled}
    >
        <StandardText>{text}</StandardText>
    </ButtonContainer>
);

export default CustomButton;
