import React from 'react';

// Styling
import './Entry.css';

class Entry extends React.Component {

  // Render function
  render() {
    return (
      <div className="entry">
        <p>{this.props.entry}</p>
      </div>
    );
  }
}

export default Entry;
