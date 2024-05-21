import {FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import FeedPost from '../../components/FeedPost'; //by putting index.tsx file in the FeedPost directory, it imports the index.tsx by default.
import posts from '../../assets/data/posts.json';
import {useRef, useState} from 'react';

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
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
