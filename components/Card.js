import React, {useState} from 'react';
import { CardTextbox, StandardTextbox } from './CustomTextbox.js';
import CustomButton from './CustomButton.js';
import styled from 'styled-components/native';

const question_car = 'What would you do?';
const normal_standardtext = ['Do your favorite silly dance for 1 minute'];
const multiple_texts = [
    "How to Nurture Your Child's Feelings",
    'Interests',
    "Child's Interests"
];
const newline_text = [
    "Company: Your child values structure/rules.\nEntrepreneur: Your child's creative side needs to be nurtured and explored"
];
const long_text = [
    'If your child lists people they know, they might be people that your child wants to spend more time with. If they are celebrities/public figures, your child probably looks up to them or sees positive attributes in those people'
];

const CardView = styled.View`
    display: flex;
    justify-content: flex-start;
`;

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100px;
`;

const Card = ({ category, question, color, hasFollowUp, setModalVisible, setOptions}) => {
    const textList = [question.Question || question];
    const [followUp] = useState(<Card  category={category}
                                question={question['Follow Up']}
                                color={color}
                                hasFollowUp={false}
                                setModalVisible={setModalVisible}
                                setOptions={setOptions}
                            ></Card>);
    return (
        <CardView>
            <StandardTextbox text={category} color={color} />
            <CardTextbox textList={textList} color={color} />
            {hasFollowUp ? (
                <ButtonContainer>
                    <CustomButton text="done" color={color} onPress={() => setModalVisible(false)}></CustomButton>
                    <CustomButton text="follow up" color={color} onPress={() => setOptions(followUp) }></CustomButton>
                </ButtonContainer>
            ) : (
                <CustomButton text="done" color={color} onPress={() => setModalVisible(false)}></CustomButton>
            )}
        </CardView>
    );
};

export default Card;