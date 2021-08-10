import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper role="banner">
        <GitHubIcon style={{ fontSize: 32 }} />
      </Wrapper>
    </React.Fragment>
  );
};

export default Header;

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  background-color: #24292e;
  //   color: rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 14px;
  line-height: 1.5;
  padding: 16px;
  z-index: 32;
  padding-right: 32px;
  padding-left: 32px;
  flex-wrap: nowrap;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;
