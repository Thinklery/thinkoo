import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomText from "../CustomText";

const PersonalityOptions = (props: PersonalityOptionsType) => {
  const { name, onClick, clicked, index } = props;
  const isClicked = clicked === index;

  return (
    <TouchableOpacity>
      <ImageBackground>
        <CustomText>{name}</CustomText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PersonalityOptions;

const styles = StyleSheet.create({});
