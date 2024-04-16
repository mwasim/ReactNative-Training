import {ReactNode} from 'react';
import {Pressable} from 'react-native';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTapped: number = 0;
  const handleDoublePress = () => {
    const now: number = Date.now();
    /* If time difference between last tapped is ver short 
      like 300 milliseconds, it's double tap */
    if (now - lastTapped < 300) {
      onDoublePress();
    }

    lastTapped = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
