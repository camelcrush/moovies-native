import { useNavigation } from "@react-navigation/core";
import { BlurView } from "expo-blur";
import React from "react";
import {
  StyleSheet,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import { Movie } from "../api";
import { makeImgPath } from "../utils";
import Poster from "./Poster";

const BgImg = styled.Image``;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 90%;
  margin: 0 auto;
`;

const Column = styled.View`
  width: 60%;
`;
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? "white" : props.theme.textColor)};
`;
const Overview = styled.Text<{ isDark: boolean }>`
  margin-top: 10px;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"};
`;
const Votes = styled(Overview)`
  font-size: 12px;
`;

interface SlideProps {
  backdropPath: string;
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
  overview: string;
  fullData: Movie;
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
  fullData,
}) => {
  const isDark = useColorScheme() === "dark";
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {
      screen: "Detail",
      params: { ...fullData },
    });
  };
  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={{ flex: 1 }}>
        <BgImg
          style={StyleSheet.absoluteFill}
          source={{ uri: makeImgPath(backdropPath) }}
        />
        <BlurView
          tint={isDark ? "dark" : "light"}
          intensity={85}
          style={StyleSheet.absoluteFill}
        >
          <Wrapper>
            <Poster path={posterPath} />
            <Column>
              <Title isDark={isDark}>{originalTitle}</Title>
              {voteAverage > 0 ? (
                <Votes isDark={isDark}>⭐️ {voteAverage}/10</Votes>
              ) : null}
              <Overview isDark={isDark}>{overview.slice(0, 100)}...</Overview>
            </Column>
          </Wrapper>
        </BlurView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Slide;
