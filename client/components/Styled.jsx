import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #decbe4;
  }
`;

const Container = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px 8px 8px 8px;
  display: grid;
  max-width: 600px;
  grid-template-areas:
    "title"
    "body";
  grid-template-columns: 1fr;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const Button = styled.button`
  background-color: #989898;
  border-radius: 3px;
  color: #f8f8f8;
  cursor: pointer;
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin: 10px auto;
  padding: .5em 1em;
`;

const EditBlock = styled.div`
  grid-area: body;
  font-family: "Barlow";
  font-size: 18px;
  padding: 20px 40px;
`;

const LineBreak = styled.hr`
  border: none;
  border-top: 1px solid;
  border-color: #d9d9d9;
  margin: 10px auto;
  width: 60%;
`;

const Line = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
`;

const PopoverBox = styled.div`
  background-color: #d1e4cb;
  border-radius: 3px;
  opacity: 0.7;
  padding: 5px 10px;
`;

const Splash = styled.div`
  grid-area: body;
  font-family: "Barlow";
  font-size: 18px;
  padding: 20px 40px;
`;

const StoryBlock = styled.div`
  grid-area: body;
  font-family: "Barlow";
  font-size: 18px;
  padding: 20px 40px;
`;

const SLine = styled(Line)`
  :hover {
    color: #d1e4cb;
  }
`;

const Title = styled.h3`
  grid-area: title;
  background-color: #989898;
  border-radius: 8px 8px 0px 0px;
  color: #f8f8f8;
  font-family: "Fredericka the Great";
  font-size: 50px;
  font-weight: 400;
  height: 75px;
  line-height: 75px;
  text-align: center;
`;

export {
  GlobalStyle,
  Button,
  Container,
  EditBlock,
  Line,
  LineBreak,
  PopoverBox,
  Splash,
  StoryBlock,
  SLine,
  Title,
};
