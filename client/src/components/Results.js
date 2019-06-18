import React from 'react';

// Components
import Entry from './Entry';

// Styling
import './Results.css';

class Results extends React.Component {

  // Private member functions
  showEntry = (entry, index) => {
    return <Entry entry={entry} key={index} />
  }


  colorize = ( mappings ) => {

    return mappings.map((mapping, index) => {

      let [ x, y, out ] = mapping;

      return <Entry x={x} y={y} out={out} key={index} />


    });

  }

  // Render function
  render() {
    return (
      <div className="results">
        { this.colorize(this.props.filteredMappings()) }
      </div>
    );
  }
}

export default Results;
