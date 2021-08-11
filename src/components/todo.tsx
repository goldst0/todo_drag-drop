import React from "react";
import styled from "styled-components";
// import CheckIcon from "@material-ui/icons/Check";

const Todo: React.FC = () => {
  return (
    <React.Fragment>
      <Title>
        {/* <CheckIcon style={{ fontSize: "20px" }} /> */}
        Task List
      </Title>
      <Cards>
        <Card>
          <Lists>
            <List>
              <Number>1</Number>
              <ListTitle>Todo</ListTitle>
              <Summary role="button">
                <Svg2>
                  <Path2></Path2>
                </Svg2>
              </Summary>
              <Button type="button">
                <Svg>
                  <Path></Path>
                </Svg>
              </Button>
            </List>
          </Lists>
        </Card>
        <Card2>
          <AddCard>
            <Button2 type="button">
              <Svg>
                <Path></Path>
              </Svg>
            </Button2>
            <Span>Add Card</Span>
          </AddCard>
        </Card2>
      </Cards>
    </React.Fragment>
  );
};

const Title = styled.div`
  color: #24292e;
  font-size: 20px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  margin: 0.67em 0;
  margin-bottom: 20px;
  padding-left: 32px;
`;
const Cards = styled.div`
  padding: 16px;
  display: flex;
`;
const Card = styled.article`
  height: 509px;
  overflow-x: auto;
  border-radius: 6px;
  border-width: 1px;
  max-width: 355px;
  min-width: 355px;
  background-color: #f6f8fa;
  //   display: flex;
  white-space: normal;
  margin-right: 16px;
  overflow: hidden;
  vertical-align: top;
  position: relative;
  flex: auto;
  flex-direction: column;
  border: 1px solid;
  border-color: #ebedef;
  box-sizing: border-box;
  -webkit-user-drag: none;
  word-wrap: break-word;
  color: #24292e;
  font-size: 14px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;
const Lists = styled.div`
  box-sizing: border-box;
  display: block;
  white-space: normal;
  word-wrap: break-word;
  color: #24292e;
  font-size: 14px;
  line-height: 1.5;
`;
const List = styled.div`
  font-weight: 600;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  display: block;
  white-space: normal;
  word-wrap: break-word;
  color: #24292e;
  font-size: 14px;
  line-height: 1.5;
`;
const Number = styled.span`
  background-color: rgba(209, 213, 218, 0.5);
  border: 1px solid transparent;
  border-radius: 2em;
  color: #24292e;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  min-width: 20px;
  margin: 0 6px;
  text-align: center;
  margin-left: 4px;
  vertical-align: middle;
  position: relative;
  box-sizing: border-box;
  white-space: normal;
  word-wrap: break-word;
`;
const ListTitle = styled.span`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  white-space: normal;
  word-wrap: break-word;
  color: #24292e;
  line-height: 1.5;
`;
const Button = styled.button`
  padding: 4px;
  position: relative;
  float: right;
  background: transparent;
  border: 0;
  //   box-shadow: none;
  //   color: #586069;
  //   display: inline-flex;
  //   line-height: 1;
  //   margin-left: 5px;
  //   vertical-align: middle;
  //   border-radius: 0;
  //   cursor: pointer;
  //   font-family: inherit;
  //   font-size: inherit;
  //   text-transform: none;
  //   overflow: visible;
  //   font: inherit;
  //   margin: 0;
  //   box-sizing: border-box;
  //   text-rendering: auto;
  //   letter-spacing: normal;
  //   word-spacing: normal;
  //   text-indent: 0px;
  //   text-shadow: none;
  //   text-align: center;
  //   align-items: flex-start;
  //   white-space: normal;
  //   word-wrap: break-word;
`;
const Svg = styled.svg`
  fill: currentColor;
  //   display: inline-block;
  //   overflow: visible;
  //   vertical-align: text-bottom;
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  //   color: #586069;
  //   line-height: 1;
  //   cursor: pointer;
  //   font-family: inherit;
  //   font-size: inherit;
  //   text-transform: none;
  //   font: inherit;
  //   text-rendering: auto;
  //   letter-spacing: normal;
  //   word-spacing: normal;
  //   text-indent: 0px;
  //   text-shadow: none;
  //   text-align: center;
  //   white-space: normal;
  //   word-wrap: break-word;
`;
const Path = styled.path`
  //   box-sizing: border-box;
  //   fill-rule: evenodd;
  d: path(
    "M 7.75 2 a 0.75 0.75 0 0 1 0.75 0.75 V 7 h 4.25 a 0.75 0.75 0 1 1 0 1.5 H 8.5 v 4.25 a 0.75 0.75 0 1 1 -1.5 0 V 8.5 H 2.75 a 0.75 0.75 0 0 1 0 -1.5 H 7 V 2.75 A 0.75 0.75 0 0 1 7.75 2 Z"
  );
  //   transform-origin: 0px 0px;
  //   fill: currentColor;
  color: rgb(88, 96, 105);
  line-height: 1;
  //   cursor: pointer;
  //   font-family: inherit;
  //   font-size: inherit;
  //   text-transform: none;
  //   font: inherit;
  //   text-rendering: auto;
  //   letter-spacing: normal;
  //   word-spacing: normal;
  //   text-indent: 0px;
  //   text-shadow: none;
  //   text-align: center;
  //   white-space: normal;
  //   word-wrap: break-word;
`;
const Summary = styled.summary`
  list-style: none;
  padding: 4px;
  float: right;
  color: #6a737d;
  background: transparent;
  border: 0;
  box-shadow: none;
  display: inline-block;
  line-height: 1;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  counter-increment: list-item 0;
  white-space: normal;
  word-wrap: break-word;
  font-size: 14px;
`;
const Svg2 = styled.svg`
  fill: currentColor;
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  list-style: none;
  color: #6a737d;
  line-height: 1;
  cursor: pointer;
  white-space: normal;
  word-wrap: break-word;
  font-size: 14px;
`;
const Path2 = styled.path`
  d: path(
    "M 8 9 a 1.5 1.5 0 1 0 0 -3 a 1.5 1.5 0 0 0 0 3 Z M 1.5 9 a 1.5 1.5 0 1 0 0 -3 a 1.5 1.5 0 0 0 0 3 Z m 13 0 a 1.5 1.5 0 1 0 0 -3 a 1.5 1.5 0 0 0 0 3 Z"
  );
  color: rgb(88, 96, 105);
  line-height: 1;
`;
const Card2 = styled.div`
  //   border-style: dashed;
  //   border-radius: 6px;
  //   border: 1px solid #e1e4e8;
  //   cursor: pointer;
  //   font-size: inherit;
  //   overflow: visible;
  //   box-sizing: border-box;
`;
const AddCard = styled.button`
  font-weight: 600;
  border-color: #d1d5da;
  width: 315px;
  display: inline-block;
  text-align: center;
  padding-bottom: 40px;
  padding-top: 40px;
  vertical-align: top;
  background-color: #fff;
  color: #586069;
  border-style: dashed !important;
  border-radius: 6px;
    border: 1px solid #e1e4e8;
  cursor: pointer;
  font-size: inherit;
  overflow: visible;
  box-sizing: border-box;
`;
const Button2 = styled.button`
  position: relative;
  background: transparent;
  border: 0;
`;
const Span = styled.span`
  font-size: 14px;
`;

export default Todo;
