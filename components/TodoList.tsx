import React, { FC, useState} from 'react';
import { Text, View, Button, TouchableOpacity, CheckBox, ScrollView  } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import moment from "moment";

import {IState} from '../reducers';
import {ITodoListReducer} from '../reducers/todolistReducer';
import {toggleElemTodoList, removeElemTodoList } from '../actions/todolistActions';

import {ISingleElementList} from '../entities/todoSingleEl';

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

type toggleElemTodoList = ReturnType<typeof toggleElemTodoList>;
type removeElemTodoList = ReturnType<typeof removeElemTodoList>;


interface IswitchView {
    switchView(formView: boolean): any;
}

const TodoList: FC<IswitchView> = props => {
    const dispatch = useDispatch();

    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const goToForm = () => {
        props.switchView(true);
    }

const checkBoxPress = (item: ISingleElementList): void => {
    dispatch(toggleElemTodoList(item));  
}

const DeletePress = (item: ISingleElementList): void => {
    dispatch(removeElemTodoList(item));  
}


    return (
        <ScrollView>
        <ContainerView>

        <CustomButton onPress={goToForm}>
            <CustomButtonText>Add New One</CustomButtonText>
        </CustomButton>

        {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
            <SingleElList key={index}>

                <TextDate>{moment(elem.date).format("MM/DD/YYYY HH:mm")}</TextDate>

                <SingleElListMainView>

                <TouchableOpacity onPress={() => checkBoxPress(elem)}>
                    <CustomIconLeft>
                        {elem.checked===false ? 
                        (
                            <MaterialCommunityIcon name="checkbox-blank-outline" size={32} />
                        ) : (
                            <MaterialCommunityIcon name="checkbox-marked" size={32} />  
                        )}
                    </CustomIconLeft>
                </TouchableOpacity>
         
                <TextName>{elem.name}</TextName>
                <TouchableOpacity onPress={() => DeletePress(elem)}>
                    <CustomIconRight>
                        <MaterialCommunityIcon name="delete" size={32} />
                    </CustomIconRight>
                </TouchableOpacity>
               </SingleElListMainView>
                    
                <Text>{elem.desc}</Text>

            </SingleElList> 
        )}
        </ContainerView>
        </ScrollView>
    )
};

const ContainerView = styled.View`
  alignItems: stretch;
  justifyContent: center;
  marginTop: 32px;
`;

const SingleElList = styled.View`
    flexDirection: column;
    border: 1px solid black;
    margin: 25px;
`;
const SingleElListMainView = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;
const CustomButton = styled.TouchableOpacity`
  height: 45px;
  width: 250px;
  borderRadius: 30px;
  justifyContent: center;
  alignItems: center;
  backgroundColor:#333;
  margin: 10px;
  alignSelf: center;
`
const CustomButtonText = styled.Text`
  fontSize: 16px;
  textTransform: uppercase;
  color: #FFFFFF;
`
const CustomIconLeft = styled.View`
    alignSelf: flex-start;
`
const CustomIconRight = styled.View`
    alignSelf: flex-end;
`
const TextDate = styled.Text`
    alignSelf: center;
`
const TextName = styled.Text`
    fontWeight: bold;
    fontSize: 16px;
`

export default TodoList;