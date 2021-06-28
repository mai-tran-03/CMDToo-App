import React from 'react';
import CustomButton from './CustomButton.js';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import {
    StyledView,
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
`;

export function ParentGuide({ navigation }) {
    return (
        <ParentGuideContainer>
            <SearchBar placeholder="Search by specific question" />
            <ViewHeading> View By: </ViewHeading>
            <ViewBy> grouped interpretation </ViewBy>
            <View>
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
            </View>
        </ParentGuideContainer>
    );
}
