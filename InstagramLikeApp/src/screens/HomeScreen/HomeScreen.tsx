import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost'; //by putting index.tsx file in the FeedPost directory, it imports the index.tsx by default.
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  /* Using posts.map to render 100 posts at a time is not optimal,
      This can make the app very slow,
      <ScrollView style={styles.app}>
      {posts.map(post => (
        <FeedPost key={post.id} post={post} />
      ))}
      </ScrollView>

      Better Alternative is FlatList
      */

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
