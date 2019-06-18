import React from 'react';

// Components
import Results from './components/Results';
import Query from './components/Query';

// Styling
import './App.css';

class App extends React.Component {
  // Local state; private member variables
  constructor() {
    super();
    this.state = {

      currentQuery: '',

      mappings: []

    }
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

  // Private member functions
  handleInput = e => {
    this.setState({currentQuery: e.target.value});
  }

  filteredMappings = () => {
    return this.state.mappings.filter((mapping) => {

      return mapping[0].join("").includes(this.state.currentQuery);

    });
  }

  // Render function
  render() {
    return (
      <div className="App">

        <Query handleInput={this.handleInput} />

        <Results filteredMappings={this.filteredMappings} />

      </div>
    );
  }

}


export default App;
