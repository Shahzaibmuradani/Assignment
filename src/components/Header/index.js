import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/headerStyles';

const Header = ({title}) => {
  console.log('Params', title);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
