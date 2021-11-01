import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  width: 90%;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 10px auto;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const onChangetext = (text: string) => setQuery(text);
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or TV Show"
        placeholderTextColor="gray"
        onChangeText={onChangetext}
        returnKeyType="search"
      />
    </Container>
  );
};

export default Search;
