import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { moviesApi, tvApi } from "../api";
import Loader from "../components/Loader";
import HList from "../components/HList";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  width: 90%;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 10px auto;
  margin-bottom: 40px;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const {
    isLoading: moviesLoading,
    data: moviesData,
    refetch: searchMovies,
  } = useQuery(["searchMovies", query], moviesApi.search, {
    enabled: false,
  });
  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: searchTv,
  } = useQuery(["searchTv", query], tvApi.search, {
    enabled: false,
  });
  const onChangetext = (text: string) => setQuery(text);
  const onSubmit = () => {
    if (query === "") {
      return;
    }
    searchMovies();
    searchTv();
  };
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or TV Show"
        placeholderTextColor="gray"
        onChangeText={onChangetext}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />
      {moviesLoading || tvLoading ? <Loader /> : null}
      {moviesData ? (
        <HList title="Movies Results" data={moviesData.results} />
      ) : null}
      {tvData ? <HList title="TV Results" data={tvData.results} /> : null}
    </Container>
  );
};

export default Search;
