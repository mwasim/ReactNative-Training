import {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  View,
  ViewToken,
  ViewabilityConfig,
  useWindowDimensions,
} from 'react-native';
import colors from '../../theme/colos';
import DoublePressable from '../DoublePressable';

interface ICarousal {
  images: string[];
  onDoublePress: () => void;
}

const Carousal = ({images, onDoublePress = () => {}}: ICarousal) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        pagingEnabled
        horizontal
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              aspectRatio: 1,
              width: 10,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousal;
