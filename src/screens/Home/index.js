import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../redux/actions/Post/PostAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import Item from './Item';
import Spinner from '../../utils/Spinner';
import Header from '../../components/Header';
import {styles} from '../../styles/itemStyles';

const Home = props => {
  const dispatch = useDispatch();

  // get posts
  const getPost = useSelector(state => state.post?.Posts);

  // loader
  const loading = useSelector(state => state.post?.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);
  return (
    <SafeAreaView>
      {loading || getPost === null ? (
        <Spinner />
      ) : (
        <>
          <Header title="Home" />
          {/* all posts*/}
          {getPost ? (
            <FlatList
              style={styles.listStyle}
              data={getPost}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Item post={item} navigation={props.navigation} />
              )}
            />
          ) : (
            <Spinner />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
