import React from 'react';
import styled from 'styled-components/native';
import { StandardText, CategoryText } from './CustomTextbox.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};
    border-radius: 20px;
    margin-vertical: 10px;
    margin-horizontal: 20px;
    max-height: 75px;
    flex-grow: 100;

    justify-content: center;
`;

const SmallButtonContainer = styled(ButtonContainer)`
    margin-horizontal: 5px;
`;

const BigButtonContainer = styled(ButtonContainer)`
    min-height: 75px;
`;

const VeryBigButtonContainer = styled(ButtonContainer)`
    min-height: 150px;
    max-height: null;
    min-width: 90%;
    max-width: 90%;
    padding: 20px 30px;
`;

const CategoryButtonContainer = styled(ButtonContainer)`
    min-height: 64px;
    width: 288px;
    margin-horizontal: 0;
    flex-direction: row;
    align-items: center;
`;

const WarningText = styled.Text`
    color: #ffffff;
    position: absolute;
    right: 5%;
    bottom: 3%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
`;

const CustomButton = ({
    text,
    color,
    warningText,
    isSmall = false,
    isBig = false,
    isVeryBig = false,
    isCategory = false,
    ...others
}) => {
    if (isSmall) {
        return (
            <SmallButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText color={color}>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </SmallButtonContainer>
        );
    } else if (isBig) {
        return (
            <BigButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText color={color}>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </BigButtonContainer>
        );
    } else if (isVeryBig) {
        return (
            <VeryBigButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText color={color}>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </VeryBigButtonContainer>
        );
    } else if (isCategory) {
        return (
            <CategoryButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
                style={{ boxSizing: 'border-box' }}
            >
                <CategoryText color={color}>{text}</CategoryText>
            </CategoryButtonContainer>
        );
    } else {
        return (
            <ButtonContainer
                color={others.disabled ? 'grey' : color}
                onPress={others.onPress}
                disabled={others.disabled}
            >
                <StandardText color={color}>{text}</StandardText>
                {warningText !== undefined ? (
                    <WarningText>{warningText}</WarningText>
                ) : (
                    <WarningText></WarningText>
                )}
            </ButtonContainer>
        );
    }
};

export default CustomButton;
