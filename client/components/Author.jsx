import React from 'react';
import axios from 'axios';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: null,
      oldText: '',
      text: '',
    };

    this.submitLine = this.submitLine.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { node } = this.props;

    if (node === null) {
      axios.get('/api/random')
        .then((result) => {
          this.setState({
            node: result.data.identity,
            oldText: result.data.properties.text,
          });
        });
    }
  }

  submitLine(e) {
    const { node, text } = this.state;
    const { editing, changeStory } = this.props;

    e.preventDefault();

    axios.post(`/api/from/${node}`, { text })
      .then((response) => {
        changeStory(response.data.identity);
      })
      .then(() => editing())
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { oldText, text } = this.state;

    return (
      <form onSubmit={this.submitLine}>
        <label>
          {oldText}
          <input type="text" value={text} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Author;
