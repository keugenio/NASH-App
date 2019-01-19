import React from 'react';
import { Text } from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import  { Icon } from 'react-native-elements';

const MainMenu = () => (
  <MenuProvider style={{flexDirection: 'column-reverse', alignItems:'flex-end', paddingRight: 15}}>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger customStyles={{triggerText:{fontSize:20}}}>
        <Icon name='bars' type='font-awesome' color='#0d47a1'/>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} text='Home' />
        <MenuOption value={2} text='What is NASH' />
        <MenuOption value={3} text='Diagnoses' />
        <MenuOption value={4} text='Treatments' />
        <MenuOption value={5} text='Quiz' />
        <MenuOption value={6} text='My Activity' />
        <MenuOption value={6} text='References & Credits' />        

      </MenuOptions>
    </Menu>
  </MenuProvider>
);

export default MainMenu;