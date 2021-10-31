import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
`;

interface VotesProps {
  votes: number;
}

const Votes: React.FC<VotesProps> = ({ votes }) => (
  <Text>{votes > 0 ? `⭐️ ${votes}/10` : "Coming Soon"}</Text>
);

export default Votes;
