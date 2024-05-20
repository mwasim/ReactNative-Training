import {FlatList, Image, View, useWindowDimensions} from 'react-native';

interface ICarousal {
  images: string[];
}

const Carousal = ({images}: ICarousal) => {
  const {width} = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        )}
        pagingEnabled
        horizontal
      />
    </View>
  );
};

export default Carousal;
