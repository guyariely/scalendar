import React from "react";
import { StyledTags, StyledTag, TagContent } from "./style";

function Tag({ theme, content }) {
  return (
    <StyledTag theme={theme}>
      <TagContent>{content}</TagContent>
    </StyledTag>
  );
}

function Tags({ theme }) {
  const tags = ["⏰ 12:00-14:00", "🔗 google.com", "🚨 urgent"];
  return (
    <StyledTags>
      {tags.map(content => (
        <Tag theme={theme} content={content}></Tag>
      ))}
    </StyledTags>
  );
}

export default Tags;
