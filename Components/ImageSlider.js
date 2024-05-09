import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { Magmar, arcaine, ladyfox, lafire, rede } from "../assets/IMAGES";
export default function ImageSlider() {
  const images = [arcaine, ladyfox, lafire, Magmar, rede];
  return (
    <View>
      <SliderBox
        images={images}
        dotColor="red"
        inactiveDotColor="black"
        dotStyle={{ height: 20, width: 20, borderRadius: 50 }}
        imageLoadingColor="black"
        autoplay={true}
        autoplayinterval={10}
        circleLoop={true}
        firstitem={4}
        paginationBoxVerticalPadding={20}
        ImageComponentStyle={{ width: 200, height: 200 }} // Adjust the width and height as needed
      />
    </View>
  );
}
