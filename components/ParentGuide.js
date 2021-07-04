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

const StyledMargin = styled.View`
    width: 100%;
    position: absolute;
    top: 27px;
    left: 0;
    z-index: 1;
`;

const StyledList = styled.FlatList`
    background-color: white;
    background-color: white;
    margin: 0 23px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export function ParentGuide({ navigation }) {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    useEffect(() => {
        setOutput(find(input));
    }, [input]);

    const [past, setPast] = useState({});

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
        let matches = new Set(
            options.filter(
                o =>
                    o.Question.match(reg_ex) ||
                    o.Category.match(reg_ex) ||
                    o.Group.match(reg_ex) ||
                    (o['Follow Up'].length > 0 &&
                        o['Follow Up'].reduce(
                            (bool, q) => q.match(reg_ex) || bool,
                            false
                        ))
            )
        );
        setPast(prevState => ({
            ...prevState,
            [str_to_match.toLowerCase()]: [...matches].map(m => m.Question)
        }));
        return [...matches];
    };

    return (
        <ParentGuideContainer>
            <StatusBar style="light" />
            <SearchBar
                placeholder="Search by specific question"
                onChangeText={setInput}
            />
            <StyledMargin>
                <StyledList
                    data={output.slice(0, 5)}
                    keyExtractor={q => q.Question}
                    extraData={output}
                    renderItem={({ item }) => (
                        <MatchBorder>
                            <AutoMatch>{`${item.Question}`}</AutoMatch>
                        </MatchBorder>
                    )}
                />
            </StyledMargin>
            <ViewHeading> View By: </ViewHeading>
            <ViewBy editable={false}>grouped interpretation</ViewBy>
            <StyledView>
                <ScrollStyledView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomButton
                        text="How to Nuture Your Child's Feelings & Interests"
                        color="CMDTurquoise"
                        isVeryBig={true}
                    />
                    <CustomButton
                        text="Things That Upset Your Child"
                        color="CMDTurquoise"
                        isVeryBig={true}
                    />
                    <CustomButton
                        text="Child's Interests"
                        color="CMDTurquoise"
                        isVeryBig={true}
                    />
                    <CustomButton
                        text="People/Places/Things That Have Meaning in Your Child's Life"
                        color="CMDTurquoise"
                        isVeryBig={true}
                    />
                </ScrollStyledView>
            </StyledView>
        </ParentGuideContainer>
    );
}
