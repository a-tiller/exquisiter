import React from 'react';
import Popover from 'react-tiny-popover';

import { Line } from './Styled';

class StoryLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: false,
    };

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover() {
    const { popover } = this.state;

    this.setState({
      popover: !popover,
    });
  }

  render() {
    const { line } = this.props;

    return (
      <Line onClick={this.togglePopover}>
        {line.properties.text}
      </Line>
    );
  }
}

export default StoryLine;
