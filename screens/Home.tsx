import React from 'react'
import styled from 'styled-components/native';

function Home() {
  return (
    <ContainerView>
      <HeaderView>
        <Avatar source={require('../assets/images/profilePic.jpg')} />
      </HeaderView>
      <BodyView>
        <BodyContentView>
          <NameText> Kamil Florek </NameText>
          <DescText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, quam vitae condimentum accumsan,   
            velit odio aliquam ligula, id tincidunt lorem neque a ex. Curabitur elementum tellus quis felis ultricies ullamcorper. 
            Praesent tristique fringilla nunc, at bibendum quam rhoncus commodo. Donec suscipit consequat consequat. 
            Suspendisse non vestibulum purus. Praesent consequat nibh nec elit accumsan, et dignissim lacus vulputate. 
            Nullam congue fermentum magna sit amet aliquam.
          </DescText>
        </BodyContentView>
      </BodyView>
      </ContainerView>
  )
}

const ContainerView = styled.View`
  background-color: #ebebeb;
`;
const HeaderView = styled.View`
  background-color: #333;
  height: 200px;
`;
const BodyView = styled.View`
  marginTop: 40px;
`;
const BodyContentView = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px;
`;
const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  borderRadius: 64px;
  borderWidth: 4px;
  borderColor: white;
  marginBottom: 10px;
  alignSelf: center;
  position: absolute;
  marginTop: 130px;
`;
const NameText = styled.Text`
  fontSize: 22px;
  fontWeight: 600;
`;
const DescText = styled.Text`
  fontSize: 16px;
  color: #696969;
  marginTop: 10px;
  text-align: center;
`;

export default Home