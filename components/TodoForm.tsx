import React, {FC, useState} from 'react'
import { TextInput, View, Button, Text, TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native';
import moment from "moment";

import {useDispatch} from 'react-redux';
import {setNewElemTodoList} from '../actions/todolistActions';
import { ISingleElementList } from '../entities/todoSingleEl';

type setNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

interface IswitchView {
  switchView(formView: boolean): any;
}

const TodoForm: FC<IswitchView> = props => {
  const dispatch = useDispatch();
 
  const [nameInput, setNameInput] = useState<string>('');
  const [descInput, setDescInput] = useState<string>('');

  const nameValueChange = (txt: any) => {
    setNameInput(txt.nativeEvent.text);
  }

  const descValueChange = (txt: any) => {
    setDescInput(txt.nativeEvent.text);
  }

  const saveDate = () => {
    if(nameInput != "" && descInput != "") {
      dispatch<setNewElemTodoList>(setNewElemTodoList({
        name: nameInput,
        desc: descInput,
        id: Date.now(),
        date: Date.now(),
        checked: false
      } as ISingleElementList
      ));
      props.switchView(false);
    }
    else {
      Alert.alert(
        'Empty Input',
        'Please fill in all inputs.',
        [
          {text: 'OK'},
        ],
      )}
  }

  const cancelAdd = () => {
    props.switchView(false);
  }

  return (
    <View>
          <ContainerView>

             <CustomText>Today is {moment().format("MM/DD/YYYY HH:mm")}</CustomText>
              <CustomInputView>
                <CustomInput value={nameInput} onChange={nameValueChange} placeholder= "Name" />
              </CustomInputView>
              <CustomInputView>
                <CustomInput value={descInput} onChange={descValueChange} placeholder="Description" multiline/>
              </CustomInputView>
                
        <CustomButton onPress={saveDate}>
            <CustomButtonText>Add</CustomButtonText>
        </CustomButton>

        <CustomButton onPress={cancelAdd}>
            <CustomButtonText>Cancel</CustomButtonText>
        </CustomButton>

        </ContainerView>
    </View>
  )
};

const ContainerView = styled.View`
  alignItems: center;
  justifyContent: center;
  marginTop: 75%;
`;

const CustomInputView = styled.View`
  backgroundColor: #FFFFFF;
  borderRadius: 30px;
  width:250px;
  height:45px;
  marginBottom:20px;
  flexDirection: row;
  alignItems: center;
`;

const CustomInput = styled.TextInput`
    height:45px;
    marginLeft:16px;
    flex:1;
`;

const CustomText = styled.Text`
  margin: 10px;
  fontSize: 16px;
`;

const CustomButton = styled.TouchableOpacity`
  height: 45px;
  width: 250px;
  borderRadius: 30px;
  justifyContent: center;
  alignItems: center;
  backgroundColor:#333;
  margin: 10px;
`

const CustomButtonText = styled.Text`
  fontSize: 16px;
  textTransform: uppercase;
  color: #FFFFFF;
`



export default TodoForm