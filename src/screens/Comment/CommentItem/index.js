import React from 'react';
import {Text, View, Image} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import Spinner from '../../../utils/Spinner';
import {image} from '../../../assets';
import {styles} from '../../../styles/itemStyles';

const CommentItem = ({comment}) => {
  const {name, body, email} = comment;
  return (
    <View>
      {comment ? (
        <Content padder>
          <Card>
            <CardItem header bordered>
              <View style={{width: '20%'}}>
                <Image style={styles.avatarStyle} source={image.Avatar} />
              </View>
              <View style={{width: '80%'}}>
                <Text numberOfLines={2} style={styles.titleStyle}>
                  {name}
                </Text>
                <Text numberOfLines={2} style={styles.titleStyle}>
                  {email}
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{body}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export default CommentItem;
