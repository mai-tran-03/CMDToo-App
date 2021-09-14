import React from 'react';
import styled from 'styled-components/native';
import { StandardText } from './CustomTextbox.js';
import { CATEGORY, ICONTYPE } from './Constants.js';
import { pickIconToDisplay } from './Icon.js';

const ButtonContainer = styled.TouchableOpacity`
    align-self: stretch;
    justify-content: center;
    border-radius: 20px;
    ${props =>
        props.marginVertical
            ? `margin-vertical: ${props.marginVertical}};`
            : 'margin-vertical: 10px;'};
    flex-grow: 100;

    background-color: ${props =>
        props.theme.colors[props.color] || props.theme.colors.error};

    margin-horizontal: ${props =>
        props.horizontalMargin ? `${props.horizontalMargin}` : '25px'};

    ${props =>
        props.maxHeight
            ? `max-height: ${props.maxHeight};`
            : 'padding: 10px 20px;'};

    ${props => (props.minHeight ? `min-height: ${props.minHeight}};` : '')};
    ${props => (props.height ? `height: ${props.height}};` : '')};
`;

const WarningText = styled.Text`
    color: ${props =>
        props.categoryName === CATEGORY.BRIGHTFUTURE
            ? props.theme.colors['CMDPink']
            : 'white'};
    position: absolute;
    left: 5%;
    bottom: 3%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
`;

const CustomButton = ({
    text,
    color,
    warningText,
    minHeight,
    maxHeight,
    onPress,
    displayIcon,
    horizontalMargin,
    fontWeight,
    fontSize,
    lineHeight,
    height,
    marginVertical,
    ...others
}) => {
    return (
        <ButtonContainer
            color={others.disabled ? 'grey' : color}
            onPress={onPress}
            disabled={others.disabled}
            maxHeight={maxHeight}
            height={height}
            minHeight={minHeight}
            horizontalMargin={horizontalMargin}
            marginVertical={marginVertical}
        >
            <StandardText
                color={color}
                style={{
                    fontWeight: fontWeight ? fontWeight : '900',
                    fontSize: fontSize ? fontSize : 23,
                    lineHeight: lineHeight ? lineHeight : 41
                }}
            >
                {text}
            </StandardText>

            {warningText && (
                <WarningText categoryName={color}>{warningText}</WarningText>
            )}
            {displayIcon &&
                pickIconToDisplay(color, ICONTYPE.PLAYPAGE, others.disabled)}
        </ButtonContainer>
    );
};

export default CustomButton;
