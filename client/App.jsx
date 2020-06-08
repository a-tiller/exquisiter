import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: [],
      root: 0,
      eNode: 0,
      sNode: 0,
      visited: false,
      amEditing: true,
    };

    this.toggleVisited = this.toggleVisited.bind(this);
  }

  toggleVisited() {
    const { visited } = this.state;
    this.setState({
      visited: !visited,
    });
  }

  render() {
    const { visited } = this.state;
    return (
      visited ? (
        <div>Not Splash</div>
      ) : (
        <div>
          Splash
          <button onClick={this.toggleVisited}>Play</button>
        </div>
      )
    );
  }
}


export default App;
