import React from 'react';

// Styling
import './Query.css';

class Query extends React.Component {

  // Render function
  render() {
    return (
      <div className="query">
        <input id="query"
               type="text"
               placeholder="Filter out text..."
               onChange={this.props.handleInput}/>
      </div>
    );
  }
}

export default Query;
