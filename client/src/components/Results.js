import React from 'react';

// Components
import Entry from './Entry';

// Styling
import './Results.css';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {

      mapping: {
        'X': [],
        'y': [],
        'out': []
      }

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
        .then(data => this.setState({ mapping: data.mapping }))

  }

  show = () => {
    return <Entry entry={"hello world"} index={0} />
  }


  getTexts = ( texts ) => {

    return texts.map(tokens => tokens.join(""))

  }

  colorize = ( entry, index ) => {

    return <Entry entry={entry} key={index} />

  }

  // Render function
  render() {
    return (
      <div className="results">
        { this.getTexts(this.state.mapping.X).map(this.colorize) }
      </div>
    );
  }
}

export default Results;
