import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native';

function About() {
  return (
    <ContainerView>
      <ScrollView>
        <BodyContentView>
        
          <CustomView>
          <CustomImageLeft source={require('../assets/images/img1.jpg')} />
          <CustomTextRight>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae dui et massa faucibus dignissim. 
          Donec mauris lorem, interdum vitae arcu vel, viverra ullamcorper dolor. Quisque porta bibendum nibh ac condimentum. 
          Ut non ligula nec massa consequat congue. Nam porttitor odio eu velit faucibus, in maximus purus iaculis. 
          </CustomTextRight>
          </CustomView>

          <CustomView>
          <CustomTextLeft>
          Sed eget dapibus sapien, sed volutpat libero. Aliquam erat volutpat. Vivamus sed est maximus, posuere ligula ac, 
          faucibus libero. Ut iaculis ex sit amet metus sodales, non interdum augue dictum. Mauris nec maximus mi. 
          Donec eget facilisis erat. In rutrum suscipit tempus.
          Nunc vel lacus et mauris congue venenatis. Pellentesque malesuada ligula non ante pulvinar tempus. 
          In egestas commodo tincidunt. In non libero porttitor, tristique lectus et, euismod tellus. Ut laoreet arcu nisi, 
          vitae vestibulum mi vehicula nec. Sed mattis interdum justo et vulputate. Etiam eu enim egestas, mollis sapien sed, finibus nulla. 
          </CustomTextLeft>
          <CustomImageRight source={require('../assets/images/img2.jpg')} />
          </CustomView>

          <CustomView>
          <CustomImageLeft source={require('../assets/images/img3.jpg')} />
          <CustomTextRight>
          Etiam condimentum, nisi vel varius sodales, purus lacus maximus quam, non tincidunt mi enim non elit. Aenean sem augue, 
          ultrices vel auctor eu, blandit nec tellus. Ut at lorem congue, aliquam dui ac, accumsan lorem. Aenean in ante nunc.
          Etiam condimentum, nisi vel varius sodales, purus lacus maximus quam, non tincidunt mi enim non elit. Aenean sem augue, 
          ultrices vel auctor eu, blandit nec tellus. Ut at lorem congue, aliquam dui ac, accumsan lorem. Aenean in ante nunc.
          Etiam condimentum, nisi vel varius sodales, purus lacus maximus quam, non tincidunt mi enim non elit. Aenean sem augue, 
          ultrices vel auctor eu, blandit nec tellus. Ut at lorem congue, aliquam dui ac, accumsan lorem. Aenean in ante nunc.
          </CustomTextRight>
          </CustomView>

          <CustomView>
          <CustomTextLeft>
          Sed eget dapibus sapien, sed volutpat libero. Aliquam erat volutpat. Vivamus sed est maximus, posuere ligula ac, 
          faucibus libero. Ut iaculis ex sit amet metus sodales, non interdum augue dictum. Mauris nec maximus mi. 
          Donec eget facilisis erat. In rutrum suscipit tempus.
          Nunc vel lacus et mauris congue venenatis. Pellentesque malesuada ligula non ante pulvinar tempus. 
          In egestas commodo tincidunt. In non libero porttitor, tristique lectus et, euismod tellus. Ut laoreet arcu nisi, 
          vitae vestibulum mi vehicula nec. Sed mattis interdum justo et vulputate. Etiam eu enim egestas, mollis sapien sed, finibus nulla. 
          </CustomTextLeft>
          <CustomImageRight source={require('../assets/images/img4.jpg')} />
          </CustomView>

        </BodyContentView>
      </ScrollView>
    </ContainerView>
  )
}

const ContainerView = styled.View`
  background-color: #ebebeb;
  marginTop: 16px;
`;
const BodyContentView = styled.View`
  flex: 2;
  padding: 30px;
  flex-direction: column;
  alignItems: stretch;
`;
const CustomView = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  marginBottom:32px;
`
const CustomTextLeft = styled.Text`
  width: 60%; 
  margin-right: 16px;
`
const CustomTextRight = styled.Text`
  width: 60%; 
  margin-left: 16px;
`
const CustomImageLeft = styled.Image`
  width: 128px;
  height: 128px;
  borderRadius: 64px;
  border: black;
  borderWidth: 3px;
`;
const CustomImageRight = styled.Image`
  width: 128px;
  height: 128px;
  borderRadius: 64px;
  borderColor: black;
  borderWidth: 3px;
`;

export default About