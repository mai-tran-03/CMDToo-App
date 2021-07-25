import React, { useState } from 'react';
import {
    CardTextbox,
    SmallerStandardTextbox,
    StandardTextbox
} from './CustomTextbox.js';
import CustomButton from './CustomButton.js';
import styled from 'styled-components/native';
import { BigScrollStyledView } from './StyledView.js';

const CardView = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 7%;
    min-width: 95%;
`;

const TwoButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin-horizontal: 15px;
`;

const Card = ({
    category,
    question,
    color,
    hasFollowUp,
    setModalVisible,
    setOptions
}) => {
    const textList = [question.Question || question];
    const [followUp] = useState(
        <Card
            category={category}
            question={question['Follow Up']}
            color={color}
            hasFollowUp={false}
            setModalVisible={setModalVisible}
            setOptions={setOptions}
        ></Card>
    );
    return (
        <CardView>
            <BigScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
            >
                <StandardTextbox text={category.toLowerCase()} color={color} />

                <CardTextbox textList={textList} color={color} />
                {hasFollowUp ? (
                    <TwoButtonContainer>
                        <CustomButton
                            text="done"
                            color={color}
                            onPress={() => setModalVisible(false)}
                            isSmall={true}
                        ></CustomButton>
                        <CustomButton
                            text="follow up"
                            color={color}
                            onPress={() => setOptions(followUp)}
                            isSmall={true}
                        ></CustomButton>
                    </TwoButtonContainer>
                ) : (
                    <CustomButton
                        text="done"
                        color={color}
                        onPress={() => setModalVisible(false)}
                        isBig={true}
                    ></CustomButton>
                )}
            </BigScrollStyledView>
        </CardView>
    );
};

export default Card;
