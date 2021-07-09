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
import { View } from 'react-native';

const StyledPress = styled.Pressable`
    align-self: stretch;
    position: relative;
`;
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
    margin-top: -2px;
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

const SearchBarComponent = ({ navigation }) => {
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
                    o.Question.match(reg_ex) &&
                    auto_complete.add({ text: o.Question, question: o });
                let category =
                    o.Category.match(reg_ex) &&
                    auto_complete.add({ text: o.Category, question: o });
                let group =
                    o.Group.match(reg_ex) &&
                    auto_complete.add({ text: o.Group, question: o });
                let follow =
                    o['Follow Up'].length > 0 &&
                    o['Follow Up'].reduce(
                        (bool, q) =>
                            (q.match(reg_ex) &&
                                auto_complete.add({ text: q, question: o })) ||
                            bool,
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
                onSubmitEditing={() => {
                    navigation.navigate('ParentGuideInformation', {
                        question: output[0].question
                    });
                }}
                clearButtonMode="while-editing"
            />
            <StyledList
                data={output.slice(0, 7)}
                keyExtractor={q => q.text}
                extraData={output}
                renderItem={({ item }) => (
                    <MatchBorder>
                        <AutoMatch
                            onPress={() =>
                                navigation.navigate('ParentGuideInformation', {
                                    question: item.question
                                })
                            }
                        >{`${item.text}`}</AutoMatch>
                    </MatchBorder>
                )}
            />
        </SearchBarContainer>
    );
};

const CategoryButtonDisplay = (buttonObjects, isGroup) => {
    let list = [];
    buttonObjects.forEach(buttonObject => {
        list.push(
            <CustomButton
                key={buttonObject.text}
                text={buttonObject.text}
                color={buttonObject.color}
                isVeryBig={true}
                onPress={() =>
                    buttonObject.navigation.navigate(
                        buttonObject.onPressDestination,
                        {
                            filter: buttonObject.text,
                            isGroup: isGroup
                        }
                    )
                }
            />
        );
    });
    return list;
};

const QuestionButtonDisplay = buttonObjects => {
    let list = [];
    buttonObjects.forEach(buttonObject => {
        list.push(
            <CustomButton
                key={buttonObject.text}
                text={buttonObject.text}
                color={buttonObject.color}
                isVeryBig={true}
                onPress={() =>
                    buttonObject.navigation.navigate(
                        buttonObject.onPressDestination,
                        {
                            question: buttonObject.data
                        }
                    )
                }
            />
        );
    });
    return list;
};

export const ParentGuideByCategory = ({ route, navigation }) => {
    const cat_filter = route.params.filter;
    const isGroup = route.params.isGroup;
    const buttonComponents = [];
    const questions = qs.filter(data =>
        isGroup
            ? data.Group === cat_filter
            : data.Category.toLowerCase() === cat_filter
    );
    questions.map(data =>
        buttonComponents.push({
            text: data.Question,
            color: data.Category.toLowerCase(),
            onPressDestination: 'ParentGuideInformation',
            navigation: navigation,
            data: data
        })
    );
    const headingText = isGroup
        ? questions[0].Group.toLowerCase()
        : questions[0].Category.toLowerCase();
    return (
        <ParentGuideContainer>
            {SearchBarComponent({ navigation })}
            <ViewBy editable={false}> {headingText} </ViewBy>
            <ScrollStyledView directionalLockEnabled={true}>
                {QuestionButtonDisplay(buttonComponents)}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

export const ParentGuide = ({ navigation }) => {
    const [isGroup, setIsGroup] = useState(false);
    const groupInterpretationTopics = [
        {
            text: "How to Nuture Your Child's Feelings & Interests",
            color: 'CMDTurquoise',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'Things That Upset Your Child',
            color: 'CMDTurquoise',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: "Child's Interests",
            color: 'CMDTurquoise',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: "People/Places/Things That Have Meaning in Your Child's Life",
            color: 'CMDTurquoise',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        }
    ];
    const categories = [
        {
            text: 'favorites',
            color: 'favorites',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'all about me',
            color: 'all about me',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'dance challenge',
            color: 'dance challenge',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'the inner me',
            color: 'the inner me',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'what would you do?',
            color: 'what would you do?',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        },
        {
            text: 'my bright future',
            color: 'my bright future',
            onPressDestination: 'ParentGuideByCategory',
            navigation: navigation
        }
    ];
    return (
        <ParentGuideContainer>
            {SearchBarComponent({ navigation })}
            <ViewHeading> View By: </ViewHeading>
            <StyledPress onPress={() => setIsGroup(!isGroup)}>
                <View pointerEvents="none">
                    <ViewBy editable={false}>
                        {isGroup ? 'grouped interpretations' : 'categories'}
                    </ViewBy>
                </View>
            </StyledPress>
            <ScrollStyledView directionalLockEnabled={true}>
                {CategoryButtonDisplay(
                    isGroup ? groupInterpretationTopics : categories,
                    isGroup
                )}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

export const ParentGuideInformation = ({ route, navigation }) => {
    const category = route.params.question.Category;
    const question = route.params.question.Question;
    const interpretation = route.params.question.Interpretation;
    const group = route.params.question.Group;
    const color = category.toLowerCase();
    return (
        <ParentGuideContainer>
            <ScrollStyledView directionalLockEnabled={true}>
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
                        onPress={() =>
                            console.log('Parent Tip not implemented')
                        }
                    />
                </InformationContainer>
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};
