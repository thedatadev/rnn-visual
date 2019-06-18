import React from 'react';

// Styling
import './Entry.css';

class Entry extends React.Component {

  predictionColor = out => {

    const [ easy, hard ] = out;

    if ( easy > hard ) {
      return { backgroundColor: `rgba( 28, 172, 255, ${easy} )` }
    } else {
      return { backgroundColor: `rgba( 241, 60, 75, ${hard} )` }
    }

  }

  // Render function
  render() {
    return (
      <div className="entry">
        { 
          this.props.x.map( ( token, idx ) => {

            return <span style={this.predictionColor(this.props.out[idx])}>{token}</span>

          }) 
        }
      </div>
    );
  }
}

export default Entry;
