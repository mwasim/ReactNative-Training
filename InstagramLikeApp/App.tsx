import {ScrollView, StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost'; //by putting index.tsx file in the FeedPost directory, it imports the index.tsx by default.

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
