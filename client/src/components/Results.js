import React from 'react';

// Components
import Entry from './Entry';

// Styling
import './Results.css';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {

      mappings: []

    }
  }

  // Private member functions
  showEntry = (entry, index) => {
    return <Entry entry={entry} key={index} />
  }

  componentWillMount() {

    const api_endpoint = "http://127.0.0.1:4000/model";

    const request = new Request(api_endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({ mappings: data.articles }))

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
        { this.colorize(this.state.mappings) }
      </div>
    );
  }
}

export default Results;
