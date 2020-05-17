import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from '../components/BottomNav';

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default Main;