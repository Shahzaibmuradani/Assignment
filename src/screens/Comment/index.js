import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommentItem from './CommentItem';
import Spinner from '../../utils/Spinner';
import Header from '../../components/Header';
import {styles} from '../../styles/itemStyles';

const Comment = ({route: {params}, navigation}) => {
  const {comments} = params;
  return (
    <SafeAreaView>
      <Header title="Comments" />
      {comments ? (
        <FlatList
          style={styles.listStyle}
          data={comments}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <CommentItem comment={item} navigation={navigation} />
          )}
        />
      ) : (
        <Spinner />
      )}
    </SafeAreaView>
  );
};

export default Comment;
