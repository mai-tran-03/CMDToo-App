import React, { useState, useEffect } from 'react';
import qs from './questions.json';
import CustomButton from './CustomButton.js';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import {
    ScrollStyledView,
    ParentGuideContainer,
    ViewHeading,
    ViewBy
} from './StyledView';
import { StandardTextbox, InterpretationTextBox } from './CustomTextbox';

const SearchBar = styled.TextInput`
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    font-size: 13px;
    font-family: Avenir;
    line-height: 18px;
    align-self: stretch;
    margin: 0 20px;
    padding: 5px 30px 5px 10px;
    z-index: 2;
`;

export const StyledView = styled.View``;

const AutoMatch = styled.Text`
    padding-left: 15px;
    margin: 7.5px 0;
    font-size: 20px;
    font-size: 13px;
    font-family: Avenir;
    line-height: 18px;
    align-content: center;
`;

const MatchBorder = styled.View`
    border-top-color: black;
    border-top-width: 1px;
`;

const StyledList = styled.FlatList`
    background-color: white;
    margin: 0 23px;
    margin-top: -2px
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const SearchBarContainer = styled.View`
    width: 100%;
    margin: 15px 0px;
`;

const TextContainerParentGuide = styled.View`
    margin-top: 10px;
`;

const InformationContainer = styled.View`
    margin-bottom: 20px;
`;

const SearchBarComponent = () => {
    const [input, setInput] = useState('');
    useEffect(() => {
        setOutput(find(input));
    }, [input]);
    const [past, setPast] = useState({});
    const [output, setOutput] = useState('');

    const find = str_to_match => {
        if (!str_to_match) return [];
        let prev = str_to_match.slice(0, -1).toLowerCase();
        let options;

        if (prev.length > 0 && prev in past) {
            options = qs.filter(q => past[prev].includes(q.Question));
        } else {
            options = qs;
        }
        let reg_ex = new RegExp(str_to_match, 'i');
        let auto_complete = new Set();
        let matches = new Set(
            options.filter(o => {
                let question =
                    o.Question.match(reg_ex) && auto_complete.add(o.Question);
                let category =
                    o.Category.match(reg_ex) && auto_complete.add(o.Category);
                let group = o.Group.match(reg_ex) && auto_complete.add(o.Group);
                let follow =
                    o['Follow Up'].length > 0 &&
                    o['Follow Up'].reduce(
                        (bool, q) =>
                            (q.match(reg_ex) && auto_complete.add(q)) || bool,
                        false
                    );
                return question || category || group || follow;
            })
        );
        setPast(prevState => ({
            ...prevState,
            [str_to_match.toLowerCase()]: [...matches].map(m => m.Question)
        }));
        return [...auto_complete];
    };
    return (
        <SearchBarContainer>
            <StatusBar style="light" />
            <SearchBar
                placeholder="Search by specific question"
                onChangeText={setInput}
                onEndEditing={() => setOutput('')}
                returnKeyType="search"
                onSubmitEditing={event => {
                    console.log(event.nativeEvent.text);
                }}
                clearButtonMode="while-editing"
            />
            <StyledList
                data={output.slice(0, 7)}
                keyExtractor={q => q}
                extraData={output}
                renderItem={({ item }) => (
                    <MatchBorder>
                        <AutoMatch>{`${item}`}</AutoMatch>
                    </MatchBorder>
                )}
            />
        </SearchBarContainer>
    );
};

const ButtonComponentsDisplay = buttonObjects => {
    let list = [];
    buttonObjects.forEach(buttonObject => {
        list.push(
            <CustomButton
                text={buttonObject.text}
                color={buttonObject.color}
                isVeryBig={true}
                onPress={() =>
                    buttonObject.navigation.navigate(
                        buttonObject.onPressDestinatoin
                    )
                }
            />
        );
    });
    return list;
};

export const ParentGuideByCategory = ({ navigation }) => {
    const isCategory = true;
    const mockData = [
        {
            Question: 'What is your love language?',
            Category: 'The Inner Me',
            Interpretation:
                'What can you do as a parent to nurture this? How can you better support your child?',
            Group: "How to Nurture Your Child's Feelings/Interests",
            'Follow Up': ''
        },
        {
            Question: 'What is your passion career?',
            Category: 'My Bright Future',
            Interpretation:
                'This could be an indication of what inspires your child.',
            Group: "How to Nurture Your Child's Feelings/Interests",
            'Follow Up': 'Do you like x, y or z about this career?'
        },
        {
            Question: 'What makes you feel loved?',
            Category: 'The Inner Me',
            Interpretation:
                'What can you do as a parent to nurture this? How can you better support your child?',
            Group: "How to Nurture Your Child's Feelings/Interests",
            'Follow Up': ''
        }
    ];

    const buttonComponents = [];
    mockData.forEach(data => {
        buttonComponents.push({
            text: data.Question,
            color: data.Category.toLowerCase(),
            onPressDestinatoin: 'ParentGuideInformation',
            navigation: navigation
        });
    });
    const headingText = isCategory
        ? mockData[0].Category.toLowerCase()
        : mockData[0].Group.toLowerCase();
    return (
        <ParentGuideContainer>
            {SearchBarComponent()}
            <ViewHeading> View By: </ViewHeading>
            <ViewBy> {headingText} </ViewBy>
            <ScrollStyledView>
                {ButtonComponentsDisplay(buttonComponents)}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

export const ParentGuide = ({ navigation }) => {
    const groupInterpretationTopics = [
        {
            text: "How to Nuture Your Child's Feelings & Interests",
            color: 'CMDTurquoise',
            onPressDestinatoin: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'Things That Upset Your Child',
            color: 'CMDTurquoise',
            onPressDestinatoin: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: "Child's Interests",
            color: 'CMDTurquoise',
            onPressDestinatoin: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: "People/Places/Things That Have Meaning in Your Child's Life",
            color: 'CMDTurquoise',
            onPressDestinatoin: 'ParentGuideByCategory',
            navigation: navigation
        }
    ];
    return (
        <ParentGuideContainer>
            {SearchBarComponent()}
            <ViewHeading> View By: </ViewHeading>
            <ViewBy editable={false}>grouped interpretation</ViewBy>
            <ScrollStyledView directionalLockEnabled={true}>
                {ButtonComponentsDisplay(groupInterpretationTopics)}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

export const ParentGuideInformation = ({ navigation }) => {
    const mockData = {
        Question: 'What is your love language?',
        Category: 'The Inner Me',
        Interpretation:
            'What can you do as a parent to nurture this? How can you better support your child?',
        Group: "How to Nurture Your Child's Feelings/Interests",
        'Follow Up': ''
    };
    const category = mockData.Category;
    const question = mockData.Question;
    const interpretation = mockData.Interpretation;
    const group = mockData.Group;
    const color = category.toLowerCase();
    return (
        <ParentGuideContainer>
            <ScrollStyledView>
                <InformationContainer>
                    <StandardTextbox
                        text={category}
                        color={color}
                    ></StandardTextbox>

                    <TextContainerParentGuide>
                        <StandardTextbox
                            text={question}
                            color={color}
                        ></StandardTextbox>
                    </TextContainerParentGuide>
                    <InterpretationTextBox
                        interpretationText={interpretation}
                        groupText={group}
                        color={color}
                    ></InterpretationTextBox>
                    <CustomButton
                        text="parent tips"
                        color={color}
                        isBig={true}
                        onPress={() => navigation.navigate('nothing')}
                    />
                </InformationContainer>
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};
