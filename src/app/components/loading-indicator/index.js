import React from "react";
import { Container, Text, Bar, Progress } from "./style";

function LoadingBar({ text }) {
  return (
    <Container>
      {text && <Text>{text}</Text>}
      <Bar>
        <Progress />
      </Bar>
    </Container>
  );
}

function LoadingIndicator({ loading = true, children, text = null }) {
  return loading ? <LoadingBar text={text} /> : children;
}

export default LoadingIndicator;
