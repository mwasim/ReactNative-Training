import {Text, View} from 'react-native';
import colors from './src/theme/colos';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: fonts.size.md,
          fontWeight: fonts.weight.bold,
        }}>
        Hello React Native!
      </Text>
    </View>
  );
};

export default App;
