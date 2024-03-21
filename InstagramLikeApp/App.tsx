import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import fonts from './src/theme/fonts';
import colors from './src/theme/colos';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>john</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="hearto"
            style={styles.icon}
            size={24}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            style={styles.icon}
            size={24}
            color={colors.black}
          />
          <Feather
            name="send"
            style={styles.icon}
            size={24}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            style={{marginLeft: 'auto'}}
            size={24}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>sam</Text> and{' '}
          <Text style={styles.bold}>96 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>john</Text> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Animi fugit, quam vero praesentium saepe
          aliquid quibusdam voluptas molestiae, placeat facere similique
          obcaecati consequuntur. Voluptatibus dolorum numquam illo fugit
          corporis placeat.
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>john</Text> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </Text>
          <AntDesign
            name="hearto"
            style={styles.icon}
            size={14}
            color={colors.black}
          />
        </View>

        {/* Posted Date */}
        <Text>12 March, 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 16,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',//added for debugging
  },
  commentText: {
    color: colors.black,
    // backgroundColor: 'blue', //added for debugging
    flex: 1,
    lineHeight: 16,
  },
});

export default App;
