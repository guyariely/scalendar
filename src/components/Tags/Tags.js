import React from "react";
import { StyledTags, StyledTag, TagContent, Link } from "./style";

function TimeTag({ theme, content }) {
  return <TagContainer theme={theme}>{`⏰ ${content}`}</TagContainer>;
}

function UrgentTag({ theme, content }) {
  const level = Number(content);
  if (Number.isNaN(level) || level < 1 || level > 3) return null;

  return (
    <TagContainer theme={theme}>
      {Array(level).fill("🚨").join("")}
    </TagContainer>
  );
}

function LinkTag({ theme, content }) {
  return (
    <TagContainer theme={theme}>
      {"🔗 "}
      <Link
        href={content.slice(0, 4) !== "http" ? `https://${content}` : content}
        target="_blank"
        rel="noopener noreferrer"
        theme={theme}
      >
        {content}
      </Link>
    </TagContainer>
  );
}

function Tag({ theme, type, content }) {
  switch (type) {
    case "time":
      return <TimeTag theme={theme} content={content} />;
    case "link":
      return <LinkTag theme={theme} content={content} />;
    case "urgent":
      return <UrgentTag theme={theme} content={content} />;
    default:
      return null;
  }
}

function TagContainer({ theme, children }) {
  return (
    <StyledTag theme={theme}>
      <TagContent>{children}</TagContent>
    </StyledTag>
  );
}

const tagTypes = ["time", "link", "urgent"];

function Tags({ theme, tags }) {
  if (tagTypes.every(tag => !tags[tag])) return null;

  return (
    <StyledTags>
      {Object.entries(tags).map(([type, content], i) => (
        <Tag type={type} content={content} key={i} theme={theme} />
      ))}
    </StyledTags>
  );
}

export default Tags;
