import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import {useDispatch} from 'react-redux';
import {getComments} from '../../../redux/actions/Comment/CommentAction';
import {styles} from '../../../styles/itemStyles';

const Item = ({post, navigation}) => {
  const dispatch = useDispatch();

  const {id, title, body} = post;

  const onPress = () => {
    dispatch(getComments({navigation, id}));
  };
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text style={styles.titleStyle}>{title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{body}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered style={styles.commentStyle}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.textStyle}>Comments</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    </Content>
  );
};

export default Item;
