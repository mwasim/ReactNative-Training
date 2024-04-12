import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
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
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
