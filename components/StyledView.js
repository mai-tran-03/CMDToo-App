import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const ScrollStyledView = styled.ScrollView`
    margin: 3px 0;
`;

export const BigScrollStyledView = styled.ScrollView`
    margin-bottom: 30px;
`;

export const HowToPlayContainer = styled.View`
    padding-top: 20%;
    padding-bottom: 10%;
    min-width: 100%;
`;

export const ParentGuideContainer = styled.View`
    flex-shrink: 1;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;

export const AppName = styled.Text`
    font-size: 35px;
`;

export const AppDesc = styled.Text`
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 18px;
`;

export const CategoryHeader = styled.Text`
    font-size: 35px;
    min-height: 50px;
    align-items: flex-start;
    font-family: Avenir;
`;

export const ParentTipsHeaderContainer = styled.View`
    margin-top: 30px;
`;

export const ParentTipsHeader = styled.Text`
    align-self: stretch;
    font-size: 25px;
    min-height: 50px;
    text-align: center;
    font-family: Avenir;
`;

export const ViewBy = styled.TextInput`
    flex-direction: row;
    align-self: stretch;
    margin: 0 20px;
    padding: 20px 0;
    font-size: 28px;
    font-weight: 800;
    justify-content: flex-start;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-left-width: 0px;
    border-right-width: 0px;
`;

export const ViewHeading = styled.Text`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    margin: 18px 20px 5px 20px;
    font-size: 18px;
`;

export const AutoMatch = styled.Text`
    padding-left: 15px;
    margin: 7.5px 0;
    font-size: 20px;
    font-size: 13px;
    font-family: Avenir;
    line-height: 18px;
    align-content: center;
`;

export const ParentTipsContainer = styled.View`
    flex-shrink: 1;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    min-height: 100%;
`;
