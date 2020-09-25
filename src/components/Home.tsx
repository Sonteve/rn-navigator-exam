import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 반갑습니다.</Text>
      <Button
        title="TodoList 시작하기"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
