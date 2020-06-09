import React from 'react';
import Author from './components/Author';
import Explore from './components/Explore';
import {
  GlobalStyle,
  Button,
  Container,
  LineBreak,
  Splash,
  Title,
} from './components/Styled';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: [],
      root: 0,
      eNode: null,
      sNode: 0,
      visited: false,
      amEditing: true,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.toggleVisited = this.toggleVisited.bind(this);
    this.changeStory = this.changeStory.bind(this);
  }

  toggleEditing() {
    const { amEditing } = this.state;
    this.setState({
      amEditing: !amEditing,
    });
  }

  toggleVisited() {
    const { visited } = this.state;
    this.setState({
      visited: !visited,
    });
  }

  changeStory(node) {
    this.setState({
      sNode: node,
    });
  }

  render() {
    const { eNode, visited, amEditing } = this.state;
    return (
      <>
        <GlobalStyle />
        {visited ? (
          <Container>
            <Title>exquisiter</Title>
            {amEditing ? (
              <Author node={eNode} editing={this.toggleEditing} story={this.changeStory} />
            ) : (
              <Explore />
            )}
          </Container>
        ) : (
          <Container>
            <Title>exquisiter</Title>
            <Splash>
              <p>
                The &#39;exquisite corpse&#39; or round-robin story is a classic collaborative storytelling format where authors explore a narrative where no one is in complete control.
              </p>
              <LineBreak />
              <p>
                But while the past is fixed, imaginary futures are plenitudinous. There is so much more than one narrative to explore.
              </p>
              <LineBreak />
              <p>
                All it takes to participate in Exquisiter is to read a phrase or sentence another author wrote, and add one of your own.
              </p>
              <br />
              <Button onClick={this.toggleVisited}>Play</Button>
            </Splash>
          </Container>
        )}
      </>
    );
  }
}


export default App;
